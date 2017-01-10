import appState from './appstate';

function defineCurrency(state = appState, action) {
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
    case 'SELECT_CURRENCY_SYMBOL':
      return {
        ...state,
        symbol: action.currencySymbol,
      };
    case 'LOADING_DATA':
      return {
        ...state,
        isFetching: true,
      };
    case 'RECEIVE_EXCHANGE_RATE':
      return {
        ...state,
        isFetching: false,
        currentExchangeRate: action.currentExchangeRate,
        status: action.status,
        error: action.error,
        data: action.data,
        lastUpdated: action.receivedAt,
      };
    case 'TRACK_RATE':
      return {
        ...state,
        historyData: [...state.historyData, action.fareToTrack],
      };
    case 'GENERAL_ERROR':
      return {
        ...state,
        error: action.error,
      };
    default:
      return state;
  }
}
export default defineCurrency;
