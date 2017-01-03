/* eslint no-undef: "error" */
/* eslint-env browser */

import { install as offlineInstall } from 'offline-plugin/runtime';
import { createStore } from 'redux';
import convertCurrency from './modules/convertCurrency';
import { attachEventListener } from './modules/helpers';
import { selectLeftCurrency, selectRightCurrency, selectExchangeRate } from './modules/actions';
import updateCurrency from './modules/reducers';
import './css/normalize.css';
import './css/global.css';


/*

-- TO DOs:
  - Check coverage (srcFiles)
  - Fetch API cannot load http://api.fixer.io/latest. Failed to start loading.

- Splash screen
  -- Chose currencies to keep track -->
  -- Save values to local storage or indexDB (Firebase in the feature) -->
  -- Display exchange fee -->
  -- Subscribe to push notification
- History screen
  -- Get historical rates for the current month/week
  -- Display graph ????


*/

const store = createStore(updateCurrency);
store.subscribe(() =>
  console.log(store.getState()),
);

function getlatestExchangeRate(LeftCurrency, rightCurrency) {
  fetch('https://api.fixer.io/latest', { mode: 'cors' }).then((response) => {
    if (response.ok) {
      response.json().then((data) => {
        const currentExchangeRate = convertCurrency(data, LeftCurrency, rightCurrency).toFixed(4);
        store.dispatch(selectExchangeRate(currentExchangeRate));
      });
    } else {
      console.log('Network response was not ok.');
    }
  })
  .catch((error) => {
    console.log(`There has been a problem with your fetch operation: ${error.message}`);
  });
}

const valueEl = document.getElementById('excahgeRate');
function render() {
  valueEl.innerHTML = store.getState().currentExchangeRate;
}

function bootstrap() {
  getlatestExchangeRate(store.getState().leftCurrency, store.getState().rightCurrency);
  render();

  function getCurrency(evt) {
    const el = evt.target;
    const currency = el.options[el.selectedIndex].value;
    switch (el.getAttribute('id')) {
      case 'leftCurrency':
        store.dispatch(selectLeftCurrency(currency));
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
