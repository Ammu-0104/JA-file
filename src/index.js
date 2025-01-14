import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import 'primeicons/primeicons.css';
        
import { Provider } from 'react-redux';
import { store, persistor } from '../src/react-redux/react-store';
import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);
