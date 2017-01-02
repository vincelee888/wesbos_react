import React from 'react'
import { formatPrice } from '../helpers'

class Order extends React.Component {
  constructor() {
    super()
    this.renderOrderItems = this.renderOrderItems.bind(this)
  }

  renderOrderItems(key) {
    const fish = this.props.fishes[key]
    const count = this.props.order[key]
    const removeBtn = <button onClick={() => this.props.removeFromOrder(key)}>Remove</button>

    if (!fish || fish.status === 'unavailable') {
      return (
        <li key={key}>Sorry, not available {removeBtn}</li>
      )
    }else {
      return (
      <li key={key}>
        <span>{count}lbs of {fish.name}</span>
        <span className="price">{formatPrice(count * fish.price)}</span>
        {removeBtn}
      </li>
      )
    }
  }

  render() {
    const orderIds = Object.keys(this.props.order)
    const total = orderIds.reduce((a, key) => {
      const fish = this.props.fishes[key]
      const count = this.props.order[key]
      const isAvailable = fish && fish.status === 'available'
      return isAvailable
        ? a + (count * fish.price  || 0)
        : a
    }, 0)

    return (
      <div className="order-wrap">
        <h2>Your Order</h2>
        <ul className="order">
          {orderIds.map(this.renderOrderItems)}
          <li className="total">
            Total: {formatPrice(total)}
          </li>
        </ul>
      </div>
    )
  }
}

export default Order