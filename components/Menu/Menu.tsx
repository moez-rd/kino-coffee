import { FC } from 'react';

interface Props {
  children: JSX.Element | JSX.Element[];
  id: string;
  title: string;
  type?: string;
}

const Menu: FC<Props> = ({ children, id, title, type }) => {
  return (
    <div id={id} className="pt-10">
      <div className="flex items-baseline justify-between">
        <h2 className="font-trocchi text-2xl">{title}</h2>
        <p className="font-libre-baskerville text-xs">{type}</p>
      </div>
      <ul className="flex flex-col space-y-4 pt-4 font-montserrat">{children}</ul>
    </div>
  );
};

export default Menu;
