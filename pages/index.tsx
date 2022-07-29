import type { NextPage } from 'next';
import { Menu, MenuItem } from '@/components/index';
import Head from 'next/head';
import { Fragment } from 'react';

const Home: NextPage = () => {
  return (
    <Fragment>
      <Head>
        <title>Kino Coffee</title>
        <meta name="description" content="Kino Coffee - Palembang" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="px-4 py-8">
        <div>
          <h1 className="font-bold text-center text-xl tracking-[0.5rem]">MENU LIST</h1>
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
      </main>
    </Fragment>
  );
};

export default Home;
