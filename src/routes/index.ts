///<reference path="../../typings/index.d.ts"/>

import DashboardApp = require('../components/Dashboard')
import GoodiesSection = require('./Goodies')

export default {
  childRoutes: [ {
    path: '/',
    getComponent(nextState: any, cb: Function) {
      require.ensure([], (require) => {
          cb(null, require<typeof DashboardApp>('../components/Dashboard').default);
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
      require<typeof GoodiesSection>('./Goodies').default,
    ]
  } ]
}
