import { FC } from 'react';

interface Props {
  children: JSX.Element | JSX.Element[];
}

const OpeningHour: FC<Props> = ({ children }) => {
  return <ul className="mt-10 px-8 lg:px-4">{children}</ul>;
};

export default OpeningHour;
