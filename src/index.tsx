///<reference path="../typings/index.d.ts"/>
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router'
import rootRoute from "./routes"


ReactDOM.render((
  <Router
    history={browserHistory}
    routes={rootRoute}
  />
), window.document.getElementById('example'))
