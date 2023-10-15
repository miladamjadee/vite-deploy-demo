import { Table as MuiTable, TableHead, TableRow, TableCell, TableBody, Typography } from '@mui/material';
import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
// import styles from './table.module.css';

interface Column {
  id: string;
  label: string;
  minWidth?: number;
  align?: 'right';
}

interface TableProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any[];
  columns: Column[] | string[];
  footer?: React.ReactNode;
  toolbar?: React.ReactNode;
}

export const Table: React.FC<TableProps> = ({ data, columns, footer, toolbar }) => {
  return (
    <TableContainer component={Paper} sx={{ boxShadow: 'none', borderRadius: '15px', bgcolor: '#F8F8FD' }}>
      {toolbar}
      <MuiTable>
        <TableHead sx={{ bgcolor: '#F8F8FD' }}>
          <TableRow>
            {columns.map((column, index) => {
              if (typeof column === 'string') {
                return <TableCell key={`${index}-${column}`}>{column}</TableCell>;
              } else {
                return (
                  <TableCell key={column.id} align={column.align} style={{ minWidth: column.minWidth, textAlign: 'center', color: '#728191', fontSize: 11, fontWeight: 400, border: 0 }}>
                    {column.label}
                  </TableCell>
                );
              }
            })}
          </TableRow>
        </TableHead>

        <TableBody>
          {data.length > 0 ? (
            data.map((row, index) => (
              <TableRow
                key={index}
                onClick={row.onClick}
                tabIndex={-1}
                sx={() => ({
                  cursor: 'pointer',
                })}
              >
                {columns.map((column, index) => {
                  if (typeof column === 'string') {
                    return <TableCell key={`${index}-${column}`}>{row[column]}</TableCell>;
                  } else {
                    const value = row[column.id];
                    const lastIndex = columns.length - 1;

                    return (
                      <TableCell
                        key={`${index}-${column.id}`}
                        sx={{
                          bgcolor: '#F8F8FD',
                          borderBottom: 0,
                          p: 0,
                        }}
                      >
                        <Box
                          my={0.5}
                          py={1.5}
                          display="flex"
                          alignItems="center"
                          justifyContent="center"
                          sx={{
                            minHeight: 26,
                            bgcolor: 'white',
                            ...(index === 0
                              ? {
                                  ml: 1,
                                  borderTopLeftRadius: '14px',
                                  borderBottomLeftRadius: '14px',
                                }
                              : {}),
                            ...(lastIndex === index
                              ? {
                                  mr: 1,
                                  borderTopRightRadius: '14px',
                                  borderBottomRightRadius: '14px',
                                }
                              : {}),
                          }}
                        >
                          {value}
                        </Box>
                      </TableCell>
                    );
                  }
                })}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell align="center" colSpan={7} style={{ border: 0 }}>
                <Typography color="#1E1E56">No Data To Display</Typography>
              </TableCell>
            </TableRow>
          )}
          <TableRow>
            <TableCell align="center" colSpan={7} style={{ border: 0 }}></TableCell>
          </TableRow>
        </TableBody>
        {footer}
      </MuiTable>
    </TableContainer>
  );
};

export default Table;
