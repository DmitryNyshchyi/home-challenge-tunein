import Link from 'next/link';
import React from 'react';

import classes from './Header.module.scss';
import Image from '@/components/image/Image';
import { ROUTES } from '@/services';

const Header = () => (
  <header className={classes.wrapper}>
    <Link href={ROUTES.home} passHref>
      <a>
        <Image
          src="/tunein-logo.svg"
          alt="TuneIn logo"
          width={100}
          height={44}
        />
      </a>
    </Link>
  </header>
);

export default Header;
