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

/***/ "./ColleagueButton.ts":
/*!****************************!*\
  !*** ./ColleagueButton.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.ColleagueButton = void 0;\nclass ColleagueButton {\n    constructor(caption) {\n        var _a;\n        this.mediator = null;\n        this.button = document.createElement('button');\n        this.button.textContent = caption;\n        this.button.addEventListener('click', () => { var _a; (_a = this.mediator) === null || _a === void 0 ? void 0 : _a.colleagueChanged(); });\n        (_a = document.getElementById('loginForm')) === null || _a === void 0 ? void 0 : _a.appendChild(this.button);\n    }\n    setMediator(mediator) {\n        this.mediator = mediator;\n    }\n    setColleagueEnabled(enabled) {\n        this.button.disabled = !enabled;\n    }\n}\nexports.ColleagueButton = ColleagueButton;\n\n\n//# sourceURL=webpack://16mediator/./ColleagueButton.ts?");

/***/ }),

/***/ "./ColleagueCheckbox.ts":
/*!******************************!*\
  !*** ./ColleagueCheckbox.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.ColleagueCheckbox = void 0;\nclass ColleagueCheckbox {\n    constructor(caption, group, state) {\n        var _a, _b;\n        this.mediator = null;\n        this.checkbox = document.createElement('input');\n        this.checkbox.type = 'checkbox';\n        this.checkbox.name = group;\n        this.checkbox.checked = state;\n        this.checkbox.id = caption; // ラベルと関連付けるためにidを設定\n        // ラベル要素を作成\n        const label = document.createElement('label');\n        label.htmlFor = caption;\n        label.textContent = caption;\n        // チェックボックスとラベルをDOMに追加（ここではbodyに追加）\n        (_a = document.getElementById('loginForm')) === null || _a === void 0 ? void 0 : _a.appendChild(this.checkbox);\n        (_b = document.getElementById('loginForm')) === null || _b === void 0 ? void 0 : _b.appendChild(label);\n        this.checkbox.addEventListener('change', () => { var _a; return (_a = this.mediator) === null || _a === void 0 ? void 0 : _a.colleagueChanged(); });\n    }\n    setMediator(mediator) {\n        this.mediator = mediator;\n    }\n    setColleagueEnabled(enabled) {\n        this.checkbox.disabled = !enabled;\n    }\n}\nexports.ColleagueCheckbox = ColleagueCheckbox;\n\n\n//# sourceURL=webpack://16mediator/./ColleagueCheckbox.ts?");

/***/ }),

/***/ "./ColleagueTextField.ts":
/*!*******************************!*\
  !*** ./ColleagueTextField.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.ColleagueTextField = void 0;\nclass ColleagueTextField {\n    constructor(text, columns) {\n        var _a;\n        this.mediator = null;\n        this.textField = document.createElement('input');\n        this.textField.type = 'text';\n        this.textField.value = text;\n        this.textField.size = columns;\n        this.textField.addEventListener('input', () => { var _a; (_a = this.mediator) === null || _a === void 0 ? void 0 : _a.colleagueChanged(); });\n        (_a = document.getElementById('loginForm')) === null || _a === void 0 ? void 0 : _a.appendChild(this.textField);\n    }\n    setMediator(mediator) {\n        this.mediator = mediator;\n    }\n    setColleagueEnabled(enabled) {\n        this.textField.disabled = !enabled;\n        // 無効化されたテキストフィールドの背景色を変更\n        this.textField.style.backgroundColor = enabled ? 'white' : 'lightgray';\n    }\n}\nexports.ColleagueTextField = ColleagueTextField;\n\n\n//# sourceURL=webpack://16mediator/./ColleagueTextField.ts?");

/***/ }),

/***/ "./LoginForm.ts":
/*!**********************!*\
  !*** ./LoginForm.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.LoginForm = void 0;\nconst ColleagueButton_1 = __webpack_require__(/*! ./ColleagueButton */ \"./ColleagueButton.ts\");\nconst ColleagueCheckbox_1 = __webpack_require__(/*! ./ColleagueCheckbox */ \"./ColleagueCheckbox.ts\");\nconst ColleagueTextField_1 = __webpack_require__(/*! ./ColleagueTextField */ \"./ColleagueTextField.ts\");\nclass LoginForm {\n    constructor() {\n        // this.usernameInput = document.getElementById('username') as HTMLInputElement\n        // this.passwordInput = document.getElementById('password') as HTMLInputElement\n        this.createColleagues();\n    }\n    createColleagues() {\n        const buttonOK = new ColleagueButton_1.ColleagueButton('OK');\n        const textUser = new ColleagueTextField_1.ColleagueTextField('', 10);\n        const textPass = new ColleagueTextField_1.ColleagueTextField('', 10);\n        const checkGuest = new ColleagueCheckbox_1.ColleagueCheckbox('Guest', 'g', true);\n        const checkLogin = new ColleagueCheckbox_1.ColleagueCheckbox('Login', 'g', false);\n        buttonOK.setMediator(this);\n        textUser.setMediator(this);\n        textPass.setMediator(this);\n        checkGuest.setMediator(this);\n        checkLogin.setMediator(this);\n    }\n    colleagueChanged() {\n        // フォームの有効/無効を切り替えるロジックをここに書く\n        console.log('colleague changed');\n    }\n}\nexports.LoginForm = LoginForm;\n\n\n//# sourceURL=webpack://16mediator/./LoginForm.ts?");

/***/ }),

/***/ "./main.ts":
/*!*****************!*\
  !*** ./main.ts ***!
  \*****************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst LoginForm_1 = __webpack_require__(/*! ./LoginForm */ \"./LoginForm.ts\");\nwindow.onload = () => {\n    const loginForm = new LoginForm_1.LoginForm();\n    console.log(loginForm);\n};\n\n\n//# sourceURL=webpack://16mediator/./main.ts?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./main.ts");
/******/ 	
/******/ })()
;