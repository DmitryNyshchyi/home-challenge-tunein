import { useEffect } from 'react';

import classes from './Home.module.scss';
import StationsGrid from '@/components/StationsGrid';
import TagsFilter from '@/components/tagsFilter/TagsFilter';
import { useAppDispatch } from '@/hooks/useAppDispatch';
import { useAppSelector } from '@/hooks/useAppSelector';
import { getAllStations, stationsState } from '@/store/stationsSlice';

/*
 * TODO to improve:
 * - add sorting by reliability and popularity
 * - show reliability and popularity as icons on the image
 * */
const Home = () => {
  const dispatch = useAppDispatch();
  const stationsProps = useAppSelector(stationsState);

  useEffect(() => void dispatch(getAllStations()), []);

  return (
    <div className={classes.wrapper}>
      <h1 className={classes.heading}>
        Stations: {stationsProps?.totalElements} <span>total</span>
      </h1>
      <TagsFilter />
      <StationsGrid {...stationsProps} />
    </div>
  );
};

export default Home;
