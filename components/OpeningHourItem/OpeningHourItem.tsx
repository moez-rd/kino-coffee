import { FC } from 'react';

interface Props {
  day: string;
  hour: string;
}

const OpeningHourItem: FC<Props> = ({ day, hour }) => {
  return (
    <li className="flex items-baseline justify-between py-2 lg:flex-col xl:flex-row">
      <p className="text-xl font-bold">{day}</p>
      <div className="mx-2 flex-grow border-b border-b-primary-600 lg:hidden xl:block"></div>
      <p className="text-primary-700">{hour}</p>
    </li>
  );
};

export default OpeningHourItem;
