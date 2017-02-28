import React from 'react'

import NoResults from '../../../components/NoResults.jsx'
import AccountsList from './AccountsList.jsx'
import IncomeModal from './IncomeModal.jsx'
import * as incomeModalActions from '../actions/incomeModalActions.js'

class Home extends React.Component {
  constructor() {
    super()
    this.hasAccounts = this.hasAccounts.bind(this)
    this.renderAccounts = this.renderAccounts.bind(this)
    this.handleToggleDialog = this.handleToggleDialog.bind(this)
  }

  handleToggleDialog () {
    incomeModalActions.toggleIncomeModal(true)
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
