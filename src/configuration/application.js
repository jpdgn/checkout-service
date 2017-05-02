require('dotenv').config()

const application = {
  production: {
    host: process.env.NODE_HOST,
    port: process.env.NODE_PORT
  },
  development: {
    host: process.env.NODE_HOST || 'localhost',
    port: process.env.NODE_PORT || 3010
  },
  test: {
    host: process.env.NODE_HOST || 'localhost',
    port: process.env.NODE_PORT || 3011
  }
}

export default application
