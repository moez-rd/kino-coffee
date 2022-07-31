import { FC } from 'react';
import Kino from './kino.svg';

interface Props {
  description?: string;
  name: string;
  price?: string;
  best?: boolean;
}

const MenuItem: FC<Props> = ({ description, name, price, best = false }) => {
  return (
    <li className="flex flex-col bg-primary-500/20 p-6 text-lg">
      <div className="flex items-baseline justify-between">
        <p className="flex">
          {name} {best && <Kino className="w-5 translate-x-1 fill-primary-700" />}
        </p>
        <p className="font-medium text-primary-700">{price}</p>
      </div>
      <div>
        <p className="text-xs text-primary-500">{description}</p>
      </div>
    </li>
  );
};

export default MenuItem;
