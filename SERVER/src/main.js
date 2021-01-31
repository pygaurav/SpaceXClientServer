import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Loadable from 'react-loadable';

import App from './pages/App';
import LauncherState from './context/LauncherState';

// import './styles/index.scss';

const serverData = window.__SERVER_DATA__;

export const main = () => {
  Loadable.preloadReady().then(() => {
    ReactDOM.hydrate(
      <BrowserRouter>
        <LauncherState>
          <App />
        </LauncherState>
      </BrowserRouter>,
      document.getElementById('root')
    );
  });
};
