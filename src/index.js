import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import Auth from './Autentication/Auth';

import { createStore } from 'redux'; 
import { Provider } from 'react-redux';
import rootReducers from './reducers/Reducers';
const store = createStore(rootReducers);

/**
 * @function showApp
 *  passing the render of class App.
 * @returns 
 *  html of App to upload
 */
const showApp = () => {
  var x = new App();
  new Auth();
  return (x.renderize());
};

ReactDOM.render(
  <div>
    {/* <React.StrictMode> */}
    <Provider store={store} >
      {showApp()}
    </Provider>
    {/* </React.StrictMode> */}
  </div>,
  document.getElementById('root')
);

reportWebVitals();

