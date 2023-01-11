import type { NextPage } from 'next';
import { Header, Menu, MenuItem, OpeningHour, OpeningHourItem, Section } from '@/components/index';
import Head from 'next/head';
import { Fragment } from 'react';
import Kino from '@/assets/svg/kino.svg';
import Underline from '@/assets/svg/underline.svg';
import Coffee from '@/assets/svg/coffee.svg';
import CoffeePowder from '@/assets/svg/coffee-powder.svg';
import Image from 'next/image';
import menu from '../menu.json';
import openingHours_json from '../openingHour.json';

type MenuType = {
  id: string;
  title: string;
  type?: string;
  items: MenuItemType[];
};

type MenuItemType = {
  name: string;
  description: string;
  price?: number;
  best?: boolean;
};

type OpeningHourType = {
  day: string;
  hour: string;
};

const Home: NextPage = () => {
  const left_side_menu: MenuType[] = menu.slice(0, menu.length / 2);
  const right_side_menu: MenuType[] = menu.slice(menu.length / 2, menu.length);
  const openingHours: OpeningHourType[] = openingHours_json;

  return (
    <Fragment>
      <Head>
        <title>Kino Coffee</title>
        <meta
          name="description"
          content="Webinar akan diselenggarakan pada tanggal 8 Oktober. Segera daftarkan webinar."
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
              {openingHours.map((openingHour, key) => (
                <OpeningHourItem key={key} day={openingHour.day} hour={openingHour.hour} />
              ))}
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
              {left_side_menu.map((menu) => (
                <Menu key={menu.id} id={menu.id} title={menu.title} type={menu.type}>
                  {menu.items.map((item, key) => (
                    <MenuItem
                      key={key}
                      name={item.name}
                      description={item.description}
                      price={item.price}
                      best={item.best}
                    />
                  ))}
                </Menu>
              ))}
            </div>
            <div>
              {right_side_menu.map((menu) => (
                <Menu key={menu.id} id={menu.id} title={menu.title} type={menu.type}>
                  {menu.items.map((item, key) => (
                    <MenuItem
                      key={key}
                      name={item.name}
                      description={item.description}
                      price={item.price}
                      best={item.best}
                    />
                  ))}
                </Menu>
              ))}
            </div>
          </div>
        </Section>
      </main>
    </Fragment>
  );
};

export default Home;
