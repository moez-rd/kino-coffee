import { FC } from 'react';

interface Props {
  children: JSX.Element | JSX.Element[];
  title: string;
  type?: string;
}

const Menu: FC<Props> = ({ children, title, type }) => {
  return (
    <div className="pt-10">
      <div className="flex justify-between items-baseline">
        <h2 className="text-3xl font-trocchi">{title}</h2>
        <p className="text-xs font-libre-baskerville">{type}</p>
      </div>
      <ul className="flex flex-col pt-4 font-libre-baskerville">{children}</ul>
    </div>
  );
};

export default Menu;
