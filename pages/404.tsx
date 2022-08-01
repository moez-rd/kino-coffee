import { NextPage } from 'next';
import { Fragment } from 'react';
import CoffeeBeans from '@/assets/svg/coffee-beans.svg';
import Head from 'next/head';
import Link from 'next/link';

const NotFound: NextPage = () => {
  return (
    <Fragment>
      <Head>
        <title>Kino Coffee - 404</title>
        <meta
          name="description"
          content="Freshly grind coffee to start your day. With hight quality ingredients. Perfection."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex h-screen flex-col items-center py-40">
        <CoffeeBeans className="mx-auto mb-4 w-7 animate-bounce fill-primary-800 md:w-14" />
        <h1 className="text-5xl font-black md:text-7xl">404</h1>
        <p className="text-lg text-primary-500 md:text-3xl">PAGE NOT FOUND</p>
        <p>
          Back to{' '}
          <Link href="/">
            <a className="text-primary-400 underline hover:text-primary-500">Home</a>
          </Link>
        </p>
      </div>
    </Fragment>
  );
};

export default NotFound;
