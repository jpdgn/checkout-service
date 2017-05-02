class CheckoutController {
  constructor() {
    this.addItem = this.addItem.bind(this)
    this.state = {
      classic: 269.99,
      standout: 322.99,
      premium: 394.99
    }
  }

  addItem(request, reply) {
    var classic = this.state.classic
    var standout = this.state.standout
    var premium = this.state.premium
    var classicNum = parseInt(request.query.classicNum)
    var standoutNum = parseInt(request.query.standoutNum)
    var premiumNum = parseInt(request.query.premiumNum)
    var customer = request.query.customer
    var classicGet = classicNum
    var standoutGet = standoutNum
    var premiumGet = premiumNum
    if (customer === 'unilever') {
      if (classicNum) {
        if (classicNum === 2) {
          classicGet = classicNum + 1
        }
      }
    } else if (customer === 'apple') {
      if (standoutNum) {
        standout = 299.99
      }
    } else if (customer === 'nike') {
      if (premiumNum) {
        if (premiumNum >= 4) {
          premium = 379.99
        }
      }
    } else if (customer === 'ford') {
      if (classicNum) {
        if (classicNum === 4) {
          classicGet = classicNum + 1
        }
      }
      if (standoutNum) {
        standout = 309.99
      }
      if (premiumNum) {
        if (premiumNum >= 3) {
          premium = 389.99
        }
      }
    }

    var classicTotal = classicNum * classic
    var standoutTotal = standoutNum * standout
    var premiumTotal = premiumNum * premium
    var total = classicTotal + standoutTotal + premiumTotal
    reply({
      data: {
        classic: classic,
        standout: standout,
        premium: premium,
        classicNum: classicNum,
        standoutNum: standoutNum,
        premiumNum: premiumNum,
        customer: customer,
        classicGet: classicGet,
        standoutGet: standoutGet,
        premiumGet: premiumGet,
        classicTotal: classicTotal,
        standoutTotal: standoutTotal,
        premiumTotal: premiumTotal,
        total: total
      }
    })
  }
}

export default CheckoutController
