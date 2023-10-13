import * as React from 'react';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';

type ThemeProviderProps = {
  children: React.ReactNode;
};

export const ThemeProvider = (props: ThemeProviderProps) => {
  const theme = React.useMemo(
    () =>
      createTheme({
        direction: 'ltr',
        palette: {
          mode: 'light',
          common: {
            black: '#000',
            white: '#fff',
          },
          primary: {
            main: '#864aff',
            light: '#d0d0ef',
            dark: '#1e1e56',
            contrastText: '#fff',
          },
          secondary: {
            main: '#777777',
            light: '',
            dark: '',
            contrastText: '#fff',
          },
          error: {
            main: '#d32f2f',
            light: '#ef5350',
            dark: '#c62828',
            contrastText: '#fff',
          },
          warning: {
            main: '#ed6c02',
            light: '#ff9800',
            dark: '#e65100',
            contrastText: '#fff',
          },
          info: {
            main: '#0288d1',
            light: '#03a9f4',
            dark: '#01579b',
            contrastText: '#fff',
          },
          success: {
            main: '#2e7d32',
            light: '#4caf50',
            dark: '#1b5e20',
            contrastText: '#fff',
          },
          text: {
            primary: 'rgba(0,0,0,0.87)',
            secondary: 'rgba(0,0,0,0.6)',
            disabled: 'rgba(0,0,0,0.38)',
          },
          background: {
            paper: '#fff',
            default: '#fff',
          },
        },
        typography: {
          fontFamily: 'Poppins, sans-serif',
        },
      }),
    []
  );

  return <MuiThemeProvider theme={theme}>{props.children}</MuiThemeProvider>;
};
