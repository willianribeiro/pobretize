import React from 'react'
import { connect } from 'react-redux'

import Dialog from 'react-toolbox/lib/dialog/Dialog'
import Input from 'react-toolbox/lib/input/Input'
import * as api from '../api/api.js'
import * as incomeModalActions from '../actions/incomeModalActions.js'

@connect((store) => {
    let {home} = store

    return {
      incomeModal: home.incomeModal
    }
})

class IncomeModal extends React.Component {
  constructor () {
    super()
    this.state = {
      active: false,
      monthlyValue: '',
      payDay: '30',
      income: null
    }
    this.bind(this)
  }

  bind(context) {
    context.handleChange = context.handleChange.bind(context)
    context.save = context.save.bind(context)
    context.cancel = context.cancel.bind(context)
  }

  handleChange = (name, value) => {
    this.setState({[name]: value})
  }

  handleToggleDialog () {
    incomeModalActions.toggleIncomeModal(false)
  }

  save () {
    let income;

    income = this.state.income
    if (income) {
      income.monthly = this.state.monthlyValue
    } else {
      income = {
        monthly: this.state.monthlyValue
      }
    }
    api.saveIncome(income)
    console.log(api.getIncome())
    this.handleToggleDialog()
  }

  cancel () {
    console.log('canceled')
    this.handleToggleDialog()
  }

  componentDidMount() {
    this.setState({income: api.getIncome()})
  }

  render () {
    let props,
        actions

    props = this.props
    actions = [
      { label: "Cancelar", onClick: this.cancel },
      { label: "Salvar", onClick: this.save }
    ];

    return (
      <Dialog
        actions={actions}
        active={props.incomeModal.active}
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
    )
  }
}

IncomeModal.defaultProps = {
  active: false
}

export default IncomeModal;
