/* eslint no-undef: "error" */
/* eslint-env browser */

import './css/global.css';
import log from './modules/log';

function  bootstrap() {
  const a = 'Hello 9';
  document.getElementsByTagName('h1')[0].innerHTML = a;

  setTimeout(() => {
    log();
  }, 500);
}

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
