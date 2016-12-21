import React from 'react'

class StorePicker extends React.Component {
  render() {
    return (
      <form className="store-selector"> {/* 'class' is a reserved word in js; can only return a single dom element */}
        <legend>Please enter a store</legend>
        <input type="text" required placeholder="Store name" /> {/* must close tags */}
        <button type="submit">Visit Store</button>
      </form>
    ) // jsx alternative to React.createElement('p', blah blah blah)
  }
}

export default StorePicker