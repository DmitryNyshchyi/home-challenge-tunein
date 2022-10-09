import React, { PropsWithChildren, ReactNode } from 'react';

import classes from './CustomGrid.module.scss';

export interface CustomGridProps<T> {
  content: T[];
  render: PropsWithChildren<(content: T[]) => ReactNode>;
  isLoading?: boolean;
}

/*
 * TODO to improve:
 * - improve the layout of grid (not suitable for each width now)
 * - add a spinner to [loading] block and create a component for it
 * - create a component for [not found] block for reusing,
 *   but it does not need now, because it using in one place
 * - add pagination if it was a real project with a lot of stations
 * */
const CustomGrid = <T extends object>({
  content,
  render,
  isLoading = false,
}: CustomGridProps<T>) => {
  const isContent = content && content.length > 0;

  return (
    <section className={classes.wrapper}>
      {isLoading ? (
        <div className={classes.loading}>Loading...</div>
      ) : isContent ? (
        render(content)
      ) : (
        <div className={classes.notFound}>Not found</div>
      )}
    </section>
  );
};

export default CustomGrid;
