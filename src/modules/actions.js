const selectLeftCurrency = leftCurrency => ({
  type: 'SELECT_LEFT_CURRENCY',
  leftCurrency,
});
const selectRightCurrency = rightCurrency => ({
  type: 'SELECT_RIGHT_CURRENCY',
  rightCurrency,
});
const selectExchangeRate = currentExchangeRate => ({
  type: 'UPDATE_EXCHANGE_RATE',
  currentExchangeRate,
});

export { selectLeftCurrency, selectRightCurrency, selectExchangeRate };
