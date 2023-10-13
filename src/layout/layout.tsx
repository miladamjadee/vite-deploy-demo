import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import Stack from '@mui/material/Stack';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import { Button } from '../components';
import { Outlet } from 'react-router-dom';
import arrow from '/assets/arrow.png';
import helpCenter from '/assets/help-center.png';
import payment4 from '/assets/logo.png';

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
          margin: '0 60px 0 60px',
          display: 'flex',
          justifyContent: 'center',
          flexGrow: 1,
        }}
      >
        <Grid container xs={12} direction="row" gap={3} alignItems="stretch" justifyContent="center" sx={{ height: '100%' }}>
          <Grid xs={2.5} display={{ xs: 'none', lg: 'flex' }} marginLeft="-62px" marginRight={0} paddingTop="1.2rem" paddingBottom="1.2rem" style={{ height: '100%' }}>
            <Box
              sx={{
                height: '100%',
                backgroundColor: 'white',
                borderRadius: '15px',
                boxShadow: '0px 4px 4px 0px #C7D3D680',
              }}
            >
              <Grid container direction="column" alignItems="stretch" justifyContent="space-between" paddingBottom="16px" sx={{ height: '100%' }}>
                <Stack flex={1} height="100%">
                  <Stack flex={0} flexDirection="row" justifyContent="space-between" pl={5} pr={3} py={3}>
                    <Stack justifyContent="center" alignItems="center">
                      <img width="100%" height="100%" src={payment4} alt="payment4" />
                    </Stack>
                    <Stack width={17.88} height={17} justifyContent="center" alignItems="center">
                      <img width="100%" height="100%" src={arrow} />
                    </Stack>
                  </Stack>
                  <Stack height="100%">
                    <List
                      sx={{
                        '& .MuiSvgIcon-root': {
                          fontSize: '22px',
                        },
                        '& .MuiTypography-root': {
                          fontSize: '12px',
                        },
                      }}
                    ></List>
                  </Stack>
                  <Stack flex={0}>
                    <Stack justifyContent="center" alignItems="center">
                      <Stack
                        flex={1}
                        gap={2}
                        sx={(theme) => ({
                          padding: theme.spacing(2, 3),
                          margin: theme.spacing(1.25),
                          backgroundColor: '#6f6fd4',
                          boxShadow: '0 7px 13px 0 rgba(208, 208, 239, 0.34)',
                          borderRadius: theme.spacing(2),
                        })}
                      >
                        <img height="100%" width="100%" src={helpCenter} alt="help center" />

                        <Button size="large" sx={{ backgroundColor: 'white', color: '#6f6fd4' }}>
                          Help Center!
                        </Button>
                      </Stack>
                    </Stack>
                  </Stack>
                </Stack>
              </Grid>
            </Box>
          </Grid>

          <Grid container xs={9.5} direction="row" paddingTop="1.2rem" paddingBottom="70px" style={{ height: '100%' }}>
            <Grid xs={12} ml={2.5}>
              <Box
                mr="-55px"
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  backgroundColor: 'transparent',
                }}
              >
                <Typography style={{ fontWeight: 'bold', fontSize: '1.5rem', fontFamily: 'Poppins-bold' }}>Dashboard</Typography>
              </Box>
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
