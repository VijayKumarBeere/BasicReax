import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux';
import App from './Application';
import store from './mainStore';
// import store from './store';
// import Login from './Login';
// import Products from './Products';
// import Contact from './contact';
// import HOC from './TestHOC';
// import App from './TestPortal';
// import Reducer from './TestReducer';
// import TestRedux from './TestRedux';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Login></Login> */}
    {/* <Products></Products> */}
    {/* <Contact></Contact> */}

    {/* <HOC></HOC> */}
    {/* <App></App> */}
    {/* <Reducer></Reducer> */}
    {/* <TestRedux></TestRedux> */}
    <Provider store={store}>
      <App></App>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
