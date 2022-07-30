import { FC } from 'react';

interface Props {
  children: JSX.Element | JSX.Element[];
  title: string;
  type?: string;
}

const Menu: FC<Props> = ({ children, title, type }) => {
  return (
    <div className="pt-10">
      <div className="flex items-baseline justify-between">
        <h2 className="font-trocchi text-3xl">{title}</h2>
        <p className="font-libre-baskerville text-xs">{type}</p>
      </div>
      <ul className="flex flex-col pt-4 font-libre-baskerville">{children}</ul>
    </div>
  );
};

export default Menu;
