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

    this.state = {
      fishes: {},
      orders: {}
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

  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh seafood market" /> { /* pass properties to component */ }
          <ul className="list-of-fish">
          {
            Object.keys(this.state.fishes)
              .map((f) => <Fish key={f} details={this.state.fishes[f]} />)
          }
          </ul>
        </div>
        <Order />
        <Inventory addFish={this.addFish} loadSamples={this.loadSamples} />
      </div>
    )
  }
}

export default App