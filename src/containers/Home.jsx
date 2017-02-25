import React from 'react'

import Account from '../components/Account.jsx'
import NoResults from '../components/NoResults.jsx'
import AccountsList from './AccountsList.jsx'
import IncomeModal from './IncomeModal.jsx'

class Home extends React.Component {
  constructor() {
    super()
    this.hasAccounts = this.hasAccounts.bind(this)
    this.renderAccounts = this.renderAccounts.bind(this)
    this.handleToggleDialog = this.handleToggleDialog.bind(this)
  }

  handleToggleDialog () {
    // abrir o modal - fazer isso no redux
    console.log('toggle');
  }

  hasAccounts () {
    return this.props.accounts.length > 0
  }

  render () {
    if (this.hasAccounts()) {
      return this.renderAccounts()
    } else {
      return this.renderIncomeModal()
    }
  }

  renderAccounts () {
    return <AccountsList accounts={this.props.accounts} />;
  }

  renderIncomeModal () {
    return (
      <div>
        <NoResults
          message='Fonte de receita não cadastrada.'
          tip='Que tal cadastrar agora?'
          action={this.handleToggleDialog}
          actionLabel='Cadastrar receita'
        />
        <IncomeModal />
      </div>
    )
  }
}

Home.defaultProps = {
  accounts: []
}

export default Home;
