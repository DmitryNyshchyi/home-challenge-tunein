import classNames from 'classnames';
import React, { useEffect, useState } from 'react';

import classes from './TagsFilter.module.scss';
import { useAppDispatch } from '@/hooks/useAppDispatch';
import { useAppSelector } from '@/hooks/useAppSelector';
import { getStationsByTag, stationsState } from '@/store/stationsSlice';

/*
 * TODO to improve:
 * - add write chosen tag in the URL, it will increase UX
 * */
const TagsFilter = () => {
  const dispatch = useAppDispatch();
  const { tagsList, isLoading } = useAppSelector(stationsState);
  const [activeTag, setActiveTag] = useState<string>(null);

  useEffect(() => {
    if (!isLoading) {
      dispatch(getStationsByTag(activeTag));
    }
  }, [activeTag]);

  const checkActiveTag = (tag: string): boolean => activeTag === tag;

  const renderTag = (tag: string) => (
    <span
      key={`filter-${tag}`}
      className={classNames(classes.tag, {
        [classes.active]: checkActiveTag(tag),
      })}
      onClick={() => setActiveTag(tag)}
    >
      {tag}
    </span>
  );

  return (
    <section className={classes.wrapper}>
      {activeTag && (
        <button onClick={() => setActiveTag(null)} className={classes.clear}>
          &#x2715;
        </button>
      )}

      {tagsList?.map((tag) =>
        checkActiveTag(tag) || !activeTag ? renderTag(tag) : null,
      )}
    </section>
  );
};

export default TagsFilter;
