import type { NextPage } from 'next';

import Home from '@/templates/home/Home';
import Layout from '@/templates/layout/Layout';

const HomePage: NextPage = () => (
  <Layout title="Home page">
    <Home />
  </Layout>
);

export default HomePage;
