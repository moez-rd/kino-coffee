import { FC } from 'react';
import cn from 'clsx';

interface Props {
  className?: string;
  children: JSX.Element | JSX.Element[] | string;
  id: string;
}

const Section: FC<Props> = ({ className, children, id }) => {
  return (
    <section id={id} className={cn('px-4 py-20 sm:px-10 md:px-14 xl:px-40 2xl:px-80', className)}>
      {children}
    </section>
  );
};

export default Section;
