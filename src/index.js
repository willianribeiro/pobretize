'use strict'

import React from 'react'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'

// Redux
import {Provider} from 'react-redux'
import store from './store'

// React Toolbox
import theme from './vendors/react-toolbox/theme'
import ThemeProvider from 'react-toolbox/lib/ThemeProvider'
import './vendors/react-toolbox/theme.css'

// Application
import App from './app'
import './sass/main.scss'

const renderApp = (NextApp) => {
  render(
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <AppContainer>
          <NextApp />
        </AppContainer>
      </ThemeProvider>
    </Provider>,
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
