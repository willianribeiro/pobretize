'use strict'

import React from 'react'
import Account from './components/Account.jsx'
import NoResults from './components/NoResults.jsx'

const accounts = [
  // {
  //   name: 'Caixa',
  //   percent: 0,
  //   total: 8000,
  //   partial: 2000,
  //   hideButtons: true
  // }, {
  //   name: 'Educação',
  //   percent: 10,
  //   total: 3000,
  //   partial: 200,
  //   hideButtons: false
  // }
]

class App extends React.Component {

  renderAccounts (accounts) {
    if (accounts && accounts.length > 0) {
      return (
        accounts.map((item, index) => (
          <Account
            key={index}
            account={item}
            hideButtons={item.hideButtons}
            />
        ))
      )
    } else {
      return (
        <NoResults
          message='Nenhuma receita cadastrada.'
          tip='Que tal cadastrar sua fonte de receita agora? (-;'
          action={() => console.log('Cadastrar Receita')}
          actionLabel='Cadastrar receita'
        />
      )
    }
  }

  render () {
    return (
      <div className='app-wrapper app-temporary-css'>
        <header className='app-header'>
          Controle de contas
        </header>

        <main className='app-content'>
          {this.renderAccounts(accounts)}
        </main>
      </div>
    )
  }
}

export default App
