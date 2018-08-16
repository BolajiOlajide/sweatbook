/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { Provider } from 'react-redux';

// store
import store from './src/store';

// containers
import { Welcome } from './src/containers';


export default () => (
  <Provider store={store}>
    <Welcome />
  </Provider>
);
