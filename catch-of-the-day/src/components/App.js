import React from 'react'
import Header from './Header'
import Order from './Order'
import Inventory from './Inventory'

class App extends React.Component {
  constructor() {
    super()

    this.addFish = this.addFish.bind(this)

    this.state = {
      fishes: {},
      orders: {}
    }
  }

  addFish(newFish) {
    const updatedFishes = {...this.state.fishes} // copy current state (for perf/race-condition avoidance)
    updatedFishes[`fish-${Date.now()}`] = newFish
    this.setState({ fishes: updatedFishes })
  }

  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh seafood market" /> { /* pass properties to component */ }
        </div>
        <Order />
        <Inventory addFish={this.addFish} />
      </div>
    )
  }
}

export default App