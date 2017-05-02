import appConfig from './application'

require('dotenv').config()

const config = () => {
  const env = process.env.NODE_ENV || 'development'

  const obj = {
    application: {
      host: appConfig[env].host,
      port: appConfig[env].port,
      env
    }
  }
  if (!obj.application.host) {
    throw new Error('Missing constant application.host. Check your enviroment variables NODE_HOST.')
  } else if (!obj.application.port) {
    throw new Error('Missing constant application.port. Check your enviroment variable NODE_PORT.')
  }

  return obj
}

export default config
