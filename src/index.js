import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux'
import App from './App';
import store from './store/store';
import { initializeApp } from "firebase/app"
ReactDOM.render(
  <Provider store={store}>
      <App  />
  </Provider>,
  document.getElementById('root')
);

const firebaseConfig = {
  apiKey: "AIzaSyCuXuFeUg1RCkmV6Uxo0uaKkEFx1S4-GJ4",
  authDomain: "magistra-games.firebaseapp.com",
  projectId: "magistra-games",
  storageBucket: "magistra-games.appspot.com",
  messagingSenderId: "1061732228520",
  appId: "1:1061732228520:web:180c1f446b47277303119d"
};

const app = initializeApp(firebaseConfig)
