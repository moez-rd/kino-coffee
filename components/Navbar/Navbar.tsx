import { FC } from 'react';
import Kino from './kino.svg';

const Navbar: FC = () => {
  return (
    <nav className="flex items-center justify-between border-b border-primary-300 px-4 py-4 sm:px-10 md:py-6 md:px-14 xl:px-40 2xl:px-80">
      <p className="font-bold tracking-[0.5rem]">KINO COFFEE</p>
      <Kino className="w-8" />
    </nav>
  );
};

export default Navbar;
