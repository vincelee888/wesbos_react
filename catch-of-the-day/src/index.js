import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Match, Miss } from 'react-router'

import './css/style.css' // import a compiled css file directly into react

import App from './components/App'
import StorePicker from './components/StorePicker'
import NotFound from './components/NotFound'

const Router = () => {
  return (
    <BrowserRouter>
      <div>
        <Match exactly pattern="/" component={StorePicker} />
        <Match exactly pattern="/store/:storeId" component={App} />
        <Miss component={NotFound} /> {/* any js variable must be in mustache tags */}
      </div>
    </BrowserRouter>
  )
}

render(<Router />, document.querySelector('#main'))