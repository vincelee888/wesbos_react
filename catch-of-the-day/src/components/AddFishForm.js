import React from 'react'

class AddFishForm extends React.Component {
  createFish(event) {
    event.preventDefault()
    const fish = {
      name: this.name.value,
      desc: this.desc.value,
      price: this.price.value,
      status: this.status.value,
      image: this.image.value
    }
    this.props.addFish(fish)
    this.fishForm.reset()
  }
  render() {
    return (
      <form ref={(i) => this.fishForm = i} className="fish-edit" onSubmit={(e) => this.createFish(e)}>
        <input ref={(i) => this.name = i} type="text" placeholder="Name" />
        <input ref={(i) => this.price = i} type="text" placeholder="Price" />
        <select ref={(i) => this.status = i}>
          <option value="available">Fresh!</option>
          <option value="unavailable">Sold Out</option>
        </select>
        <textarea ref={(i) => this.desc = i} type="text" placeholder="Desc"></textarea>
        <input ref={(i) => this.image = i} type="text" placeholder="Image" />
        <button type="submit">+ Add Fish</button>
      </form>
    )
  }
}

export default AddFishForm