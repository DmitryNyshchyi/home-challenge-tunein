import { ReactNode } from 'react';

import classes from './Main.module.scss';

interface Props {
  children: ReactNode;
}

const Main = ({ children }: Props) => (
  <main className={classes.wrapper}>{children}</main>
);

export default Main;
