import Hapi from 'hapi'
import _debug from 'debug'
import _config from './configuration'
import routes from './module/routes'

const server = new Hapi.Server()
const config = _config()
const debug = _debug('app:server')

server.connection({
  host: config.application.host,
  port: config.application.port
})

server.register({
  register: routes
}, (err) => {
  if (err) {
    debug('Server error:', err)
  } else {
    server.start((err) => {
      if (err) {
        throw err
      }
    })
    debug('Server running at:', server.info.uri)
  }
})

export default server
