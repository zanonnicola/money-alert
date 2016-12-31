/* eslint no-undef: "error" */
/* eslint-env browser */

import './css/global.css';
import { log } from './modules/log';

const elOutput = document.querySelector('#output');
const el = document.querySelector('#load');
const a = 'Hello 9';

function loadJSON(evt) {
  evt.preventDefault();
  System.import('./modules/extra').then((module) => {
    const extra = module.default;
    elOutput.innerHTML = extra().title;
  });
}

function bootstrap() {
  document.getElementsByTagName('h1')[0].innerHTML = a;
  el.addEventListener('click', loadJSON);

  setTimeout(() => {
    log();
  }, 500);
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
