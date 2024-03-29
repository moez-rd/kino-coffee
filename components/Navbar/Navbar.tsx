import { FC } from 'react';
import Kino from '@/assets/svg/kino.svg';

const Navbar: FC = () => {
  return (
    <nav className="border-secondary-900 flex items-center justify-between border-b-2 px-4 py-4 sm:px-10 md:py-6 md:px-14 xl:px-40 2xl:px-80">
      <p className="text-secondary-400 text-2xl font-medium tracking-[0.5rem]">kino</p>
      <Kino className="w-8 fill-primary-800" />
    </nav>
  );
};

export default Navbar;
