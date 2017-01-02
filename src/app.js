/* eslint no-undef: "error" */
/* eslint-env browser */

import { install as offlineInstall } from 'offline-plugin/runtime';
import convertCurrency from './modules/convertCurrency';
import './css/normalize.css';
import './css/global.css';


/*

- Splash screen
  -- Chose currencies to keep track -->
  -- Save values to local storage or indexDB (Firebase in the feature) -->
  -- Display exchange fee -->
  -- Subscribe to push notification
- History screen
  -- Get historical rates for the current month/week
  -- Display graph ????


*/

function getData() {
  fetch('http://api.fixer.io/latest').then((response) => {
    if (response.ok) {
      response.json().then((data) => {
        console.log(convertCurrency(data, 'GBP', 'EUR').toFixed(4));
      });
    } else {
      console.log('Network response was not ok.');
    }
  })
  .catch((error) => {
    console.log(`There has been a problem with your fetch operation: ${error.message}`);
  });
}

function bootstrap() {
  getData();
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
