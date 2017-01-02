import React from 'react'
import { formatPrice } from '../helpers'
import CSSTransitionGroup from 'react-addons-css-transition-group'

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
        <span>
          <CSSTransitionGroup
          component="span" 
          className="count"
          transitionName="count" 
          transitionEnterTimeout={500}
          transitionLeaveTimeout={500}>
            <span key={count}>{count}</span>
          </CSSTransitionGroup>
          { /* transitioning element needs key so react can duplicate, update and replace */ }
          lbs of {fish.name}
        </span>
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
        <CSSTransitionGroup 
          component="ul" 
          transitionName="order" 
          transitionEnterTimeout={500}
          transitionLeaveTimeout={500}
          className="order">
          {orderIds.map(this.renderOrderItems)}
          <li className="total">
            Total: {formatPrice(total)}
          </li>
        </CSSTransitionGroup>
      </div>
    )
  }
}

export default Order