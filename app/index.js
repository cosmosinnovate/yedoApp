import { registerRootComponent } from 'expo';

import App from './App';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store } from './redux/store'
import { View } from 'react-native';
import colors from './components/colors';

const root = () => (
  <Provider store={store}>
      <App />
  </Provider >
)
registerRootComponent(root);
