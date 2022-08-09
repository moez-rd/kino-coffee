import { FC } from 'react';
import Image from 'next/image';
import Divider from '@/assets/svg/divider.svg';
import CoffeeBeans from '@/assets/svg/coffee-beans.svg';

const Header: FC = () => {
  return (
    <header className="relative flex h-[240px] w-full flex-col items-center overflow-hidden py-8 text-center tracking-[0.5rem] sm:h-[500px] sm:py-40 lg:h-[550px] 2xl:h-[650px]">
      <Image
        src="/coffee.jpg"
        alt=""
        layout="fill"
        objectFit="cover"
        className="absolute top-0 -z-10 w-full brightness-50"
      />
      <Divider className="absolute -bottom-5 fill-gray-200" />
      <CoffeeBeans className="mx-auto w-7 fill-gray-100 md:w-14" />
      <h1 className="mx-auto mt-4 max-w-xl px-4 text-2xl font-bold uppercase text-gray-100 sm:text-4xl md:max-w-2xl md:text-5xl">
        Looking for Perfectly Coffee?
      </h1>
      <p className="text-gray-100 sm:text-xl md:text-2xl">We got you!</p>
    </header>
  );
};

export default Header;
