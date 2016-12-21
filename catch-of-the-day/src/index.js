import React from 'react'
import { render } from 'react-dom'
import './css/style.css' // import a compiled css file directly into react

import App from './components/App'

render(<App/>, document.querySelector('#main'))