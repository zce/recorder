const keystone = require('keystone')

keystone.init({
  // Project
  // https://keystonejs.com/documentation/configuration/project-options
  'name': '极光学苑学籍管理',
  'brand': '极光学苑',

  // Server
  // https://keystonejs.com/documentation/configuration/server-options
  'static': 'public',

  // Database
  // https://keystonejs.com/documentation/configuration/database-options
  'mongo': 'mongodb://localhost/recorder',
  'user model': 'User',
  'cookie secret': 'jgxy.cc',
  'auto update': true,
  'auth': true,

  // Admin UI
  // https://keystonejs.com/documentation/configuration/admin-ui-options
  'admin path': 'zce'
})

keystone.import('models')

keystone.start()
