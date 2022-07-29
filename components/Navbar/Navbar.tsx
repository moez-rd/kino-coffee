import { FC } from 'react';
import Kino from './kino.svg';

const Navbar: FC = () => {
  return (
    <nav className="flex justify-between items-center px-4 py-4 border-b border-primary-300">
      <p className="font-bold tracking-[0.5rem]">KINO COFFEE</p>
      <Kino className="w-8" />
    </nav>
  );
};

export default Navbar;
