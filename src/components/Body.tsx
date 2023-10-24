import { ReactNode } from 'react';

interface BodyProps {
  children: ReactNode;
}

const Body = ({ children }: BodyProps) => {
  return (
    <div className="p-20 dark:bg-neutral-800 dark:text-white text-left flex-grow">
      <div className="rounded-xl bg-slate-100 dark:bg-neutral-700 p-10 w-3/5 mx-auto">
        {children}
      </div>
    </div>
  );
};

export default Body;
