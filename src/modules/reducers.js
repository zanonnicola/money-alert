const appState = {
  leftCurrency: 'EUR',
  rightCurrency: 'GBP',
  currentExchangeRate: 0.0000,
  symbol: '€',
};

export default function updateCurrency(state = appState, action) {
  switch (action.type) {
    case 'SELECT_LEFT_CURRENCY':
      return {
        ...state,
        leftCurrency: action.leftCurrency,
      };
    case 'SELECT_RIGHT_CURRENCY':
      return {
        ...state,
        rightCurrency: action.rightCurrency,
      };
    case 'UPDATE_EXCHANGE_RATE':
      return {
        ...state,
        currentExchangeRate: action.currentExchangeRate,
      };
    default:
      return state;
  }
}
