import React from 'react'

class Account extends React.Component {
  constructor () {
    super()
    this.renderActions = this.renderActions.bind(this)
  }

  renderActions () {
    if (!this.props.hideButtons) {
      return (
        <div className='account__body__actions'>
          <button type='button' className='btn is-raised is-accent'>Subtrair</button>
        </div>
      )
    }
  }

  render () {
    let props = this.props;

    return (
      <section className='account'>
        <div className='account__header'>
          <div className='account__header__title'>
            {props.account.name + ' (' + props.account.percent + '%)'}
          </div>
          <div className='account__header__options'></div>
        </div>
        <div className='account__body'>
          <div className='account__body__display'>
            <div className='account__body__display__current'>
              <div className='account__body__display__label'>
                saldo mês atual:
              </div>
              <div className='account__body__display__number'>
                R$ {props.account.partial.toFixed(2)}
              </div>
            </div>
            <div className='account__body__display__accumulated'>
              <div className='account__body__display__label'>
                saldo acumulado:
              </div>
              <div className='account__body__display__number is-smaller'>
                R$ {props.account.total.toFixed(2)}
              </div>
            </div>
          </div>

          { this.renderActions() }
        </div>
      </section>
    )
  }
}

Account.defaultProps = {
  hideButtons: false,
  account: {
    name: 'Conta',
    percent: 0,
    total: 0,
    partial: 0
  }
}

export default Account
