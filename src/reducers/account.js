const initialState = {
  accounts: [{
    partial: 280.0,
    total: 300.00
  }, {
    partial: 280.0,
    total: 350.00
  }]
}

const account = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD':
      return {
        ...state,
        partial: action.partial
      }
    default:
      return state
  }
}

export default account
