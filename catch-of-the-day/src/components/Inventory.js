import React from 'react'
import AddFishForm from './AddFishForm'

class Inventory extends React.Component {
  render() {
    return (
      <section>
        <header>Inventory</header>
        <AddFishForm />
      </section>
    )
  }
}

export default Inventory