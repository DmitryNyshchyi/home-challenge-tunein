import type { GetServerSideProps, NextPage } from 'next';

import { getAllStations, getStationById } from '@/store/stationsSlice';
import { wrapper } from '@/store/store';
import Layout from '@/templates/layout/Layout';
import Station from '@/templates/station/Station';

interface StationPageProps {
  name: string;
}

/*
 * TODO to improve:
 * - fix the issue with getting all stations by each visit on this page
 * - checking if exist station by id
 * - implement error block
 * */
const StationPage: NextPage<StationPageProps> = ({ name }) => (
  <Layout title={`${name} - station`}>
    <Station />
  </Layout>
);

export const getServerSideProps: GetServerSideProps =
  wrapper.getServerSideProps(({ dispatch, getState }) => async ({ params }) => {
    await dispatch(getAllStations());
    await dispatch(getStationById(params?.id));

    return {
      props: {
        name: getState().stations.station?.name || params?.id,
      },
    };
  });

export default StationPage;
