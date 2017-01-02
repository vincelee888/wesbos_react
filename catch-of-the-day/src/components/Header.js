import React from 'react'

// class Header extends React.Component {
//   render() {
//     console.log(this)
//     console.log('You can debug this in dev tools by selecting the Component in React Dev Tools, then entering "$r" in the Console')
//     console.log('You can debug any tag by selecting the Component in Elements, then entering "$0" in the Console')
//     return (
//       <header>
//         <h1>Catch of the Day</h1>
//         <h2>{this.props.tagline}</h2>
//       </header>
//     )
//   }
// }

// just use a stateless functional component if only need the render

const Header = (props) => {
  return (
    <header>
      <h1>Catch of the Day</h1>
      <h2>{props.tagline}</h2>
    </header>
  )
}

Header.propTypes = {
  tagline: React.PropTypes.string
}

export default Header
