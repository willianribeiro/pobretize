import store from '../../../store'

export function toggleIncomeModal (state) {
  store.dispatch({
    type: 'HOME_TOGGLE_INCOME_MODAL',
    active: state
  })
};
