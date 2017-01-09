/* eslint no-undef: "error" */
/* eslint-env browser */

import { install as offlineInstall } from 'offline-plugin/runtime';
// import watch from 'redux-watch';
import idbKeyval from 'idb-keyval';
import { attachEventListener } from './modules/helpers';
import appState from './modules/appstate';
import { selectLeftCurrency, selectRightCurrency, selectCurrencySymbol, fetchAPI, addRateToState, getDataFromIndexDB } from './modules/actions';
import observeStore from './modules/observeStore';
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
function loadingSpinner(state) {
  const el = document.getElementById('loader');
  if (state) {
    el.classList.add('show');
  } else {
    el.classList.remove('show');
  }
}

function fixMeplease() {
  function updateData(evt) {
    evt.preventDefault();
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

  function saveStateToIndexDB() {
    const dataToSave = {
      leftCurrency: store.getState().leftCurrency,
      rightCurrency: store.getState().rightCurrency,
      currentExchangeRate: store.getState().currentExchangeRate,
      historyData: store.getState().historyData,
    };
    console.log('saveToIndex', dataToSave.currentExchangeRate);
    for (const key of Object.keys(dataToSave)) {
      idbKeyval.set(key, dataToSave[key])
        .then(() => console.log('It worked!'))
        .catch(err => console.log('It failed!', err));
    }
  }
  observeStore(store, saveStateToIndexDB);

  function trackCurrency(evt) {
    evt.preventDefault();
    const currentRate = store.getState().currentExchangeRate;
    store.dispatch(addRateToState(currentRate));
  }

  const trackEl = document.getElementById('track');
  trackEl.addEventListener('click', trackCurrency);

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
  observeStore(store, render);

  if (process.env.NODE_ENV === 'production') {
    offlineInstall();
  }
}

function bootstrap() {
  if (!window.indexedDB) {
    console.log("Your browser doesn't support a stable version of IndexedDB. Saving your data will not be possible.");
  }
  loadingSpinner(true);

  // idbKeyval.get('leftCurrency').then((val) => {
  //   console.log(val);
  //   if (val !== null || val !== undefined) {
  //     idbKeyval.keys().then((keys) => {
  //       const stateKeys = keys;
  //       stateKeys.forEach((item) => {
  //         idbKeyval.get(item).then((res) => {
  //           appState[item] = res;
  //         });
  //       });
  //     });
  //     fixMeplease();
  //   }
  // });
  store.dispatch(getDataFromIndexDB({ bla: 'asdas', hee: 'asdas' }));
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
