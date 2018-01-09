const Trailpack = require('trailpack')

module.exports = class Testpack extends Trailpack {
  constructor (app) {
    super(app, {
      pkg: {
        name: 'testpack'
      },
      config: {
        testpack: {
          defaultValue: 'default',
          override: 'ko',
          defaultArray: ['ok'],
          defaultObject: {
            test: 'ok',
            override: 'ko'
          }
        }
      }
    })
  }
}
