import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import View2 from './View2'
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';

//Index que contêm o pathname de cada uma das views e sua renderização
if (window.location.pathname === '/') {
  ReactDOM.render(
    <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
  );
} else if (window.location.pathname === '/favoritas') {
  ReactDOM.render(
    <React.StrictMode>
    <View2 />
  </React.StrictMode>,
  document.getElementById('root')
  );
}



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
