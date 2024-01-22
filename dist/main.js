/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/dropdown.js":
/*!*************************!*\
  !*** ./src/dropdown.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   initDropdown: () => (/* binding */ initDropdown)\n/* harmony export */ });\nfunction initDropdown(dropdownId){\n    const toggleButton = document.querySelector(`[data-dropdown-id=\"${dropdownId}\"]`)\n    const dropdownMenu = document.getElementById(dropdownId)\n\n    if (toggleButton && dropdownMenu){\n        toggleButton.addEventListener('click', () => toggleDropdown(dropdownMenu))\n        toggleButton.addEventListener('mouseenter', () => toggleDropdown(dropdownMenu, true))\n\n        const dropdownContainer = document.querySelector('.dropdown-container')\n        dropdownContainer.addEventListener('mouseleave', () => toggleDropdown(dropdownMenu, false))\n    }\n}\n\nfunction toggleDropdown (dropdownMenu, show){\n    if(show === undefined){\n        show = !dropdownMenu.style.display || dropdownMenu.style.display === 'none'\n    }\n\n    dropdownMenu.style.display = show ? 'block' : 'none'\n}\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/dropdown.js?");

/***/ }),

/***/ "./src/imageSlider.js":
/*!****************************!*\
  !*** ./src/imageSlider.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createDots: () => (/* binding */ createDots),\n/* harmony export */   nextSlide: () => (/* binding */ nextSlide),\n/* harmony export */   prevSlide: () => (/* binding */ prevSlide)\n/* harmony export */ });\nlet currentSlide = 0\n\nfunction showSlide (index){\n    const slides = document.querySelector('.slides')\n    const slideWidth = document.querySelector('.slide').offsetWidth\n    slides.style.transform = `translateX(-${index * slideWidth}px)`;\n\n    currentSlide = index\n    updateDots()\n}\n\nfunction nextSlide (){\n    const totalSlides = document.querySelectorAll('.slide').length\n    currentSlide = (currentSlide + 1 ) % totalSlides\n    showSlide(currentSlide)\n}\n\nfunction prevSlide (){\n    const totalSlides = document.querySelectorAll('.slide').length\n    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides\n    showSlide(currentSlide)\n}\n\nfunction createDots (){\n    const navigation = document.getElementById('navDots')\n    const totalSlides = document.querySelectorAll('.slide').length\n\n    for(let i = 0; i < totalSlides; i++){\n        const dot = document.createElement('div')\n        dot.className = 'dot'\n        dot.addEventListener('click',() => showSlide(i))\n        navigation.appendChild(dot)\n    }\n\n    updateDots()\n}\n\nfunction updateDots (){\n    const dots = document.querySelectorAll('.dot')\n    dots.forEach((dot, index) => {\n        index === currentSlide\n        ? dot.style.backgroundColor = '#333'\n        : dot.style.backgroundColor = '#bbb'\n    })\n}\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/imageSlider.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _dropdown__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dropdown */ \"./src/dropdown.js\");\n/* harmony import */ var _imageSlider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./imageSlider */ \"./src/imageSlider.js\");\n\n\n\n(0,_dropdown__WEBPACK_IMPORTED_MODULE_0__.initDropdown)('menu1')\n\nconst prev = document.querySelector('.left')\nconst next = document.querySelector('.right')\n\nprev.addEventListener('click', _imageSlider__WEBPACK_IMPORTED_MODULE_1__.prevSlide)\nnext.addEventListener('click', _imageSlider__WEBPACK_IMPORTED_MODULE_1__.nextSlide)\n\n;(0,_imageSlider__WEBPACK_IMPORTED_MODULE_1__.createDots)()\nsetInterval(_imageSlider__WEBPACK_IMPORTED_MODULE_1__.nextSlide, 5000)\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;