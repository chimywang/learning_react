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
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	document.write(`<img src="${__webpack_require__(1)}" alt="Counter"/>`);


/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,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"

/***/ }
/******/ ]);