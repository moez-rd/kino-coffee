import type { NextPage } from 'next';
import { Menu, MenuItem } from '@/components/index';
import Head from 'next/head';
import { Fragment } from 'react';
import Divider from '@/assets/svg/divider.svg';
import Kino from '@/assets/svg/kino.svg';
import Image from 'next/image';

const Home: NextPage = () => {
  return (
    <Fragment>
      <Head>
        <title>Kino Coffee</title>
        <meta name="description" content="Kino Coffee - Palembang" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="relative flex h-[200px] w-full flex-col items-center overflow-hidden py-8 tracking-[0.5rem] sm:h-[600px] sm:py-40 sm:py-40">
        <Image
          src="/coffee.jpg"
          alt=""
          layout="fill"
          objectFit="cover"
          className="absolute top-0 -z-10 w-full"
        />
        <Divider className="absolute bottom-0 fill-primary-200" />
        <Kino className="h-10 fill-primary-200 sm:h-20" />
        <h1 className="mt-4 text-2xl font-bold text-primary-100 sm:text-4xl">KINO COFFEE</h1>
      </header>

      <main id="menu" className="px-4 py-8 sm:px-10 md:px-14 xl:px-40 2xl:px-80">
        <div>
          <h1 className="text-center text-xl font-bold tracking-[0.5rem]">MENU LIST</h1>
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-14">
            <Menu title="Signature Drink" type="ICED/HOT">
              <MenuItem name="Kopi Susu" price="20K" best />
              <MenuItem name="Mango" price="24K" />
              <MenuItem name="Panna Latte" price="26K" />
            </Menu>
            <Menu title="Coffee" type="ICED/HOT">
              <MenuItem name="Espresso" price="12K" />
              <MenuItem name="Americano" price="25K" />
              <MenuItem name="Latte" price="22K" />
              <MenuItem name="Cappuccino" price="22K" />
              <MenuItem name="Vanilla Latte" price="25K" />
              <MenuItem name="Hazelnut Latte" price="25K" />
              <MenuItem name="Caramel Latte" price="25K" />
              <MenuItem name="Caramel Macchiato" price="28K" />
            </Menu>
            <Menu title="Mocktail" type="ICED">
              <MenuItem name="Tropical Sunrise" price="28K" />
              <MenuItem name="Blue Lago’on" price="28K" />
              <MenuItem name="Shake-Shake Espresso" price="28K" best />
              <MenuItem name="Fruttie Brew" price="30K" />
              <MenuItem name="Fruttie Brew" price="30K" />
              <MenuItem name="Berry Punch" price="30K" best />
            </Menu>
            <Menu title="Non-Coffee" type="ICED/HOT">
              <MenuItem name="Green Tea" price="24K" />
              <MenuItem name="Chocolate" price="24K" best />
              <MenuItem name="Klepon" price="24K" />
              <MenuItem name="Taro" price="24K" />
              <MenuItem name="Speculatte" price="24K" />
              <MenuItem name="Charcoal" price="24K" />
            </Menu>
            <Menu title="Dessert">
              <MenuItem name="Banoffee Pie" price="15K" best />
              <MenuItem name="Classic Tiramisu" price="18K" />
              <MenuItem name="The OG Cookies" price="8K" best />
              <MenuItem name="Thick Cookies" price="25K" />
            </Menu>
            <Menu title="Add-ons">
              <MenuItem name="Extra-shot Espresso" price="7K" />
              <MenuItem name="Sweet/Salted Macchiato" />
              <MenuItem name="Cream" price="7K" />
              <MenuItem name="OatMilk" price="15K" />
            </Menu>
          </div>
        </div>
      </main>
    </Fragment>
  );
};

export default Home;
