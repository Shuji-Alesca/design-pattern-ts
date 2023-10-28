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

/***/ "./DayState.ts":
/*!*********************!*\
  !*** ./DayState.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.DayState = void 0;\nconst NightState_1 = __webpack_require__(/*! ./NightState */ \"./NightState.ts\");\nclass DayState {\n    constructor() { }\n    static getInstance() {\n        return this.singleton;\n    }\n    doClock(context, hour) {\n        if (hour < 9 || hour >= 17) {\n            context.changeState(NightState_1.NightState.getInstance());\n        }\n    }\n    doUse(context) {\n        context.recordLog('金庫使用(昼間)\\n');\n    }\n    doAlarm(context) {\n        context.callSecurityCenter('非常ベル(昼間)');\n    }\n    doPhone(context) {\n        context.callSecurityCenter('通常の通話(昼間)');\n    }\n    toString() {\n        return '昼間';\n    }\n}\nexports.DayState = DayState;\nDayState.singleton = new DayState();\n\n\n//# sourceURL=webpack://19state/./DayState.ts?");

/***/ }),

/***/ "./NightState.ts":
/*!***********************!*\
  !*** ./NightState.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.NightState = void 0;\nconst DayState_1 = __webpack_require__(/*! ./DayState */ \"./DayState.ts\");\nclass NightState {\n    constructor() { }\n    static getInstance() {\n        return this.singleton;\n    }\n    doClock(context, hour) {\n        if (hour >= 9 && hour < 17) {\n            context.changeState(DayState_1.DayState.getInstance());\n        }\n    }\n    doUse(context) {\n        context.recordLog('非常:夜間の金庫使用!\\n');\n    }\n    doAlarm(context) {\n        context.callSecurityCenter('非常ベル(夜間)');\n    }\n    doPhone(context) {\n        context.callSecurityCenter('夜間の通話録音');\n    }\n    toString() {\n        return '夜間';\n    }\n}\nexports.NightState = NightState;\nNightState.singleton = new NightState();\n\n\n//# sourceURL=webpack://19state/./NightState.ts?");

/***/ }),

/***/ "./SafeFrame.ts":
/*!**********************!*\
  !*** ./SafeFrame.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.SafeFrame = void 0;\nconst DayState_1 = __webpack_require__(/*! ./DayState */ \"./DayState.ts\");\nclass SafeFrame {\n    constructor(title) {\n        this.state = DayState_1.DayState.getInstance();\n        this.textClock = document.createElement('div');\n        this.textClock.setAttribute('cols', '60');\n        this.textScreen = document.createElement('textarea');\n        this.textScreen.setAttribute('rows', '10');\n        this.textScreen.setAttribute('cols', '60');\n        this.textScreen.setAttribute('disabled', 'true');\n        this.buttonUse = document.createElement('button');\n        this.buttonUse.textContent = '金庫使用';\n        this.buttonUse.setAttribute('type', 'button');\n        this.buttonUse.addEventListener('click', () => { this.state.doUse(this); });\n        this.buttonAlarm = document.createElement('button');\n        this.buttonAlarm.textContent = '非常ベル';\n        this.buttonAlarm.setAttribute('type', 'button');\n        this.buttonAlarm.addEventListener('click', () => { this.state.doAlarm(this); });\n        this.buttonPhone = document.createElement('button');\n        this.buttonPhone.textContent = '通常通話';\n        this.buttonPhone.setAttribute('type', 'button');\n        this.buttonPhone.addEventListener('click', () => { this.state.doPhone(this); });\n        this.buttonExit = document.createElement('button');\n        this.buttonExit.textContent = '終了';\n        this.buttonExit.setAttribute('type', 'button');\n        this.buttonExit.addEventListener('click', () => { window.location.reload(); });\n        const titleElement = document.getElementById('title');\n        if (titleElement != null)\n            titleElement.textContent = title;\n        const form = document.getElementById('Form');\n        if (form != null) {\n            form.appendChild(this.textClock);\n            form.appendChild(this.textScreen);\n            form.appendChild(this.buttonUse);\n            form.appendChild(this.buttonAlarm);\n            form.appendChild(this.buttonPhone);\n            form.appendChild(this.buttonExit);\n        }\n    }\n    setClock(hour) {\n        const clockstring = `現在時刻は${('00' + hour).slice(-2)}:00`;\n        console.log(clockstring);\n        this.textClock.textContent = clockstring;\n        this.state.doClock(this, hour);\n    }\n    changeState(state) {\n        console.log(`${this.state.toString()}から${state.toString()}へ状態が変化しました`);\n        this.state = state;\n    }\n    callSecurityCenter(msg) {\n        const textScreen = this.textScreen;\n        if (textScreen != null) {\n            textScreen.textContent += `call!: ${msg} \\n`;\n        }\n    }\n    recordLog(msg) {\n        const textScreen = this.textScreen;\n        if (textScreen != null) {\n            textScreen.textContent += msg;\n        }\n    }\n}\nexports.SafeFrame = SafeFrame;\n\n\n//# sourceURL=webpack://19state/./SafeFrame.ts?");

/***/ }),

/***/ "./main.ts":
/*!*****************!*\
  !*** ./main.ts ***!
  \*****************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst SafeFrame_1 = __webpack_require__(/*! ./SafeFrame */ \"./SafeFrame.ts\");\nwindow.onload = () => __awaiter(void 0, void 0, void 0, function* () {\n    // eslint-disable-next-line no-new\n    const frame = new SafeFrame_1.SafeFrame('State Pattern');\n    const sleep = (ms) => __awaiter(void 0, void 0, void 0, function* () { yield new Promise(resolve => setTimeout(resolve, ms)); });\n    while (true) {\n        for (let hour = 0; hour < 24; hour++) {\n            frame.setClock(hour);\n            yield sleep(1000);\n        }\n    }\n});\n\n\n//# sourceURL=webpack://19state/./main.ts?");

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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./main.ts");
/******/ 	
/******/ })()
;