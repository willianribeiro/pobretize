'use strict'

import React from 'react'
import Account from './components/Account.jsx'

class App extends React.Component {
  render () {
    let account1 = {
      title: 'Gastos gerais',
      total: 740.0,
      percent: 50
    }

    let account2 = {
      title: 'Educação',
      total: 280.0,
      percent: 10
    }

    let account3 = {
      title: 'Diversão',
      total: 280.0,
      percent: 10
    }

    let account4 = {
      title: 'Liberdade',
      total: 280.0,
      percent: 10
    }

    let account5 = {
      title: 'Sonhos - Compras programadas',
      total: 280.0,
      percent: 10
    }

    let account6 = {
      title: 'Doação',
      total: 120.0,
      percent: 5
    }

    return (
      <div className='app-wrapper app-temporary-css'>
        <header className='app-header'>
          Controle de contas
        </header>

        <main className='app-content'>

          <section className='account'>
            <div className='account__header'>
              <div className='account__header__title'>Saldo mês atual</div>
              <div className='account__header__options'>*</div>
            </div>
            <div className='account__body'>
              <div className='account__body__total'>R$ 2.000, 00</div>
            </div>
          </section>

          <Account account={account1} />
          <Account account={account2} />
          <Account account={account3} />
          <Account account={account4} />
          <Account account={account5} />
          <Account account={account6} />
        </main>
      </div>
    )
  }
}

export default App
