import React from 'react'

import Account from '../components/Account.jsx'
import NoResults from '../components/NoResults.jsx'
import Dialog from 'react-toolbox/lib/dialog/Dialog'
import Input from 'react-toolbox/lib/input/Input'

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

class Home extends React.Component {
  constructor () {
    super()
    this.state = {
      active: false,
      monthlyValue: '0',
      payDay: '30'
    }
    this.bind(this)
  }

  bind(context) {
    context.renderDialog = context.renderDialog.bind(context)
    context.handleChange = context.handleChange.bind(context)
    context.handleToggleDialog = context.handleToggleDialog.bind(context)
    context.save = context.save.bind(context)
    context.cancel = context.cancel.bind(context)
  }

  handleToggleDialog () {
    this.setState({active: !this.state.active})
  }

  handleChange = (name, value) => {
    this.setState({[name]: value})
  }

  save () {
    console.log('saved')
    console.log(this.state.monthlyValue)
    this.handleToggleDialog()
  }

  cancel () {
    console.log('canceled')
    this.handleToggleDialog()
  }

  renderContent (accounts) {
    let actions;

    if (accounts && accounts.length > 0) {
      return this.renderAccounts(accounts);
    } else {
      return this.renderDialog();
    }
  }

  renderAccounts (accounts) {
    return (
      accounts.map((item, index) => (
        <Account
          key={index}
          account={item}
          hideButtons={item.hideButtons}
        />
      ))
    )
  }

  renderDialog() {
    let actions;

    actions = [
      { label: "Cancelar", onClick: this.cancel },
      { label: "Salvar", onClick: this.save }
    ];

    return (
      <div>
        <NoResults
          message='Fonte de receita não cadastrada.'
          tip='Que tal cadastrar agora?'
          action={this.handleToggleDialog}
          actionLabel='Cadastrar receita'
        />
        <Dialog
          actions={actions}
          active={this.state.active}
          onEscKeyDown={this.handleToggleDialog}
          onOverlayClick={this.handleToggleDialog}
          title='Cadastrar receita'>
          <div>
            <Input
              type='text'
              label='Valor mensal'
              name='monthlyValue'
              icon='attach_money'
              value={this.state.monthlyValue}
              onChange={this.handleChange.bind(this, 'monthlyValue')}
            />
          </div>
          <div>
            <Input
              type='number'
              min='1'
              max='28'
              label='Dia do pagamento'
              name='payDay'
              icon='today'
              value={this.state.payDay}
              onChange={this.handleChange.bind(this, 'payDay')}
            />
          </div>
        </Dialog>
      </div>
    )
  }

  render () {
    return this.renderContent(accounts);
  }
}

export default Home;
