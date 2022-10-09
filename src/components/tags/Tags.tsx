import React, { FC } from 'react';

import classes from './Tags.module.scss';

interface TagsProps {
  tags: string[];
  prefixKey?: string;
}

const Tags: FC<TagsProps> = ({ tags, prefixKey = 'tag' }) => {
  if (tags.length < 1) return null;

  return (
    <section className={classes.wrapper}>
      {tags?.map((tag) => (
        <span key={`${prefixKey}-${tag}`} className={classes.tag}>
          {tag}
        </span>
      ))}
    </section>
  );
};

export default Tags;
