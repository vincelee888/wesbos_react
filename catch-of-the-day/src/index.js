import React from 'react'
import { render } from 'react-dom'
import './css/style.css' // import a compiled css file directly into react

import StorePicker from './components/StorePicker'

render(<StorePicker/>, document.querySelector('#main'))