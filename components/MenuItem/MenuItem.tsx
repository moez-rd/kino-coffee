import { FC } from 'react';
import Kino from './kino.svg';

interface Props {
  name: string;
  price?: string;
  best?: boolean;
}

const MenuItem: FC<Props> = ({ name, price, best = false }) => {
  return (
    <li className="flex justify-between items-baseline text-lg py-2">
      <p className="flex">
        {name} {best && <Kino className="w-5 translate-x-1" />}
      </p>
      <p>{price}</p>
    </li>
  );
};

export default MenuItem;
