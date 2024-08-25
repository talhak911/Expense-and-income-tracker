import 'react-native-gesture-handler';
import {Provider} from 'react-redux';
import React from 'react';

import {store} from './src/redux/store';
import AppNavigator from './src/navigation/appNavigator/AppNavigator';

export default function App() {
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
}
