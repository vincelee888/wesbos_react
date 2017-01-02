import React from 'react'
import Header from './Header'
import Order from './Order'
import Fish from './Fish'
import Inventory from './Inventory'
import sampleFishes from '../sample-fishes'
import base from '../base'

class App extends React.Component {
  constructor() {
    super()

    this.addFish = this.addFish.bind(this)
    this.updateFish = this.updateFish.bind(this)
    this.removeFish = this.removeFish.bind(this)
    this.loadSamples = this.loadSamples.bind(this)
    this.addToOrder = this.addToOrder.bind(this)

    this.state = {
      fishes: {},
      order: {}
    }
  }

  componentWillMount() { // runs before component is rendered
    const storeId = this.props.params.storeId
    this.ref = base.syncState(`${storeId}/fishes`, {
      context: this,
      state: 'fishes'
    })

    const localStorageRef = localStorage.getItem(`order-${storeId}`)
    if (localStorageRef) {
      this.setState({
        order: JSON.parse(localStorageRef)
      })
    }
  }

  componentWillUnmount() {
    base.removeBinding(this.ref)
  }
  
  componentWillUpdate(nextProps, nextState) { // called when props or state changes
    const storeId = this.props.params.storeId
    localStorage.setItem(`order-${storeId}`, JSON.stringify(nextState.order))
  }

  addFish(newFish) {
    const updatedFishes = {...this.state.fishes} // copy current state (for perf/race-condition avoidance)
    updatedFishes[`fish-${Date.now()}`] = newFish
    this.setState({ 
      fishes: updatedFishes
    })
  }

  updateFish(key, updatedFish) {
    const updatedFishes = {...this.state.fishes} // copy current state (for perf/race-condition avoidance)
    updatedFishes[key] = updatedFish
    this.setState({ 
      fishes: updatedFishes
    })
  }

  removeFish(key) {
    const fishes = {...this.state.fishes} // copy current state (for perf/race-condition avoidance)
    fishes[key] = null // set it null due to Firebase, instead of delete fishes[key]
    this.setState({ 
      fishes
    })
    const updatedOrder = {...this.state.order} // copy current state (for perf/race-condition avoidance)
    delete updatedOrder[key]
    this.setState({ 
      order: updatedOrder
    })
  }

  loadSamples() {
    this.setState({
      fishes: sampleFishes
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
        <Order fishes={this.state.fishes} order={this.state.order} params={this.props.params} />
        <Inventory fishes={this.state.fishes} addFish={this.addFish} updateFish={this.updateFish} removeFish={this.removeFish} loadSamples={this.loadSamples} />
      </div>
    )
  }
}

export default App