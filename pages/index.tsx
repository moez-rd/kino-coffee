import type { NextPage } from 'next';
import { Menu, MenuItem } from '@/components/index';
import Head from 'next/head';
import { Fragment } from 'react';
import Divider from '@/assets/svg/divider.svg';
import Kino from '@/assets/svg/kino.svg';
import Underline from '@/assets/svg/underline.svg';
import Image from 'next/image';

const Home: NextPage = () => {
  return (
    <Fragment>
      <Head>
        <title>Kino Coffee</title>
        <meta name="description" content="Kino Coffee - Palembang" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="relative flex h-[240px] w-full flex-col overflow-hidden py-8 text-center tracking-[0.5rem] sm:h-[600px] sm:py-40">
        <Image
          src="/coffee.jpg"
          alt=""
          layout="fill"
          objectFit="cover"
          className="absolute top-0 -z-10 w-full brightness-50"
        />
        <Divider className="absolute bottom-0 fill-gray-200" />
        {/* <Kino className="h-16 fill-gray-200 sm:h-20" /> */}
        <h1 className="mt-4 px-4 text-2xl font-bold uppercase text-gray-100 sm:text-4xl">
          Looking for Perfectly Coffee?
        </h1>
        <p className="text-gray-100">We got you!</p>
      </header>

      <main id="menu">
        <section className="relative overflow-hidden py-12 px-4 sm:px-10 md:px-14 xl:px-40 2xl:px-80">
          <p className="max-w-2xl text-center font-libre-baskerville text-4xl font-semibold text-primary-300 lg:text-left lg:text-7xl">
            Freshly grind{' '}
            <span className="relative inline-block text-primary-700">
              coffee <Underline className="absolute -bottom-1 -z-10 w-16 fill-primary-700" />
            </span>{' '}
            to start your day. With hight quality ingredients. Perfection.
          </p>
          <Kino className="absolute inset-y-0 -right-24 -z-10 my-auto h-52 fill-primary-500/10 lg:h-full" />
        </section>
        <section className="px-4 py-12 sm:px-10 md:px-14 xl:px-40 2xl:px-80">
          <h2 className="text-center text-xl font-bold tracking-[0.5rem]">MENU LIST</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-14">
            <Menu title="Signature Drink" type="ICED/HOT">
              <MenuItem name="Kopi Susu" description="Signature drink" price="20" best />
              <MenuItem name="Mango" description="Signature drink" price="24" />
              <MenuItem name="Panna Latte" description="Signature drink" price="26" />
            </Menu>
            <Menu title="Coffee" type="ICED/HOT">
              <MenuItem name="Espresso" description="Coffee" price="12" />
              <MenuItem name="Americano" description="Coffee" price="25" />
              <MenuItem name="Latte" description="Coffee" price="22" />
              <MenuItem name="Cappuccino" description="Coffee" price="22" />
              <MenuItem name="Vanilla Latte" description="Coffee" price="25" />
              <MenuItem name="Hazelnut Latte" description="Coffee" price="25" />
              <MenuItem name="Caramel Latte" description="Coffee" price="25" />
              <MenuItem name="Caramel Macchiato" description="Coffee" price="28" />
            </Menu>
            <Menu title="Mocktail" type="ICED">
              <MenuItem name="Tropical Sunrise" description="Mocktail" price="28" />
              <MenuItem name="Blue Lago’on" description="Mocktail" price="28" />
              <MenuItem name="Shake-Shake Espresso" description="Mocktail" price="28" best />
              <MenuItem name="Fruttie Brew" description="Mocktail" price="30" />
              <MenuItem name="Berry Punch" description="Mocktail" price="30" best />
            </Menu>
            <Menu title="Non-Coffee" type="ICED/HOT">
              <MenuItem name="Green Tea" description="Non-coffee" price="24" />
              <MenuItem name="Chocolate" description="Non-coffee" price="24" best />
              <MenuItem name="Klepon" description="Non-coffee" price="24" />
              <MenuItem name="Taro" description="Non-coffee" price="24" />
              <MenuItem name="Speculatte" description="Non-coffee" price="24" />
              <MenuItem name="Charcoal" description="Non-coffee" price="24" />
            </Menu>
            <Menu title="Dessert">
              <MenuItem name="Banoffee Pie" description="Dessert" price="15" best />
              <MenuItem name="Classic Tiramisu" description="Dessert" price="18" />
              <MenuItem name="The OG Cookies" description="Dessert" price="8" best />
              <MenuItem name="Thick Cookies" description="Dessert" price="25" />
              <MenuItem name="Scone" description="Dessert" price="12" />
              <MenuItem name="Soes" description="Dessert" price="8" />
            </Menu>
            <Menu title="Rice Box">
              <MenuItem
                name="Chicken Rice with Matah Chili Sauce"
                description="Rice box"
                price="25"
              />
              <MenuItem
                name="Chicken Rice with Geprek Chili Sauce"
                description="Rice box"
                price="25"
              />
              <MenuItem
                name="Chicken Rice with Onion Chili Sauce"
                description="Rice box"
                price="25"
              />
              <MenuItem name="Chicken Rice with Salted Egg" description="Rice box" price="25" />
            </Menu>
            <Menu title="Add-ons">
              <MenuItem name="Extra-shot Espresso" description="Add-ons" price="7" />
              <MenuItem name="Sweet/Salted Macchiato" description="Add-ons" />
              <MenuItem name="Cream" description="Add-ons" price="7" />
              <MenuItem name="OatMilk" description="Add-ons" price="15" />
            </Menu>
          </div>
        </section>
      </main>
    </Fragment>
  );
};

export default Home;
