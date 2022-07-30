import '@/assets/css/globals.css';
import type { AppProps } from 'next/app';
import { Navbar, Footer } from '@/components/index';
import { Fragment } from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <Component {...pageProps} />
        <Footer className="mt-auto" />
      </div>
    </Fragment>
  );
}

export default MyApp;
