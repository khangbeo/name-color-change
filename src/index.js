import React from 'react';
import ReactDOM from 'react-dom';
import { AppProvider } from './components/context/AppContext';
import App from './App';

ReactDOM.render(
  <AppProvider>
    <App />
  </AppProvider>,
  document.getElementById('root')
);
