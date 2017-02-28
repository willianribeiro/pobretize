const initialState = {
  active: false
}

export default function (state = initialState, action) {
  switch (action.type) {
    case 'HOME_TOGGLE_INCOME_MODAL':
      return {
        ...state,
        active: action.active
      }
    default:
      return state
  }
}
