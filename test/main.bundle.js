/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/* unknown exports provided */
/* all exports used */
/*!*********************!*\
  !*** ./app.test.js ***!
  \*********************/
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

var _chai = __webpack_require__(/*! chai */ 3);

var _chai2 = _interopRequireDefault(_chai);

var _convertCurrency = __webpack_require__(/*! ../src/modules/convertCurrency */ 2);

var _convertCurrency2 = _interopRequireDefault(_convertCurrency);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// const assert = chai.assert;

describe('App.js', function () {
  describe('#convertCurrency()', function () {
    it('should exist', function () {
      _chai2.default.should().exist(_convertCurrency2.default);
    });
    it('should return an integer', function () {
      var mockData = {
        base: 'EUR',
        date: '2016-12-30',
        rates: {
          AUD: 1.4596,
          BGN: 1.9558
        }
      };
      (0, _chai.expect)((0, _convertCurrency2.default)(mockData, 'AUD', 'BGN')).to.be.a('number');
    });
  });
});
// import sinon, { stub } from 'sinon';

/***/ },
/* 1 */
/* unknown exports provided */
/* all exports used */
/*!*********************************!*\
  !*** external "babel-polyfill" ***!
  \*********************************/
/***/ function(module, exports) {

module.exports = require("babel-polyfill");

/***/ },
/* 2 */
/* unknown exports provided */
/* all exports used */
/*!*****************************************!*\
  !*** ../src/modules/convertCurrency.js ***!
  \*****************************************/
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var cov_6572logyb = function () {
  var path = '/Users/nicolazanon/Dropbox/repos/money-alert/src/modules/convertCurrency.js',
      hash = '8e70204b97d1062bcb7a33ad0de081fc17dce56f',
      global = new Function('return this')(),
      gcv = '__coverage__',
      coverageData = {
    path: '/Users/nicolazanon/Dropbox/repos/money-alert/src/modules/convertCurrency.js',
    statementMap: {
      '0': {
        start: {
          line: 4,
          column: 2
        },
        end: {
          line: 6,
          column: 3
        }
      },
      '1': {
        start: {
          line: 5,
          column: 4
        },
        end: {
          line: 5,
          column: 73
        }
      },
      '2': {
        start: {
          line: 7,
          column: 2
        },
        end: {
          line: 7,
          column: 21
        }
      },
      '3': {
        start: {
          line: 8,
          column: 2
        },
        end: {
          line: 8,
          column: 27
        }
      },
      '4': {
        start: {
          line: 9,
          column: 15
        },
        end: {
          line: 9,
          column: 47
        }
      },
      '5': {
        start: {
          line: 10,
          column: 2
        },
        end: {
          line: 10,
          column: 14
        }
      }
    },
    fnMap: {
      '0': {
        name: 'convertCurrency',
        decl: {
          start: {
            line: 3,
            column: 9
          },
          end: {
            line: 3,
            column: 24
          }
        },
        loc: {
          start: {
            line: 3,
            column: 54
          },
          end: {
            line: 11,
            column: 1
          }
        }
      }
    },
    branchMap: {
      '0': {
        loc: {
          start: {
            line: 3,
            column: 41
          },
          end: {
            line: 3,
            column: 52
          }
        },
        type: 'default-arg',
        locations: [{
          start: {
            line: 3,
            column: 51
          },
          end: {
            line: 3,
            column: 52
          }
        }]
      },
      '1': {
        loc: {
          start: {
            line: 4,
            column: 2
          },
          end: {
            line: 6,
            column: 3
          }
        },
        type: 'if',
        locations: [{
          start: {
            line: 4,
            column: 2
          },
          end: {
            line: 6,
            column: 3
          }
        }, {
          start: {
            line: 4,
            column: 2
          },
          end: {
            line: 6,
            column: 3
          }
        }]
      }
    },
    s: {
      '0': 0,
      '1': 0,
      '2': 0,
      '3': 0,
      '4': 0,
      '5': 0
    },
    f: {
      '0': 0
    },
    b: {
      '0': [0],
      '1': [0, 0]
    },
    _coverageSchema: '332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'
  },
      coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  coverageData.hash = hash;
  return coverage[path] = coverageData;
}();

var _money = __webpack_require__(/*! money */ 4);

var _money2 = _interopRequireDefault(_money);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function convertCurrency(data, from, to) {
  var ammount = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : (++cov_6572logyb.b[0][0], 1);
  ++cov_6572logyb.f[0];
  ++cov_6572logyb.s[0];

  if (typeof ammount !== 'number') {
    ++cov_6572logyb.b[1][0];
    ++cov_6572logyb.s[1];

    throw new Error('Illegal argument: ' + ammount + ' should be an integer');
  } else {
    ++cov_6572logyb.b[1][1];
  }
  ++cov_6572logyb.s[2];
  _money2.default.base = 'EUR';
  ++cov_6572logyb.s[3];
  _money2.default.rates = data.rates;
  var rate = (++cov_6572logyb.s[4], (0, _money2.default)(ammount).from(from).to(to));
  ++cov_6572logyb.s[5];
  return rate;
}

exports.default = convertCurrency;

/***/ },
/* 3 */
/* unknown exports provided */
/* all exports used */
/*!***********************!*\
  !*** external "chai" ***!
  \***********************/
/***/ function(module, exports) {

module.exports = require("chai");

/***/ },
/* 4 */
/* unknown exports provided */
/* all exports used */
/*!************************!*\
  !*** external "money" ***!
  \************************/
/***/ function(module, exports) {

module.exports = require("money");

/***/ },
/* 5 */
/* unknown exports provided */
/* all exports used */
/*!******************!*\
  !*** multi main ***!
  \******************/
/***/ function(module, exports, __webpack_require__) {

__webpack_require__(/*! babel-polyfill */1);
module.exports = __webpack_require__(/*! ./app.test.js */0);


/***/ }
/******/ ]);