import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import './Hello.css';
import App from './containers/App';
// import Hello from './Hello'
// import Card from './Card';
// import CardList from './CardList'
import reportWebVitals from './reportWebVitals';
import 'tachyons';
// import {robots} from './robots';

ReactDOM.render(        //we want the ReactDOM package to use render function to render code in render()
  // <React.StrictMode>
  //   <h1>Hello World</h1>
  // </React.StrictMode>,
  <div>
    <App />
  </div>
  , document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();