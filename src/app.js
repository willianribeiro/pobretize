'use strict'

import React from 'react'
import Home from './containers/Home.jsx'

class App extends React.Component {

  render () {
    return (
      <div className='app-wrapper app-temporary-css'>
        <header className='app-header'>
          Controle de contas
        </header>

        <main className='app-content'>
          <Home />
        </main>
      </div>
    )
  }
}

export default App
