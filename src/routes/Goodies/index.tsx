import GoodiesSection = require('./components/Goodies')

export default {
  path: 'goodies',
  getComponent(nextState: any, cb: Function) {
    require.ensure([], (require) => {
      cb(null, require<typeof GoodiesSection>('./components/Goodies').default);
    })
  }
}
