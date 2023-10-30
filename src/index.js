import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { StateProvider } from './StateProvider';
import reducer, { initialState } from './reducer';

/** This the scarest place in react src files 😁😁😁
 * please meta, make the index.js a little cute for developers 
 */

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
      <App /> {/** children */}
    </StateProvider>
  </React.StrictMode>
);

reportWebVitals();
