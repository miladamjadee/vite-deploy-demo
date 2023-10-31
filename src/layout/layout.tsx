import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import { Outlet } from 'react-router-dom';
import { Header, Navbar } from './components';

export const Layout = () => {
  return (
    <Box
      sx={{
        bgcolor: 'white',
        height: '100vh',
        minHeight: 700,
        padding: 0,
        overflow: 'hidden',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        position: 'relative',
        zIndex: 0,
      }}
    >
      <Box
        sx={{
          height: '100%',
          backgroundColor: '#F4F8F9',
          marginY: 0,
          marginX: {
            xs: 0,
            lg: '60px',
          },
          display: 'flex',
          justifyContent: 'center',
          flexGrow: 1,
        }}
      >
        <Grid container xs={12} direction="row" gap={3} alignItems="stretch" justifyContent={{ xs: 'flex-start', lg: 'center' }} sx={{ height: '100%' }}>
          <Grid xs={2.5} display={{ xs: 'none', lg: 'flex' }} marginLeft="-62px" marginRight={0} paddingTop="1.2rem" paddingBottom="1.2rem" style={{ height: '100%' }}>
            <Navbar />
          </Grid>

          <Grid container xs={12} lg={9.5} direction="row" paddingTop="1.2rem" paddingBottom="70px" style={{ height: '100%' }}>
            <Grid xs={12} ml={2.5}>
              <Header />
            </Grid>
            <Grid xs={12} height="100%" mt={2} mx={2.5}>
              <Box
                sx={{
                  height: '100%',
                  overflowY: 'auto',
                }}
              >
                <Outlet />
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};
