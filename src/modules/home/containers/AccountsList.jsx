import React, { PropTypes } from 'react'
import Account from '../components/Account.jsx'

class AccountsList extends React.Component {
  render () {
    let props
    props = this.props

    return (
      props.accounts.map((item, index) => (
        <Account
          key={index}
          account={item}
          hideButtons={item.hideButtons}
        />
      ))
    )
  }
}

export default AccountsList;
