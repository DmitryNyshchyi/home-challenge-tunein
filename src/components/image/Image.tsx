import classNames from 'classnames';
import NextImage, { ImageProps as NextImageProps } from 'next/image';
import React, { FC } from 'react';

import classes from './Image.module.scss';

interface ImageProps extends NextImageProps {
  isBorder?: boolean;
  wrapperClassName?: string;
}

const Image: FC<ImageProps> = ({ isBorder, ...props }) => (
  <div className={classNames(classes.wrapper, { [classes.border]: isBorder })}>
    <NextImage
      blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mM8WA8AAgcBQhiUs9EAAAAASUVORK5CYII="
      objectFit="contain"
      {...props}
    />
  </div>
);

export default Image;
