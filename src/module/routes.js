import checkoutRoutes from './checkout/checkout.routes.js'

const routesPlugin = (server, options, next) => {
  server.route({
    method: 'GET',
    path: '/',
    handler: ((request, reply) => {
      reply({hello: 'world'})
    })
  })

  server.route(checkoutRoutes)

  return next()
}

routesPlugin.attributes = {
  name: 'RoutesPlugin'
}

export default routesPlugin
