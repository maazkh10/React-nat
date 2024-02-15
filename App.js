// App.js
import React from 'react';
import { Provider } from 'react-redux';
import Store from './redux/store'; // Update this path
import AppNavigation from './Navigaation/appNavigation';

export default function App() {
  return (
    <Provider store={Store}>
      <AppNavigation />
    </Provider>
  );
}
