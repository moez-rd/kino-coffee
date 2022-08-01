import type { NextPage } from 'next';
import { Menu, MenuItem } from '@/components/index';
import Head from 'next/head';
import { Fragment } from 'react';
import Divider from '@/assets/svg/divider.svg';
import Kino from '@/assets/svg/kino.svg';
import Underline from '@/assets/svg/underline.svg';
import Coffee from '@/assets/svg/coffee.svg';
import CoffeeBeans from '@/assets/svg/coffee-beans.svg';
import CoffeePowder from '@/assets/svg/coffee-powder.svg';
import Image from 'next/image';

const Home: NextPage = () => {
  return (
    <Fragment>
      <Head>
        <title>Kino Coffee</title>
        <meta
          name="description"
          content="Freshly grind coffee to start your day. With hight quality ingredients. Perfection."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* <div className="absolute top-5 left-5 h-10 w-10 rounded-full bg-black sm:bg-red-500 md:bg-yellow-500 lg:bg-green-500 xl:bg-blue-500 2xl:bg-purple-500"></div> */}

      <header className="relative flex h-[240px] w-full flex-col overflow-hidden py-8 text-center tracking-[0.5rem] sm:h-[500px] sm:py-40 lg:h-[550px] 2xl:h-[650px]">
        <Image
          src="/coffee.jpg"
          alt=""
          layout="fill"
          objectFit="cover"
          className="absolute top-0 -z-10 w-full brightness-50"
        />
        <Divider className="absolute -bottom-5 fill-gray-200" />
        {/* <Kino className="h-16 fill-gray-200 sm:h-20" /> */}
        <CoffeeBeans className="mx-auto w-7 fill-gray-100 md:w-14" />
        <h1 className="mx-auto mt-4 max-w-xl px-4 text-2xl font-bold uppercase text-gray-100 sm:text-4xl md:max-w-2xl md:text-5xl">
          Looking for Perfectly Coffee?
        </h1>
        <p className="text-gray-100 sm:text-xl md:text-2xl">We got you!</p>
      </header>

      <main id="menu" className="py-20">
        <section className="relative overflow-hidden py-20 px-4 text-center sm:px-10 md:px-14 lg:text-left xl:px-40 2xl:px-80">
          <Coffee className="mx-auto mb-4 w-10 fill-primary-700 lg:mx-0 lg:ml-2 lg:w-20" />
          <p className="mx-auto max-w-xl font-libre-baskerville text-4xl text-primary-300 lg:mx-0 lg:max-w-2xl lg:text-5xl">
            Freshly grind{' '}
            <span className="relative inline-block font-bold text-primary-700">
              coffee{' '}
              <Underline className="absolute bottom-0 -z-10 w-full fill-primary-400 lg:-bottom-1" />
            </span>{' '}
            to start your day. With hight quality ingredients. Perfection.
          </p>
          <Kino className="absolute inset-y-0 -right-24 -z-10 my-auto h-52 fill-primary-600/5 lg:h-full" />
        </section>
        <section className="px-4 py-20 sm:px-10 md:px-14 xl:px-40 2xl:px-80">
          <div className="relative flex flex-col items-center bg-primary-300 px-10 py-16 text-center font-montserrat text-xl font-medium text-primary-600 sm:px-14 md:py-20 lg:items-end lg:text-right xl:flex-row xl:items-center xl:justify-end">
            <CoffeePowder className="mb-4 h-10 fill-primary-700 lg:h-20 xl:absolute xl:left-20 xl:h-36 2xl:w-40" />
            <div className="max-w-2xl space-y-4 xl:max-w-lg 2xl:max-w-2xl">
              <p>
                Discover deliciousness at <span className="font-black">Kino Coffee</span>. Imagine
                drinking a good cup of coffee that&apos;s made with love and handled with care.
              </p>
              <p>
                Don&apos;t have to worry because our coffee shop use a high quality of coffee beans
                and serve it with a perfectly ingredient.
              </p>
              <p>Now that&apos;s perfection.</p>
            </div>
            <div>
              <p className="hidden -rotate-90 text-xs tracking-widest text-primary-400 xl:block">
                PERFECTION
              </p>
            </div>
          </div>
        </section>
        <section className="px-4 py-20 sm:px-10 md:px-14 xl:px-40 2xl:px-80">
          <h2 className="text-center text-xl font-bold tracking-[0.5rem]">WHAT YOU&apos;LL LOVE</h2>
          <ul className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3">
            <li className="bg-primary-300 py-4 px-20 text-center md:py-8">
              <h3 className="font-bold">COFFEE</h3>
              <p>Heavenly coffee will make your day better.</p>
            </li>
            <li className="bg-primary-300 py-4 px-20 text-center md:py-8">
              <h3 className="font-bold">NON-COFFEE</h3>
              <p>The sweetness gonna recharge your energy.</p>
            </li>
            <li className="bg-primary-300 py-4 px-20 text-center md:py-8">
              <h3 className="font-bold">MOCKTAIL</h3>
              <p>Perfect combination for your perfect choice.</p>
            </li>
          </ul>
        </section>
        <section className="px-4 py-20 sm:px-10 md:px-14 xl:px-40 2xl:px-80">
          <h2 className="text-center text-xl font-bold tracking-[0.5rem]">OUR MENU</h2>
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
              <MenuItem name="Nasi Ayam Sambal Matah" description="Rice box" price="25" />
              <MenuItem name="Nasi Ayam Sambal Geprek" description="Rice box" price="25" />
              <MenuItem name="Nasi Ayam Sambal Bawang" description="Rice box" price="25" />
              <MenuItem name="Nasi Ayam Asam Manis" description="Rice box" price="25" />
              <MenuItem name="Nasi Ayam Telur Asin" description="Rice box" price="25" />
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
