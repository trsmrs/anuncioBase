import * as React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { ThemeProvider } from '@material-ui/styles';
import { Provider } from 'next-auth/client'
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from '../src/theme';
import {ToastyProvider}  from '../src/contexts/Toasty';


export default function MyApp(props) {
  const { Component, pageProps } = props;

  return (
     <React.Fragment>
      <Head>
        <title>Anúncios -CloneOL</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <Provider session={pageProps.session}>
        <ThemeProvider theme={theme}>
          <ToastyProvider>
              <CssBaseline />
              <Component {...pageProps} />
            </ToastyProvider>
        </ThemeProvider>
      </Provider>
      </React.Fragment>
    
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};