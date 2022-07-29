import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { Navbar } from '@/components/index';
import { Fragment } from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <Navbar />
      <Component {...pageProps} />
    </Fragment>
  );
}

export default MyApp;
