///<reference path="../typings/index.d.ts"/>
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router'

// import withExampleBasename from '../withExampleBasename'
// import './stubs/COURSES'
import DashboardApp = require('./components/Dashboard')
import GoodiesSection = require('./routes/Goodies')
// import GoodiesSection from './routes/Goodies'

console.log('*---+ GoodiesSection +---*', GoodiesSection);
console.log('*---+ DashboardApp +---*', DashboardApp)
export const rootRoute = {
  childRoutes: [ {
    path: '/',
    getComponent(nextState: any, cb: Function) {
      require.ensure([], (require) => {
          cb(null, require<typeof DashboardApp>('./components/Dashboard').default);
      });
    },
    // childRoutes: [
    //   GoodiesSection
    // ]
    // getChildRoutes(partialNextState: any, cb: Function) {
    //   require.ensure([], (require) => {
    //     cb(null, [
    //       require<typeof GoodiesSection>('./routes/Goodies').default,
    //     ])
    //   })
    // }
    childRoutes: [
      require<typeof GoodiesSection>('./routes/Goodies').default,
    ]
  } ]
}

ReactDOM.render((
  <Router
    history={browserHistory}
    routes={rootRoute}
  />
), document.getElementById('example'))
