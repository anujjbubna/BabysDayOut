import React from 'react'
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

ReactDOM.render(
    <Home />,
  document.getElementById('root')
);

// TODO: route to Not found based on url requested
