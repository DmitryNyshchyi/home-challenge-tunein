import React, { useEffect } from 'react';

import classes from './Station.module.scss';
import Image from '@/components/image/Image';
import StationsGrid from '@/components/StationsGrid';
import Tags from '@/components/tags/Tags';
import { useAppDispatch } from '@/hooks/useAppDispatch';
import { useAppSelector } from '@/hooks/useAppSelector';
import { useCustomMedia } from '@/hooks/useCustomMedia';
import {
  getSuggestStationsByTags,
  StationProps,
  stationsState,
} from '@/store/stationsSlice';

const IMAGE_SIDE_MOBILE_SIZE = 175;
const IMAGE_SIDE_DESKTOP_SIZE = 260;

/*
 * TODO to improve:
 * - to change the [audio] tag to the good player with streaming
 * - searching new station by a tag (add link for a tag)
 * - add [read more] and [read less] buttons (as accordion) for description
 * - [Similar stations] block - implementation like carousel
 * - add tooltips to info elements
 * - add a favorite button
 * - add a back button (to return to previous page)
 * */
const Station = () => {
  const dispatch = useAppDispatch();
  const { station, suggestStationsList = [] } = useAppSelector(stationsState);
  const { isMobile } = useCustomMedia();

  const getPayload = (station: StationProps) => ({
    tags: station?.tags,
    id: station?.id,
  });

  useEffect(
    () => void dispatch(getSuggestStationsByTags(getPayload(station))),
    [station?.tags],
  );

  if (!station?.id) return null;

  const {
    name,
    imgUrl,
    description,
    streamUrl,
    tags,
    popularity,
    reliability,
  } = station;
  const imageSideSize = isMobile
    ? IMAGE_SIDE_MOBILE_SIZE
    : IMAGE_SIDE_DESKTOP_SIZE;

  const nameBlock = <h1 className={classes.heading}>{name}</h1>;
  const audioBlock = (
    <audio className={classes.audio} src={streamUrl} controls autoPlay />
  );

  return (
    <div className={classes.wrapper}>
      <section className={classes.station}>
        {isMobile && nameBlock}

        <div className={classes.row}>
          <Image
            src={imgUrl}
            alt={name}
            width={imageSideSize}
            height={imageSideSize}
          />

          <div className={classes.infoWrapper}>
            {!isMobile && (
              <>
                {nameBlock}
                {audioBlock}
              </>
            )}

            <div className={classes.info}>Popularity: {popularity}</div>
            <div className={classes.info}>Reliability: {reliability}</div>

            <div className={classes.tags}>
              <Tags tags={tags} />
            </div>
          </div>
        </div>

        {isMobile && audioBlock}
        {description && <p className={classes.description}>{description}</p>}
      </section>

      {suggestStationsList?.length > 0 && (
        <section>
          <h2 className={classes.heading}>Similar stations</h2>
          <StationsGrid stationsList={suggestStationsList} />
        </section>
      )}
    </div>
  );
};

export default Station;
