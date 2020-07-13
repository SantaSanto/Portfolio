import React from 'react';

import { ThemeProvider } from '@material-ui/core';
import { CssBaseline } from '@material-ui/core';
import { createMuiTheme } from '@material-ui/core';

import { PageRouter } from './page/PageRouter'

const theme = createMuiTheme({
  typography: {
    fontFamily: "Rubik"
  },
  overrides: {
    MuiCssBaseline: {
      "@global": {
        "@font-face": 'Rubik'
      }
    }
  }
});


export const App = () => {

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
        <PageRouter />
    </ThemeProvider>
  )
}