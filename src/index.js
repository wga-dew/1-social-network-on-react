import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import './index.css';
import App from './App';
import state from './redux/state';

ReactDOM.render(
  <Router>
    <App appState={state}/>
  </Router>
  , document.getElementById('root'));
