"use client"
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',

    h1: {
      fontSize: '3.125rem',
      '@media (min-width:900px)': {
        fontSize: '2.75rem',
      },
      '@media (min-width:600px)': {
        fontSize: '2.375rem',
      },
    },
    h2: {
      fontSize: '2.5rem',
      '@media (min-width:900px)': {
        fontSize: '2.125rem',
      },
      '@media (min-width:600px)': {
        fontSize: '1.875rem',
      },
    },
    h3: {
      fontSize: '2.25rem',
      '@media (min-width:900px)': {
        fontSize: '1.875rem',
      },
      '@media (min-width:600px)': {
        fontSize: '1.625rem',
      },
    },
    h4: {
      fontSize: '2rem',
      '@media (min-width:900px)': {
        fontSize: '1.625rem',
      },
      '@media (min-width:600px)': {
        fontSize: '1.375rem',
      },
    },
    h5: {
      fontSize: '1.875rem',
      '@media (min-width:900px)': {
        fontSize: '1.5rem',
      },
      '@media (min-width:600px)': {
        fontSize: '1.25rem',
      },
    },
    h6: {
      fontSize: '1.625rem',
      '@media (min-width:900px)': {
        fontSize: '1.25rem',
      },
      '@media (min-width:600px)': {
        fontSize: '1rem',
      },
    },
    subtitle1: {
      fontSize: '1.625rem',
      '@media (min-width:900px)': {
        fontSize: '1.25rem',
      },
      '@media (min-width:600px)': {
        fontSize: '1.125rem',
      },
    },
    subtitle2: {
      fontSize: '1.5rem',
      '@media (min-width:900px)': {
        fontSize: '1.125rem',
      },
      '@media (min-width:600px)': {
        fontSize: '1rem',
      },
    },
    body1: {
      fontSize: '1.625rem',
      '@media (min-width:900px)': {
        fontSize: '1.25rem',
      },
      '@media (min-width:600px)': {
        fontSize: '1.125rem',
      },
    },
    body2: {
      fontSize: '1.5rem',
      '@media (min-width:900px)': {
        fontSize: '1.125rem',
      },
      '@media (min-width:600px)': {
        fontSize: '1rem',
      },
    },
    button: {
      fontSize: '1.5rem',
      textTransform: 'uppercase',
      '@media (min-width:900px)': {
        fontSize: '1.125rem',
      },
      '@media (min-width:600px)': {
        fontSize: '1rem',
      },
    },
    caption: {
      fontSize: '1.25rem',
      '@media (min-width:900px)': {
        fontSize: '1rem',
      },
      '@media (min-width:600px)': {
        fontSize: '0.875rem',
      },
    },
    overline: {
      fontSize: '1.25rem',
      textTransform: 'uppercase',
      '@media (min-width:900px)': {
        fontSize: '1rem',
      },
      '@media (min-width:600px)': {
        fontSize: '0.875rem',
      },
    },
  },
  palette: {
    primary: {
      main: '#008080', // Teal color
    },
  },
});

export default theme;
