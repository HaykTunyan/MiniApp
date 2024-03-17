/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import BaseNavigation from './src/screens/base.navigation';
import {Provider} from 'react-redux';
import store from './src/redux/store';

function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <BaseNavigation />
    </Provider>
  );
}

export default App;
