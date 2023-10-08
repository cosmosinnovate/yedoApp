import { registerRootComponent } from 'expo';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './redux/store'
import { RootSiblingParent } from 'react-native-root-siblings';


const root = () => (
  <Provider store={store}>
    <RootSiblingParent>
      <App />
    </RootSiblingParent>
  </Provider >
)
registerRootComponent(root);
