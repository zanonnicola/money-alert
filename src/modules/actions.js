import convertCurrency from './convertCurrency';

const selectLeftCurrency = leftCurrency => ({
  type: 'SELECT_LEFT_CURRENCY',
  leftCurrency,
});
const selectRightCurrency = rightCurrency => ({
  type: 'SELECT_RIGHT_CURRENCY',
  rightCurrency,
});
const selectCurrencySymbol = currencySymbol => ({
  type: 'SELECT_CURRENCY_SYMBOL',
  currencySymbol,
});
const requestExchangeRate = isFetching => ({
  type: 'REQUEST_EXCHANGE_RATE',
  isFetching,
});
const receiveExchangeRate = (currentExchangeRate, status, error, data) => ({
  type: 'RECEIVE_EXCHANGE_RATE',
  currentExchangeRate,
  status,
  error,
  data,
  receivedAt: Date.now(),
});

function fetchAPI(leftCurrency, rightCurrency) {
  return (dispatch) => {
    dispatch(requestExchangeRate());

    return fetch('https://api.fixer.io/latest', { mode: 'cors' }).then((response) => {
      if (response.ok) {
        response.json().then((data) => {
          const currentExchangeRate = convertCurrency(data, leftCurrency, rightCurrency).toFixed(4);
          console.log(currentExchangeRate);
          dispatch(receiveExchangeRate(currentExchangeRate, 'success', null, data));
        });
      } else {
        dispatch(receiveExchangeRate(0.0000, 'failure', 'Network response was not ok'));
      }
    })
    .catch((error) => {
      dispatch(receiveExchangeRate(0.0000, `There has been a problem with your fetch operation: ${error.message}`));
      console.log(`There has been a problem with your fetch operation: ${error.message}`);
    });
  };
}

export { selectLeftCurrency, selectRightCurrency, selectCurrencySymbol, requestExchangeRate, receiveExchangeRate, fetchAPI };
