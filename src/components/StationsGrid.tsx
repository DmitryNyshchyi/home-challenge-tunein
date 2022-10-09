import React, { FC } from 'react';

import CustomGrid, {
  CustomGridProps,
} from '@/components/customGrid/CustomGrid';
import StationCard from '@/components/stationCard/StationCard';
import { StationProps } from '@/store/stationsSlice';

interface StationsGridProps
  extends Omit<CustomGridProps<StationProps>, 'render' | 'content'> {
  stationsList: StationProps[];
}

const StationsGrid: FC<StationsGridProps> = ({ stationsList, ...props }) => (
  <CustomGrid<StationProps>
    {...props}
    content={stationsList}
    render={(stations) =>
      stations?.map((station) => <StationCard key={station?.id} {...station} />)
    }
  />
);

export default StationsGrid;
