import { Provider } from 'react-redux';
import { initStore } from '../redux';
import '../styles/styles.scss';

function MyApp({Component, pageProps}) {
  return (
    <Provider store={initStore}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp;