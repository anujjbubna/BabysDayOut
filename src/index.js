import React from 'react'
import { useEffect } from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import './index.css'
import Home from './views/home'
import NotFound from './views/not-found'

import ReactGA from 'react-ga4';
const TRACKING_ID = "G-HKTN2BTD4M"; 

function App() {
  ReactGA.initialize(TRACKING_ID);
  useEffect(() => {
    // Send pageview with a custom path
    ReactGA.send({ hitType: "pageview", page: window.location.pathname });
  }, [])

  return (
    <div className="App">
        <Home />
    </div>
  );
}

ReactDOM.render(
    <App />,
  document.getElementById('root')
);

// TODO: route to Not found based on url requested
