import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import Auth from './Autentication/Auth';

import { createStore } from 'redux'; 
import { Provider } from 'react-redux';
import rootReducers from './reducers/Reducers';
import { clear } from 'localforage';
const store = createStore(rootReducers);

/**
 * @function showApp
 *  passing the render of class App.
 * @returns 
 *  html of App to upload
 */
const showApp = () => {
  clear_before();
  var x = new App();
  new Auth();
  return (x.renderize());
};

function clear_before() {
  localStorage.setItem('datapass',JSON.stringify(" "));
  localStorage.setItem('modulesretrieved',JSON.stringify(" "));
  //localStorage.setItem("react-token", JSON.stringify(" "));
}

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

