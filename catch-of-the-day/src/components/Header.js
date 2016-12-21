import React from 'react'

class Header extends React.Component {
  render() {
    console.log(this)
    console.log('You can debug this in dev tools by selecting the Component in React Dev Tools, then entering "$r" in the Console')
    console.log('You can debug any tag by selecting the Component in Elements, then entering "$0" in the Console')
    return (
      <header>
        <h1>Catch of the Day</h1>
        <h2>{this.props.tagline}</h2>
      </header>
    )
  }
}

export default Header