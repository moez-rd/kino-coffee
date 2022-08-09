import { FC } from 'react';
import Kino from '@/assets/svg/kino.svg';
import cn from 'clsx';
import Divider from '@/assets/svg/divider.svg';

interface Props {
  className?: string;
}

const Footer: FC<Props> = ({ className }) => {
  return (
    <footer
      className={cn(
        'text-primary-570 relative flex flex-col bg-primary-900 px-4 pt-20 pb-4 text-sm text-primary-50 sm:px-10 sm:pt-24 md:px-14 md:pt-28 lg:pt-40 xl:px-40 2xl:px-80 2xl:pt-56',
        className
      )}>
      <Divider className="absolute inset-x-0 -top-5 rotate-180 fill-gray-200" />
      <div className="grid grid-cols-1 content-start gap-y-8 xl:grid-cols-2">
        <div>
          <div className="flex items-center">
            <Kino className="w-6 fill-primary-300 lg:w-8" />
            <p className="translate-y-0.5 pl-2 text-lg font-medium tracking-[0.2rem] text-primary-300 lg:text-xl">
              kino
            </p>
          </div>
          <div>
            <p className="mt-2 max-w-md text-xs tracking-wider xl:text-sm">
              Jl. Sultan M. Mansyur No.506, 35 Ilir, Kec. Ilir Bar. II, Kota Palembang, Sumatera
              Selatan 30145
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-y-8 md:grid-cols-2 md:gap-x-14">
          <ul className="space-y-2 font-bold tracking-[0.2rem] text-primary-300">
            <li>
              <a href="#menu-section">MENU</a>
            </li>
            <li>ABOUT</li>
            <li>
              <a href="https://www.instagram.com/kinocoffee.id/" target="_blank" rel="noreferrer">
                INSTAGRAM<i className="bi bi-box-arrow-up-right text-primary-400"></i>
              </a>
            </li>
            <li>
              <a href="https://www.tokopedia.com/kinocoffee" target="_blank" rel="noreferrer">
                TOKOPEDIA<i className="bi bi-box-arrow-up-right text-primary-400"></i>
              </a>
            </li>
            <li>
              <a href="https://gofood.link/a/Bo3tDyh" target="_blank" rel="noreferrer">
                GOFOOD<i className="bi bi-box-arrow-up-right text-primary-400"></i>
              </a>
            </li>
            <li>
              <a
                href="https://grab.onelink.me/2695613898?pid=inappsharing&c=6-C23GRXBFRP6TR2&is_retargeting=true&af_dp=grab%3A%2F%2Fopen%3FscreenType%3DGRABFOOD%26sourceID%3DA4pcqCZkS4%26merchantIDs%3D6-C23GRXBFRP6TR2&af_force_deeplink=true&af_web_dp=https%3A%2F%2Fwww.grab.com"
                target="_blank"
                rel="noreferrer">
                GRABFOOD<i className="bi bi-box-arrow-up-right text-primary-400"></i>
              </a>
            </li>
          </ul>
          <div className="space-y-4">
            <div className="space-y-2">
              <p className="font-bold tracking-[0.2rem] text-primary-300">CALL</p>
              <p className="-translate-y-2 tracking-wider">+6281316015503</p>
            </div>
            <div className="space-y-2">
              <p className="font-bold tracking-[0.2rem] text-primary-300">EMAIL</p>
              <p className="-translate-y-2 tracking-wider">hello.kinocoffee@gmail.com</p>
            </div>
            <div className="space-y-2">
              <p className="font-bold tracking-[0.2rem] text-primary-300">OPERATION HOURS</p>
              <p className="-translate-y-2 tracking-wider">
                SAT—THU <i className="bi bi-dot"></i> 10AM to 9PM
              </p>
              <p className="-translate-y-4 tracking-wider">
                FRI <i className="bi bi-dot"></i> 1PM to 9PM
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-10 text-center">
        <p className="text-sm text-primary-200/40">&copy; Copyright 2022 Kino Coffee</p>
      </div>
    </footer>
  );
};

export default Footer;
