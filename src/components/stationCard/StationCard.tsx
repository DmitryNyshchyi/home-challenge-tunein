import Link from 'next/link';
import React, { FC } from 'react';

import classes from './StationCard.module.scss';
import Image from '@/components/image/Image';
import Tags from '@/components/tags/Tags';
import { useCustomMedia } from '@/hooks/useCustomMedia';
import { ROUTES } from '@/services';
import { StationProps } from '@/store/stationsSlice';

const IMAGE_SIDE_MOBILE_SIZE = 100;
const IMAGE_SIDE_DESKTOP_SIZE = 230;

const StationCard: FC<StationProps> = ({ id, imgUrl, name, tags = [] }) => {
  const { isMobile } = useCustomMedia();
  const imageSideSize = isMobile
    ? IMAGE_SIDE_MOBILE_SIZE
    : IMAGE_SIDE_DESKTOP_SIZE;

  if (!id) return null;

  return (
    <Link href={`${ROUTES.station}/${id}`} passHref>
      <a className={classes.wrapper}>
        <Image
          src={imgUrl}
          alt={name}
          width={imageSideSize}
          height={imageSideSize}
          isBorder
        />

        <div className={classes.infoWrapper}>
          <h3 className={classes.name}>{name}</h3>
          <Tags tags={tags} prefixKey={id} />
        </div>
      </a>
    </Link>
  );
};

export default StationCard;
