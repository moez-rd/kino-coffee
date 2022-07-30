import { FC } from 'react';
import Kino from '@/assets/svg/kino.svg';

const Footer: FC = () => {
  return (
    <footer className="flex flex-col border-b border-primary-300 bg-primary-800 py-8 px-4 text-sm  text-primary-100 sm:px-10">
      <div className="flex items-center">
        <Kino className="w-4 fill-primary-100" />
        <p className="pl-2 text-xs font-bold tracking-[0.5rem]">KINO COFFEE</p>
      </div>
      <div>
        <p className="mt-2 text-xs tracking-wider">
          Jl. Sultan M. Mansyur No.506, 35 Ilir, Kec. Ilir Bar. II, Kota Palembang, Sumatera Selatan
          30145
        </p>
      </div>
      <ul className="mt-10 space-y-2 font-bold tracking-[0.5rem] text-primary-400">
        <li>MENU</li>
        <li>ABOUT</li>
      </ul>
      <div className="mt-10 space-y-2">
        <p className="font-bold tracking-[0.5rem] text-primary-400">CALL</p>
        <p className="-translate-y-2 tracking-[0.2rem]">0821xxxxxxxx</p>
      </div>
      <div className="mt-10 space-y-2">
        <p className="font-bold tracking-[0.5rem] text-primary-400">EMAIL</p>
        <p className="-translate-y-2 tracking-[0.2rem]">kino@gmail.com</p>
      </div>
      <div className="mt-10 text-center">
        <p className="text-xs text-primary-400">&copy; Copyright 2022 Kino Coffee</p>
      </div>
    </footer>
  );
};

export default Footer;
