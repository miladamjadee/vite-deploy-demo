// import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export const Header = () => {
  return (
    <Box
      mr="-55px"
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'transparent',
      }}
    >
      <Typography style={{ fontWeight: 'bold', fontSize: '1.5rem' }}>Dashboard</Typography>
    </Box>
  );
};
