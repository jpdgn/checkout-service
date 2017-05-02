import CheckoutController from './checkout.controller'

const checkoutController = new CheckoutController()

const routes = [
  {
    method: 'GET',
    path: '/checkout',
    handler: checkoutController.addItem
  }
]

export default routes
