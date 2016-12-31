import React from 'react'
import Header from './Header'
import Order from './Order'
import Fish from './Fish'
import Inventory from './Inventory'
import SampleFishes from '../sample-fishes'

class App extends React.Component {
  constructor() {
    super()

    this.addFish = this.addFish.bind(this)
    this.loadSamples = this.loadSamples.bind(this)
    this.addToOrder = this.addToOrder.bind(this)

    this.state = {
      fishes: {},
      order: {}
    }
  }

  addFish(newFish) {
    const updatedFishes = {...this.state.fishes} // copy current state (for perf/race-condition avoidance)
    updatedFishes[`fish-${Date.now()}`] = newFish
    this.setState({ 
      fishes: updatedFishes
    })
  }

  loadSamples() {
    this.setState({
      fishes: SampleFishes
    })
  }

  addToOrder(fish) {
    const updatedOrder = {...this.state.order} // copy current state (for perf/race-condition avoidance)
    updatedOrder[fish] = updatedOrder[fish] + 1 || 1
    this.setState({ 
      order: updatedOrder
    })
  }

  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh seafood market" /> { /* pass properties to component */ }
          <ul className="list-of-fish">
          {
            Object.keys(this.state.fishes)
              .map((f) => <Fish key={f} index={f} details={this.state.fishes[f]} addToOrder={this.addToOrder} />) // key is a React reserved word, have to pass another prop for id
          }
          </ul>
        </div>
        <Order fishes={this.state.fishes} order={this.state.order} />
        <Inventory addFish={this.addFish} loadSamples={this.loadSamples} />
      </div>
    )
  }
}

export default App