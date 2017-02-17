'use strict'

import React from 'react'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import theme from './vendors/react-toolbox/theme'
import ThemeProvider from 'react-toolbox/lib/ThemeProvider'
import App from './app'
import './vendors/react-toolbox/theme.css'
import './sass/main.scss'

const renderApp = (NextApp) => {
  render(
    <ThemeProvider theme={theme}>
      <AppContainer>
        <NextApp />
      </AppContainer>
    </ThemeProvider>,
    document.querySelector('[data-js="app"]')
  )
}

renderApp(App)

if (module.hot) {
  module.hot.accept('./app', () => {
    const NextApp = require('./app').default
    renderApp(NextApp)
  })
}
