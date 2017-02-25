export function saveIncome (income) {
  window.localStorage.setItem('income', JSON.stringify(income))
}

export function getIncome () {
  return JSON.parse(window.localStorage.getItem('income'))
}

export function removeIncome () {
  window.localStorage.removeItem('income')
}
