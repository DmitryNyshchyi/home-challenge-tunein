import classes from './Footer.module.scss';

const Footer = () => (
  <footer className={classes.wrapper}>
    <div className={classes.copyright}>
      &#169; {new Date().getFullYear()} TuneIn, Inc. All rights reserved
    </div>
  </footer>
);

export default Footer;
