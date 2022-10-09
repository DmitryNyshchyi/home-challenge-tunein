import { StationProps } from '@/store/stationsSlice';

export const stationsApi = {
  async getAllStations(): Promise<{ data: StationProps[] }> {
    const response = await fetch(
      'https://s3-us-west-1.amazonaws.com/cdn-web.tunein.com/stations.json',
    );

    return await response.json();
  },
};
