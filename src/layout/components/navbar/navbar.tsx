// import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import Stack from '@mui/material/Stack';
import List from '@mui/material/List';
import { Button, NavbarLink } from '../../../components';
import arrow from '/assets/arrow.png';
import helpCenter from '/assets/help-center.png';
import payment4 from '/assets/logo.png';
import home from '/assets/home.png';

export const Navbar = () => {
  return (
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
            >
              <NavbarLink title="dashboard" url="/vite-deploy-demo" icon={home} />
            </List>
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
  );
};
