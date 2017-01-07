/* eslint no-undef: "error" */
/* eslint-env browser */

import { install as offlineInstall } from 'offline-plugin/runtime';
import { attachEventListener } from './modules/helpers';
import { selectLeftCurrency, selectRightCurrency, selectCurrencySymbol, fetchAPI, addRateToState } from './modules/actions';
import store from './modules/store';
import './css/normalize.css';
import './css/global.css';


/*

-- TO DOs:

- Splash screen
  -- Chose currencies to keep track -->
  -- Save values to local storage or indexDB (Firebase in the feature) -->
  -- Display exchange fee -->
  -- Subscribe to push notification
- History screen
  -- Get historical rates for the current month/week
  -- Display graph ????


*/

function updateData(evt) {
  evt.preventDefault();
  console.log('click');
  store.dispatch(fetchAPI(store.getState().leftCurrency, store.getState().rightCurrency)).then(() => {
    console.log(store.getState());
  });
}
const updateEl = document.getElementById('update-data');
updateEl.addEventListener('click', updateData);

const valueEl = document.getElementById('excahgeRate');
function render() {
  valueEl.innerHTML = `${store.getState().symbol} ${store.getState().currentExchangeRate}`;
}

function trackCurrency(evt) {
  evt.preventDefault();
  const currentRate = store.getState().currentExchangeRate;
  store.dispatch(addRateToState(currentRate));
}

const trackEl = document.getElementById('track');
trackEl.addEventListener('click', trackCurrency);

function bootstrap() {
  render();

  function getCurrency(evt) {
    const el = evt.target;
    const currency = el.options[el.selectedIndex].value;
    const currencySymbol = el.options[el.selectedIndex].dataset.symbol;
    switch (el.getAttribute('id')) {
      case 'leftCurrency':
        store.dispatch(selectLeftCurrency(currency));
        store.dispatch(selectCurrencySymbol(currencySymbol));
        break;
      case 'rightCurrency':
        store.dispatch(selectRightCurrency(currency));
        break;
      default:
    }
  }
  attachEventListener('.select', 'change', getCurrency);
  store.subscribe(render);

  if (process.env.NODE_ENV === 'production') {
    offlineInstall();
  }
}
/* eslint-disable */

// this is only relevant when using `hot` mode with webpack
// special thanks to Eric Clemmons: https://github.com/ericclemmons/webpack-hot-server-example
const reloading = document.readyState === 'complete'
if (module.hot) {
  module.hot.accept(function(err) {
    console.log('❌  HMR Error:', err)
  })
  if (reloading) {
    console.log('🔁  HMR Reloading.')
    bootstrap()
  } else {
    console.info('✅  HMR Enabled.')
    bootstrap()
  }
} else {
  console.info('❌  HMR Not Supported.')
  bootstrap()
}
