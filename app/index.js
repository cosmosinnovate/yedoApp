import { registerRootComponent } from 'expo';

import App from './App';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store } from './redux/store'

const root = () => (
  // TODO: I stopped here
  <Provider store={store}>
    {/* <PersistGate persister={persister} loading={null}> */}
      <App />
    {/* </PersistGate > */}
  </Provider >
)
registerRootComponent(root);
