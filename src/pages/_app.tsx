import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';

import '../styles/globals.scss';
import { wrapper } from '@/store/store';

/*
 * TODO to improve:
 * - implement 4XX and 5XX pages
 * - write tests
 * - download and add custom fonts
 * - add caching
 * */
const App = ({ Component, ...rest }: AppProps) => {
  const { store, props } = wrapper.useWrappedStore(rest);

  return (
    <Provider store={store}>
      <Component {...props.pageProps} />
    </Provider>
  );
};

export default App;
