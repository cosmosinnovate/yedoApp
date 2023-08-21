import { registerRootComponent } from 'expo';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './redux/store'

const root = () => (
  <Provider store={store}>
      <App />
  </Provider >
)
registerRootComponent(root);
