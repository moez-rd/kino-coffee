import { FC } from 'react';
import Kino from '@/assets/svg/kino.svg';

const Footer: FC = () => {
  return (
    <footer className="mt-20 flex flex-col border-b border-primary-300 bg-primary-800 px-4 pt-8 pb-4 text-sm text-primary-100 sm:px-10 md:px-14 xl:px-40 xl:pt-14 2xl:px-80">
      <div className="grid grid-cols-1 content-start gap-y-8 xl:grid-cols-2">
        <div>
          <div className="flex items-center">
            <Kino className="w-4 fill-primary-100 lg:w-6" />
            <p className="pl-2 text-xs font-bold tracking-[0.5rem] lg:text-base">KINO COFFEE</p>
          </div>
          <div>
            <p className="mt-2 max-w-md text-xs tracking-wider xl:text-sm">
              Jl. Sultan M. Mansyur No.506, 35 Ilir, Kec. Ilir Bar. II, Kota Palembang, Sumatera
              Selatan 30145
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-y-8 md:grid-cols-2 md:gap-x-14">
          <ul className="space-y-2 font-bold tracking-[0.3rem] text-primary-400">
            <li>MENU</li>
            <li>ABOUT</li>
            <li>
              <a href="https://www.instagram.com/kinocoffee.id/" target="_blank" rel="noreferrer">
                INSTAGRAM<i className="bi bi-box-arrow-up-right text-primary-500"></i>
              </a>
            </li>
            <li>
              TOKOPEDIA<i className="bi bi-box-arrow-up-right text-primary-500"></i>
            </li>
            <li>
              GOFOOD<i className="bi bi-box-arrow-up-right text-primary-500"></i>
            </li>
            <li>
              GRABFOOD<i className="bi bi-box-arrow-up-right text-primary-500"></i>
            </li>
          </ul>
          <div className="space-y-4">
            <div className="space-y-2">
              <p className="font-bold tracking-[0.5rem] text-primary-400">CALL</p>
              <p className="-translate-y-2 tracking-[0.1rem]">08127425xxxx</p>
            </div>
            <div className="space-y-2">
              <p className="font-bold tracking-[0.5rem] text-primary-400">EMAIL</p>
              <p className="-translate-y-2 tracking-[0.1rem]">kinoxxx@gmail.com</p>
            </div>
            <div className="space-y-2">
              <p className="font-bold tracking-[0.5rem] text-primary-400">OPERATION HOURS</p>
              <p className="-translate-y-2 tracking-[0.1rem]">
                SAT—THU <i className="bi bi-dot"></i> 10AM—9PM
              </p>
              <p className="-translate-y-4 tracking-[0.1rem]">
                FRI <i className="bi bi-dot"></i> 1PM—9PM
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-10 text-center">
        <p className="text-xs text-primary-400">&copy; Copyright 2022 Kino Coffee</p>
      </div>
    </footer>
  );
};

export default Footer;
