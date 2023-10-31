// import * as React from 'react';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { BalanceProps } from './type';

export const Balance = (props: BalanceProps) => {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      sx={(theme) => ({
        backgroundColor: '#F8F8FD',
        borderRadius: '15px',
        height: 54,
        paddingX: theme.spacing(2),
        cursor: 'pointer',
      })}
    >
      <Stack alignItems="center" justifyContent="space-between" flexDirection="row" flex={1}>
        <Stack flexDirection="row" gap={1}>
          <Stack width={6} height={27} bgcolor={props.bgColor} borderRadius={15}></Stack>
          <Stack flexDirection="row" gap={1}>
            <Stack width={26} height={26}>
              <img width="100%" height="100%" src={props.img} />
            </Stack>
            <Typography color="#363636" style={{ fontSize: 15, fontWeight: 400 }}>
              {props.title}
            </Typography>
          </Stack>
        </Stack>
        <Stack flexDirection="row" gap={1} alignItems="center">
          <Typography color="#1E1E56" style={{ fontSize: 15, fontWeight: 400 }}>
            {props.price}
          </Typography>
          <Typography color="#D0D0EF" style={{ fontSize: 9, fontWeight: 400 }}>
            {props.symbol}
          </Typography>
        </Stack>
      </Stack>
    </Box>
  );
};
