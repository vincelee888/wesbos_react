import React from 'react'

import { getFunName } from '../helpers'

class StorePicker extends React.Component {
  // USE: if component is rendered multiple times to the page
  // constructor () {
  //   super()
  //   this.goToStore = this.goToStore.bind(this) // wtf - sets 'this' scope
  // }
  // OR: bind within onSubmit:
  // <form className="store-selector" onSubmit={ this.goToStore.bind(this) }>
  // OR: arrow function; overhead of creating anonymous function each time the component is rendered
  // <form className="store-selector" onSubmit={ (e) => this.goToStore(e) }>

  goToStore (e) {
    e.preventDefault()
    console.log(this.storeId.value) // this.storeId is the input element
    this.context.router.transitionTo(`/store/${this.storeId.value}/`)
  } 

  render () {
    return (
      <form className="store-selector" onSubmit={ (e) => this.goToStore(e) }> {/* 'class' is a reserved word in js; can only return a single dom element */}
        <legend>Please enter a store</legend>
        <input type="text" required placeholder="Store name" defaultValue={ getFunName() } ref={ (v) => this.storeId = v } /> {/* must close tags */}
        <button type="submit">Visit Store</button>
      </form>
    ) // jsx alternative to React.createElement('p', blah blah blah)
  }
}

StorePicker.contextTypes = {
  router: React.PropTypes.object // pull in router from ancestor component
}

export default StorePicker