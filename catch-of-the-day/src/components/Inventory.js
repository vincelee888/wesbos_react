import React from 'react'
import AddFishForm from './AddFishForm'

class Inventory extends React.Component {
  constructor() {
    super()
    this.renderInventory = this.renderInventory.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e, key) {
    const fish = this.props.fishes[key]
    const updatedFish = {
      ...fish, 
      [e.target.name]: e.target.value
    }
    console.log(updatedFish)
    this.props.updateFish(key, updatedFish)
  }

  renderInventory(key) {
    const fish = this.props.fishes[key]
    return (
      <div key={key} className="fish-edit" onSubmit={(e) => this.createFish(e)}>
        <input name="name" defaultValue={fish.name} type="text" placeholder="Name" onChange={(e) => this.handleChange(e, key)} />
        <input name="price" defaultValue={fish.price} type="text" placeholder="Price" />
        <select name="status" defaultValue={fish.status}>
          <option value="available">Fresh!</option>
          <option value="unavailable">Sold Out</option>
        </select>
        <textarea name="desc" defaultValue={fish.desc} type="text" placeholder="Desc"></textarea>
        <input name="image" defaultValue={fish.image} type="text" placeholder="Image" />
      </div>
    )  
  }

  render() {
    return (
      <section>
        <header>Inventory</header>
        {
          Object.keys(this.props.fishes)
            .map(this.renderInventory)
        }
        <AddFishForm addFish={this.props.addFish} />
        <button onClick={this.props.loadSamples}>Load Fishies</button>
      </section>
    )
  }
}

export default Inventory