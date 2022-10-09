import Head from 'next/head';
import React, { ReactNode } from 'react';

import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Main from './components/main/Main';
import classes from './Layout.module.scss';

interface Props {
  children: ReactNode;
  title?: string;
}

/*
 * TODO to improve:
 * - add [next-seo] library to more comfortable using meta tags
 * - add more options for [Main] component to control width
 * */
const Layout = ({ children, title }: Props) => (
  <div className={classes.wrapper}>
    <Head>
      <title>{title ? `${title} | TuneIn` : 'TuneIn'}</title>
    </Head>
    <Header />
    <Main>{children}</Main>
    <Footer />
  </div>
);

export default Layout;
