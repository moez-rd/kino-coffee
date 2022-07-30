import '@/assets/css/globals.css';
import type { AppProps } from 'next/app';
import { Navbar, Footer } from '@/components/index';
import { Fragment } from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </Fragment>
  );
}

export default MyApp;
