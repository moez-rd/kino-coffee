import type { NextPage } from 'next';
import { Header, Menu, MenuItem, OpeningHour, OpeningHourItem, Section } from '@/components/index';
import Head from 'next/head';
import { Fragment } from 'react';
import Kino from '@/assets/svg/kino.svg';
import Underline from '@/assets/svg/underline.svg';
import Coffee from '@/assets/svg/coffee.svg';
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

      <Header />

      <main id="menu" className="py-20">
        <Section
          id="description-section"
          className="relative overflow-hidden  text-center lg:text-left ">
          <Coffee className="mx-auto mb-4 w-10 fill-primary-700 lg:mx-0 lg:ml-2 lg:w-20" />
          <p className="mx-auto max-w-xl text-5xl text-primary-300 lg:mx-0 lg:max-w-2xl lg:text-6xl">
            Freshly grind{' '}
            <span className="relative inline-block font-bold text-primary-700">
              coffee{' '}
              <Underline className="absolute -bottom-1 -z-10 w-24 fill-primary-400 lg:-bottom-1 lg:w-32" />
            </span>{' '}
            to start your day. With hight quality ingredients. Perfection.
          </p>
          <Kino className="absolute inset-y-0 -right-24 -z-10 my-auto h-52 fill-primary-600/5 lg:h-full" />
        </Section>
        <Section id="grid-section">
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
        </Section>
        <section className="grid grid-cols-1 lg:grid-cols-3">
          {/* 1 */}
          <div className="relative px-4 py-20 sm:px-10 md:px-14">
            <Image
              src="/kino1.jpg"
              alt=""
              layout="fill"
              objectFit="cover"
              className="absolute -z-10 brightness-[0.3]"
            />
            <h2 className="text-center text-xl font-bold tracking-[0.5rem] text-primary-50">
              WHAT YOU&apos;LL LOVE
            </h2>
            <ul className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-1">
              <li className="bg-primary-300/20 py-4 px-20 text-center text-primary-100 backdrop-blur-sm sm:px-4 md:py-8">
                <h3 className="font-bold text-primary-300">COFFEE</h3>
                <p>Heavenly coffee will make your day better.</p>
              </li>
              <li className="bg-primary-300/20 py-4 px-20 text-center text-primary-100 backdrop-blur-sm sm:px-4 md:py-8">
                <h3 className="font-bold text-primary-300">NON-COFFEE</h3>
                <p>The sweetness gonna recharge your energy.</p>
              </li>
              <li className="bg-primary-300/20 py-4 px-20 text-center text-primary-100 backdrop-blur-sm sm:px-4 md:py-8">
                <h3 className="font-bold text-primary-300">MOCKTAIL</h3>
                <p>Perfect combination for your perfect choice.</p>
              </li>
            </ul>
          </div>
          {/* 2 */}
          <div className="bg-primary-300 px-4 py-20 sm:px-10 md:px-14">
            <h2 className="text-center text-xl font-bold tracking-[0.5rem]">OPENING HOURS</h2>
            <OpeningHour>
              <OpeningHourItem day="Monday" hour="10 AM to 9.30 PM" />
              <OpeningHourItem day="Tuesday" hour="10 AM to 9.30 PM" />
              <OpeningHourItem day="Wednesday" hour="10 AM to 9.30 PM" />
              <OpeningHourItem day="Thusday" hour="10 AM to 9.30 PM" />
              <OpeningHourItem day="Friday" hour="10 AM to 9.30 PM" />
              <OpeningHourItem day="Saturday" hour="10 AM to 9.30 PM" />
              <OpeningHourItem day="Sunday" hour="10 AM to 9.30 PM" />
            </OpeningHour>
          </div>
          {/* 3 */}
          <div className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-auto">
            <Image
              src="/kino2.jpg"
              alt=""
              layout="fill"
              objectFit="cover"
              className="absolute -z-10 brightness-[0.3]"
            />
            <div className="absolute bottom-5 left-5 flex items-center">
              <Kino className="w-6 fill-primary-100 lg:w-8" />
              <p className="translate-y-0.5 pl-2 text-lg font-medium tracking-[0.2rem] text-primary-100 lg:text-xl">
                kino
              </p>
            </div>
          </div>
        </section>

        <Section id="menu-section">
          <h2 className="text-center text-xl font-bold tracking-[0.5rem]">OUR MENU</h2>
          {/* <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-14"> */}
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-14">
            <div>
              <Menu id="signature-drink-menu" title="Signature Drink" type="ICED/HOT">
                <MenuItem name="Kopi Susu" description="Signature drink" price="20" best />
                <MenuItem name="Mango" description="Signature drink" price="24" />
                <MenuItem name="Panna Latte" description="Signature drink" price="26" />
              </Menu>
              <Menu id="coffee-menu" title="Coffee" type="ICED/HOT">
                <MenuItem name="Espresso" description="Coffee" price="12" />
                <MenuItem name="Americano" description="Coffee" price="25" />
                <MenuItem name="Latte" description="Coffee" price="22" />
                <MenuItem name="Cappuccino" description="Coffee" price="22" />
                <MenuItem name="Vanilla Latte" description="Coffee" price="25" />
                <MenuItem name="Hazelnut Latte" description="Coffee" price="25" />
                <MenuItem name="Caramel Latte" description="Coffee" price="25" />
                <MenuItem name="Caramel Macchiato" description="Coffee" price="28" />
              </Menu>
              <Menu id="mocktail-menu" title="Mocktail" type="ICED">
                <MenuItem name="Tropical Sunrise" description="Mocktail" price="28" />
                <MenuItem name="Blue Lago’on" description="Mocktail" price="28" />
                <MenuItem name="Shake-Shake Espresso" description="Mocktail" price="28" best />
                <MenuItem name="Fruttie Brew" description="Mocktail" price="30" />
                <MenuItem name="Berry Punch" description="Mocktail" price="30" best />
              </Menu>
              <Menu id="milkshake-menu" title="Milkshake" type="ICED">
                <MenuItem name="Vanilla Milkshake" description="Milkshake" price="30" />
                <MenuItem name="Strawberry Milkshake" description="Milkshake" price="30" />
                <MenuItem name="Caramel Milkshake" description="Milkshake" price="30" />
              </Menu>
              <Menu id="non-coffee-menu" title="Non-Coffee" type="ICED/HOT">
                <MenuItem name="Green Tea" description="Non-coffee" price="24" />
                <MenuItem name="Chocolate" description="Non-coffee" price="24" best />
                <MenuItem name="Klepon" description="Non-coffee" price="24" />
                <MenuItem name="Taro" description="Non-coffee" price="24" />
                <MenuItem name="Speculatte" description="Non-coffee" price="24" />
                <MenuItem name="Charcoal" description="Non-coffee" price="24" />
              </Menu>
            </div>
            <div>
              <Menu id="tea-menu" title="Tea" type="ICED/HOT">
                <MenuItem name="Black Tea" description="Tea" price="18" />
                <MenuItem name="Lemon Tea" description="Tea" price="20" />
                <MenuItem name="Lychee Tea" description="Tea" price="20" />
                <MenuItem name="Mango Tea" description="Tea" price="20" />
                <MenuItem name="Apple Tea" description="Tea" price="20" />
              </Menu>
              <Menu id="artisan-tea-menu" title="Artisan Tea" type="ICED/HOT">
                <MenuItem name="Chandler" description="Artisan Tea" price="24" />
                <MenuItem name="Vanilla Rose" description="Artisan Tea" price="24" />
                <MenuItem name="Mandarin Chocolate" description="Artisan Tea" price="24" />
                <MenuItem name="Lemon Mint" description="Artisan Tea" price="24" />
              </Menu>
              <Menu id="dessert-menu" title="Dessert">
                <MenuItem name="Banoffee Pie" description="Dessert" price="15" best />
                <MenuItem name="Classic Tiramisu" description="Dessert" price="18" />
                <MenuItem name="The OG Cookies" description="Dessert" price="8" best />
                <MenuItem name="Thick Cookies" description="Dessert" price="25" />
                <MenuItem name="Soes" description="Dessert" price="8" />
              </Menu>
              <Menu id="snack-menu" title="Snack">
                <MenuItem name="French Fries" description="Snack" price="23" />
                <MenuItem name="Chicken Dumpling" description="Snack" price="18" />
                <MenuItem name="Big Platter" description="Snack" price="38" />
                <MenuItem name="Cireng" description="Snack" price="18" />
                <MenuItem name="Scone" description="Snack" price="12" />
              </Menu>
              <Menu id="add-ons-menu" title="Add-ons">
                <MenuItem name="Extra-shot Espresso" description="Add-ons" price="7" />
                <MenuItem name="Sweet/Salted Macchiato" description="Add-ons" />
                <MenuItem name="Cream" description="Add-ons" price="7" />
                <MenuItem name="OatMilk" description="Add-ons" price="15" />
              </Menu>
            </div>
          </div>
        </Section>
      </main>
    </Fragment>
  );
};

export default Home;
