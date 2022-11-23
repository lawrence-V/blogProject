const middleware = {}

middleware['auth'] = require('..\\middleware\\auth.js')
middleware['auth'] = middleware['auth'].default || middleware['auth']

middleware['isAuthenticated'] = require('..\\middleware\\isAuthenticated.js')
middleware['isAuthenticated'] = middleware['isAuthenticated'].default || middleware['isAuthenticated']

export default middleware
