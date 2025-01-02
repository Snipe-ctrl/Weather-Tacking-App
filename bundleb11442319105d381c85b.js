/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/sass/style.scss":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/sass/style.scss ***!
  \**********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.zip-date-container {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 100px;
}

.zip-input {
  cursor: text;
  border-radius: 5px;
  border: 1.5px solid rgb(65, 57, 57);
  height: 30px;
  width: 220px;
  font-size: 14px;
  box-shadow: rgba(119, 122, 175, 0.3) 0px 1px 4px 0px inset;
  color: rgb(35, 38, 59);
  background-color: rgb(255, 255, 255);
  overflow: hidden;
  padding-left: 10px;
  margin-right: 15px;
  transition: 100ms ease-in-out;
}
.zip-input:hover {
  box-shadow: 0 1px 0 0 rgba(29, 31, 45, 0.05);
  outline: none;
  border: 1.5px solid #959595;
}
.zip-input:focus {
  border: 1.5px solid #3792d8;
  outline: none;
}
.zip-input::placeholder {
  padding-left: 20px;
}

.enter-button {
  cursor: pointer;
  background-color: #0A66C2;
  color: white;
  border: 0;
  border-radius: 100px;
  height: 25px;
  width: 70px;
  font-size: 12px;
  line-height: 20px;
}
.enter-button:hover {
  background-color: #2480dd;
}

body {
  background-color: #323547;
  font-family: "Poppins", sans-serif;
}

.main-card-container {
  display: flex;
  align-items: start;
  justify-content: center;
  overflow: hidden;
}
.main-card-container .main-card {
  position: relative;
  display: flex;
  background-color: #ffffff;
  margin-top: 40px;
  padding-top: 20px;
  border-radius: 20px;
  width: 50%;
  height: 400px;
  justify-content: space-between;
}

.hours-container {
  display: flex;
  position: absolute;
  bottom: 0;
  justify-content: start;
  align-items: center;
  width: 100%;
  overflow: hidden;
}

.hour-container-1 {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 20px 20px 20px;
  width: 70px;
}

.hour {
  padding: 0px 0px 0px 0px;
  margin: 0px 0px 0px 0px;
  font-size: 14px;
}

.hour-svg {
  padding: 7px 0px 7px 0px;
}

.temp {
  padding: 0px 0px 0px 0px;
  margin: 0px 0px 0px 0px;
}

.line {
  width: 1px;
  height: 120px;
  background-color: gray;
}

.temp-container {
  display: flex;
  justify-content: start;
  align-items: center;
  flex-direction: column;
  width: 300px;
  height: 500px;
}

.temp-text-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5px 20px 0px 20px;
  height: 130px;
}

.high-low-container {
  display: flex;
  align-items: center;
}
.high-low-container .max {
  font-size: 18px;
  padding: 5px 10px 0px 10px;
  margin: 0;
}

#current-temp {
  font-family: "Poppins", sans-serif;
  font-size: 20px;
  padding: 0;
  margin: 0;
}

.temperature {
  font-family: "Poppins", sans-serif;
  color: #323547;
  font-size: 70px;
  padding-top: 8px;
  margin: 0;
}

.temp-svg {
  fill: #323547;
  width: 150px;
  height: 130px;
}

.stats-container {
  width: 420px;
  overflow: hidden;
  margin-left: auto;
}

.stat-div {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 40px;
}

.stats-text {
  padding: 0px 0px 0px 16px;
  margin: 0px 0px 0px 0px;
}

.stat-right-side {
  display: flex;
  align-items: center;
}

.stat-number {
  margin: 0px 0px 0px 0px;
}

.stats-icon {
  width: 40px;
  height: 40px;
  margin: 0px 20px 0px 0px;
  padding-left: 10px;
}

#humidity-icon {
  width: 30px;
  height: 30px;
  margin-right: 25px;
  padding-left: 16px;
}

#visibility-icon {
  width: 30px;
  height: 30px;
  margin-right: 25px;
  padding-left: 16px;
}

#feels-like-icon {
  width: 30px;
  height: 30px;
  margin-right: 25px;
  padding-left: 14px;
}

#uv-index-icon {
  width: 35px;
  height: 35px;
  margin-right: 23px;
  padding-left: 12px;
}

#moon-phase-icon {
  width: 28px;
  height: 28px;
  margin-right: 27px;
  padding-left: 16px;
}

.stats-line {
  height: 1px;
  width: 400px;
  background-color: gray;
  overflow: hidden;
  margin: 0;
}`, "",{"version":3,"sources":["webpack://./src/sass/components/zipcode.scss","webpack://./src/sass/style.scss","webpack://./src/sass/components/boilerplate.scss","webpack://./src/sass/components/main-card.scss","webpack://./src/sass/components/hour-display.scss","webpack://./src/sass/components/current-temp.scss","webpack://./src/sass/components/stats.scss"],"names":[],"mappings":"AAAA;EACI,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,kBAAA;ACCJ;;ADEA;EACI,YAAA;EACA,kBAAA;EACA,mCAAA;EACA,YAAA;EACA,YAAA;EACA,eAAA;EACA,0DAAA;EACA,sBAAA;EACA,oCAAA;EACA,gBAAA;EACA,kBAAA;EACA,kBAAA;EACA,6BAAA;ACCJ;ADCI;EACI,4CAAA;EACA,aAAA;EACA,2BAAA;ACCR;ADEI;EACI,2BAAA;EACA,aAAA;ACAR;ADGI;EACI,kBAAA;ACDR;;ADMA;EACI,eAAA;EACA,yBAAA;EACA,YAAA;EACA,SAAA;EACA,oBAAA;EACA,YAAA;EACA,WAAA;EACA,eAAA;EACA,iBAAA;ACHJ;ADKI;EACI,yBAAA;ACHR;;AChDA;EACI,yBAAA;EACA,kCAAA;ADmDJ;;AErDA;EACI,aAAA;EACA,kBAAA;EACA,uBAAA;EACA,gBAAA;AFwDJ;AEtDI;EACI,kBAAA;EACA,aAAA;EACA,yBAAA;EACA,gBAAA;EACA,iBAAA;EACA,mBAAA;EACA,UAAA;EACA,aAAA;EACA,8BAAA;AFwDR;;AGvEA;EACI,aAAA;EACA,kBAAA;EACA,SAAA;EACA,sBAAA;EACA,mBAAA;EACA,WAAA;EACA,gBAAA;AH0EJ;;AGvEA;EACI,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,4BAAA;EACA,WAAA;AH0EJ;;AGvEA;EACI,wBAAA;EACA,uBAAA;EACA,eAAA;AH0EJ;;AGvEA;EACI,wBAAA;AH0EJ;;AGvEA;EACI,wBAAA;EACA,uBAAA;AH0EJ;;AGvEA;EACI,UAAA;EACA,aAAA;EACA,sBAAA;AH0EJ;;AI9GA;EACI,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,sBAAA;EACA,YAAA;EACA,aAAA;AJiHJ;;AI9GA;EACI,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,0BAAA;EACA,aAAA;AJiHJ;;AI9GA;EACI,aAAA;EACA,mBAAA;AJiHJ;AI/GI;EACI,eAAA;EACA,0BAAA;EACA,SAAA;AJiHR;;AI7GA;EACI,kCAAA;EACA,eAAA;EACA,UAAA;EACA,SAAA;AJgHJ;;AI7GA;EACI,kCAAA;EACA,cAAA;EACA,eAAA;EACA,gBAAA;EACA,SAAA;AJgHJ;;AI7GA;EACI,aAAA;EACA,YAAA;EACA,aAAA;AJgHJ;;AK9JA;EACI,YAAA;EACA,gBAAA;EACA,iBAAA;ALiKJ;;AK9JA;EACI,aAAA;EACA,8BAAA;EACA,mBAAA;EACA,YAAA;ALiKJ;;AK9JA;EACI,yBAAA;EACA,uBAAA;ALiKJ;;AK9JA;EACQ,aAAA;EACA,mBAAA;ALiKR;;AK9JA;EACI,uBAAA;ALiKJ;;AK9JA;EACI,WAAA;EACA,YAAA;EACA,wBAAA;EACA,kBAAA;ALiKJ;;AK9JA;EACI,WAAA;EACA,YAAA;EACA,kBAAA;EACA,kBAAA;ALiKJ;;AK9JA;EACI,WAAA;EACA,YAAA;EACA,kBAAA;EACA,kBAAA;ALiKJ;;AK9JA;EACI,WAAA;EACA,YAAA;EACA,kBAAA;EACA,kBAAA;ALiKJ;;AK9JA;EACI,WAAA;EACA,YAAA;EACA,kBAAA;EACA,kBAAA;ALiKJ;;AK9JA;EACI,WAAA;EACA,YAAA;EACA,kBAAA;EACA,kBAAA;ALiKJ;;AK9JA;EACI,WAAA;EACA,YAAA;EACA,sBAAA;EACA,gBAAA;EACA,SAAA;ALiKJ","sourcesContent":[".zip-date-container {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    padding-top: 100px;\n}\n\n.zip-input {\n    cursor: text;\n    border-radius: 5px;\n    border: 1.5px solid rgb(65, 57, 57);\n    height: 30px;\n    width: 220px;\n    font-size: 14px;\n    box-shadow: rgba(119, 122, 175, 0.3) 0px 1px 4px 0px inset;\n    color: rgb(35, 38, 59);\n    background-color: rgb(255, 255, 255);\n    overflow: hidden;\n    padding-left: 10px;\n    margin-right: 15px;\n    transition: 100ms ease-in-out;\n\n    &:hover {\n        box-shadow: 0 1px 0 0 rgba(29, 31, 45, 0.05);\n        outline: none;\n        border: 1.5px solid #959595;\n    }\n\n    &:focus {\n        border: 1.5px solid #3792d8;;\n        outline: none;\n    }\n\n    &::placeholder {\n        padding-left: 20px;\n    }\n\n}\n\n.enter-button {\n    cursor: pointer;\n    background-color: #0A66C2;\n    color: white;\n    border: 0;\n    border-radius: 100px;\n    height: 25px;\n    width: 70px;\n    font-size: 12px;\n    line-height: 20px;\n\n    &:hover {\n        background-color: #2480dd;\n    }\n}",".zip-date-container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding-top: 100px;\n}\n\n.zip-input {\n  cursor: text;\n  border-radius: 5px;\n  border: 1.5px solid rgb(65, 57, 57);\n  height: 30px;\n  width: 220px;\n  font-size: 14px;\n  box-shadow: rgba(119, 122, 175, 0.3) 0px 1px 4px 0px inset;\n  color: rgb(35, 38, 59);\n  background-color: rgb(255, 255, 255);\n  overflow: hidden;\n  padding-left: 10px;\n  margin-right: 15px;\n  transition: 100ms ease-in-out;\n}\n.zip-input:hover {\n  box-shadow: 0 1px 0 0 rgba(29, 31, 45, 0.05);\n  outline: none;\n  border: 1.5px solid #959595;\n}\n.zip-input:focus {\n  border: 1.5px solid #3792d8;\n  outline: none;\n}\n.zip-input::placeholder {\n  padding-left: 20px;\n}\n\n.enter-button {\n  cursor: pointer;\n  background-color: #0A66C2;\n  color: white;\n  border: 0;\n  border-radius: 100px;\n  height: 25px;\n  width: 70px;\n  font-size: 12px;\n  line-height: 20px;\n}\n.enter-button:hover {\n  background-color: #2480dd;\n}\n\nbody {\n  background-color: #323547;\n  font-family: \"Poppins\", sans-serif;\n}\n\n.main-card-container {\n  display: flex;\n  align-items: start;\n  justify-content: center;\n  overflow: hidden;\n}\n.main-card-container .main-card {\n  position: relative;\n  display: flex;\n  background-color: #ffffff;\n  margin-top: 40px;\n  padding-top: 20px;\n  border-radius: 20px;\n  width: 50%;\n  height: 400px;\n  justify-content: space-between;\n}\n\n.hours-container {\n  display: flex;\n  position: absolute;\n  bottom: 0;\n  justify-content: start;\n  align-items: center;\n  width: 100%;\n  overflow: hidden;\n}\n\n.hour-container-1 {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 20px 20px 20px 20px;\n  width: 70px;\n}\n\n.hour {\n  padding: 0px 0px 0px 0px;\n  margin: 0px 0px 0px 0px;\n  font-size: 14px;\n}\n\n.hour-svg {\n  padding: 7px 0px 7px 0px;\n}\n\n.temp {\n  padding: 0px 0px 0px 0px;\n  margin: 0px 0px 0px 0px;\n}\n\n.line {\n  width: 1px;\n  height: 120px;\n  background-color: gray;\n}\n\n.temp-container {\n  display: flex;\n  justify-content: start;\n  align-items: center;\n  flex-direction: column;\n  width: 300px;\n  height: 500px;\n}\n\n.temp-text-container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 5px 20px 0px 20px;\n  height: 130px;\n}\n\n.high-low-container {\n  display: flex;\n  align-items: center;\n}\n.high-low-container .max {\n  font-size: 18px;\n  padding: 5px 10px 0px 10px;\n  margin: 0;\n}\n\n#current-temp {\n  font-family: \"Poppins\", sans-serif;\n  font-size: 20px;\n  padding: 0;\n  margin: 0;\n}\n\n.temperature {\n  font-family: \"Poppins\", sans-serif;\n  color: #323547;\n  font-size: 70px;\n  padding-top: 8px;\n  margin: 0;\n}\n\n.temp-svg {\n  fill: #323547;\n  width: 150px;\n  height: 130px;\n}\n\n.stats-container {\n  width: 420px;\n  overflow: hidden;\n  margin-left: auto;\n}\n\n.stat-div {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  height: 40px;\n}\n\n.stats-text {\n  padding: 0px 0px 0px 16px;\n  margin: 0px 0px 0px 0px;\n}\n\n.stat-right-side {\n  display: flex;\n  align-items: center;\n}\n\n.stat-number {\n  margin: 0px 0px 0px 0px;\n}\n\n.stats-icon {\n  width: 40px;\n  height: 40px;\n  margin: 0px 20px 0px 0px;\n  padding-left: 10px;\n}\n\n#humidity-icon {\n  width: 30px;\n  height: 30px;\n  margin-right: 25px;\n  padding-left: 16px;\n}\n\n#visibility-icon {\n  width: 30px;\n  height: 30px;\n  margin-right: 25px;\n  padding-left: 16px;\n}\n\n#feels-like-icon {\n  width: 30px;\n  height: 30px;\n  margin-right: 25px;\n  padding-left: 14px;\n}\n\n#uv-index-icon {\n  width: 35px;\n  height: 35px;\n  margin-right: 23px;\n  padding-left: 12px;\n}\n\n#moon-phase-icon {\n  width: 28px;\n  height: 28px;\n  margin-right: 27px;\n  padding-left: 16px;\n}\n\n.stats-line {\n  height: 1px;\n  width: 400px;\n  background-color: gray;\n  overflow: hidden;\n  margin: 0;\n}","body {\n    background-color: #323547;\n    font-family: 'Poppins', sans-serif;\n}\n\n",".main-card-container {\n    display: flex;\n    align-items: start;\n    justify-content: center;\n    overflow: hidden;\n\n    .main-card {\n        position: relative;\n        display: flex;\n        background-color: #ffffff;\n        margin-top: 40px;\n        padding-top: 20px;\n        border-radius: 20px;\n        width: 50%;\n        height: 400px;\n        justify-content: space-between;\n    }\n}\n",".hours-container {\n    display: flex;\n    position: absolute;\n    bottom: 0;\n    justify-content: start;\n    align-items: center;\n    width: 100%;\n    overflow: hidden;\n}\n\n.hour-container-1 {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    padding: 20px 20px 20px 20px;\n    width: 70px;\n}\n\n.hour {\n    padding: 0px 0px 0px 0px;\n    margin: 0px 0px 0px 0px;\n    font-size: 14px;\n}\n\n.hour-svg {\n    padding: 7px 0px 7px 0px;\n}\n\n.temp {\n    padding: 0px 0px 0px 0px;\n    margin: 0px 0px 0px 0px;\n}\n\n.line {\n    width: 1px;\n    height: 120px;\n    background-color: gray;\n}\n",".temp-container {\n    display: flex;\n    justify-content: start;\n    align-items: center;\n    flex-direction: column;\n    width: 300px;\n    height: 500px;\n}\n\n.temp-text-container {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    padding: 5px 20px 0px 20px;\n    height: 130px;\n}\n\n.high-low-container {\n    display: flex;\n    align-items: center;\n\n    .max {\n        font-size: 18px;\n        padding: 5px 10px 0px 10px;\n        margin: 0;\n    }\n}\n\n#current-temp {\n    font-family: 'Poppins', sans-serif;\n    font-size: 20px;\n    padding: 0;\n    margin: 0;\n}\n\n.temperature {\n    font-family: 'Poppins', sans-serif; \n    color: #323547;\n    font-size: 70px;\n    padding-top: 8px;\n    margin: 0;\n}\n\n.temp-svg {\n    fill: #323547;\n    width: 150px;\n    height: 130px;\n}\n\n",".stats-container {\n    width: 420px;\n    overflow: hidden;\n    margin-left: auto;\n}\n\n.stat-div {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    height: 40px;\n}\n\n.stats-text {\n    padding: 0px 0px 0px 16px;\n    margin: 0px 0px 0px 0px;\n}\n\n.stat-right-side {\n        display: flex;\n        align-items: center;\n}\n\n.stat-number {\n    margin: 0px 0px 0px 0px;\n}\n\n.stats-icon {\n    width: 40px;\n    height: 40px;\n    margin: 0px 20px 0px 0px;\n    padding-left: 10px;\n}\n\n#humidity-icon {\n    width: 30px;\n    height: 30px;\n    margin-right: 25px;\n    padding-left: 16px;\n}\n\n#visibility-icon {\n    width: 30px;\n    height: 30px;\n    margin-right: 25px;\n    padding-left: 16px;\n}\n\n#feels-like-icon {\n    width: 30px;\n    height: 30px;\n    margin-right: 25px;\n    padding-left: 14px;\n}\n\n#uv-index-icon {\n    width: 35px;\n    height: 35px;\n    margin-right: 23px;\n    padding-left: 12px;\n}\n\n#moon-phase-icon {\n    width: 28px;\n    height: 28px;\n    margin-right: 27px;\n    padding-left: 16px;\n}\n\n.stats-line {\n    height: 1px;\n    width: 400px;\n    background-color: gray;\n    overflow: hidden;\n    margin: 0;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/sass/style.scss":
/*!*****************************!*\
  !*** ./src/sass/style.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/sass/style.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sass_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../sass/style.scss */ "./src/sass/style.scss");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }

function getWeather(_x) {
  return _getWeather.apply(this, arguments);
}
function _getWeather() {
  _getWeather = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(zipCode) {
    var response;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return fetch("http://localhost:5001/weather?zip=".concat(zipCode));
        case 3:
          response = _context2.sent;
          if (response.ok) {
            _context2.next = 6;
            break;
          }
          throw new Error('Failed to fetch weather data');
        case 6:
          _context2.next = 8;
          return response.json();
        case 8:
          return _context2.abrupt("return", _context2.sent);
        case 11:
          _context2.prev = 11;
          _context2.t0 = _context2["catch"](0);
          console.log('Error:', _context2.t0.message);
        case 14:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[0, 11]]);
  }));
  return _getWeather.apply(this, arguments);
}
document.getElementById('enter-button').addEventListener('click', /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
  var zipInput, data, temperatureElement, maxTemp, minTemp, weatherIconHours, mainTempIcon, precip, humidity, visibility, feelsLike, uv, moonPhase, moonIcon, now, hours, hourElements, hourIcons, hourTempElements;
  return _regeneratorRuntime().wrap(function _callee$(_context) {
    while (1) switch (_context.prev = _context.next) {
      case 0:
        zipInput = document.getElementById('zip-input').value.trim();
        console.log("Zip input: ".concat(zipInput));
        _context.next = 4;
        return getWeather(zipInput);
      case 4:
        data = _context.sent;
        if (data) {
          _context.next = 9;
          break;
        }
        console.log('No data returned from the API.');
        alert('Failed to fetch weather data. Please try again.');
        return _context.abrupt("return");
      case 9:
        // sets current temp
        temperatureElement = document.querySelector('.temperature');
        temperatureElement.textContent = "".concat(data.temp, "\xB0");

        // sets min and max temp
        maxTemp = document.getElementById('high');
        maxTemp.textContent = "H: ".concat(data.tempmax, "\xB0");
        minTemp = document.getElementById('low');
        minTemp.textContent = "L: ".concat(data.tempmin, "\xB0");

        // array of svg icons
        weatherIconHours = {
          rain: "<svg version=\"1.1\" class=\"hour-svg\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n        viewBox=\"0 0 30 30\" style=\"enable-background:new 0 0 30 30;\" xml:space=\"preserve\">\n    <path d=\"M4.64,16.91c0-1.15,0.36-2.17,1.08-3.07c0.72-0.9,1.63-1.47,2.73-1.73c0.31-1.36,1.02-2.48,2.11-3.36s2.34-1.31,3.75-1.31\n       c1.38,0,2.6,0.43,3.68,1.28c1.08,0.85,1.78,1.95,2.1,3.29h0.32c0.89,0,1.72,0.22,2.48,0.65s1.37,1.03,1.81,1.78\n       c0.44,0.75,0.67,1.58,0.67,2.47c0,0.88-0.21,1.69-0.63,2.44c-0.42,0.75-1,1.35-1.73,1.8c-0.73,0.45-1.53,0.69-2.4,0.71\n       c-0.13,0-0.2-0.06-0.2-0.17v-1.33c0-0.12,0.07-0.18,0.2-0.18c0.85-0.04,1.58-0.38,2.18-1.02s0.9-1.39,0.9-2.26s-0.33-1.62-0.98-2.26\n       s-1.42-0.96-2.31-0.96h-1.61c-0.12,0-0.18-0.06-0.18-0.17l-0.08-0.58c-0.11-1.08-0.58-1.99-1.39-2.71\n       c-0.82-0.73-1.76-1.09-2.85-1.09c-1.09,0-2.05,0.36-2.85,1.09c-0.81,0.73-1.26,1.63-1.36,2.71l-0.07,0.53c0,0.12-0.07,0.19-0.2,0.19\n       l-0.53,0.03c-0.83,0.1-1.53,0.46-2.1,1.07s-0.85,1.33-0.85,2.16c0,0.87,0.3,1.62,0.9,2.26s1.33,0.98,2.18,1.02\n       c0.11,0,0.17,0.06,0.17,0.18v1.33c0,0.11-0.06,0.17-0.17,0.17c-1.34-0.06-2.47-0.57-3.4-1.53S4.64,18.24,4.64,16.91z M9.99,23.6\n       c0-0.04,0.01-0.11,0.04-0.2l1.63-5.77c0.06-0.19,0.17-0.34,0.32-0.44c0.15-0.1,0.31-0.15,0.46-0.15c0.07,0,0.15,0.01,0.24,0.03\n       c0.24,0.04,0.42,0.17,0.54,0.37c0.12,0.2,0.15,0.42,0.08,0.67l-1.63,5.73c-0.12,0.43-0.4,0.64-0.82,0.64\n       c-0.04,0-0.07-0.01-0.11-0.02c-0.06-0.02-0.09-0.03-0.1-0.03c-0.22-0.06-0.38-0.17-0.49-0.33C10.04,23.93,9.99,23.77,9.99,23.6z\n        M12.61,26.41l2.44-8.77c0.04-0.19,0.14-0.34,0.3-0.44c0.16-0.1,0.32-0.15,0.49-0.15c0.09,0,0.18,0.01,0.27,0.03\n       c0.22,0.06,0.38,0.19,0.49,0.39c0.11,0.2,0.13,0.41,0.07,0.64l-2.43,8.78c-0.04,0.17-0.13,0.31-0.29,0.43\n       c-0.16,0.12-0.32,0.18-0.51,0.18c-0.09,0-0.18-0.02-0.25-0.05c-0.2-0.05-0.37-0.18-0.52-0.39C12.56,26.88,12.54,26.67,12.61,26.41z\n        M16.74,23.62c0-0.04,0.01-0.11,0.04-0.23l1.63-5.77c0.06-0.19,0.16-0.34,0.3-0.44c0.15-0.1,0.3-0.15,0.46-0.15\n       c0.08,0,0.17,0.01,0.26,0.03c0.21,0.06,0.36,0.16,0.46,0.31c0.1,0.15,0.15,0.31,0.15,0.47c0,0.03-0.01,0.08-0.02,0.14\n       s-0.02,0.1-0.02,0.12l-1.63,5.73c-0.04,0.19-0.13,0.35-0.28,0.46s-0.32,0.17-0.51,0.17l-0.24-0.05c-0.2-0.06-0.35-0.16-0.46-0.32\n       C16.79,23.94,16.74,23.78,16.74,23.62z\"/>\n</svg>",
          'clear-day': "<svg version=\"1.1\" class=\"hour-svg\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n\t viewBox=\"0 0 30 30\" style=\"enable-background:new 0 0 30 30;\" xml:space=\"preserve\">\n<path d=\"M1.56,16.9c0,0.9,0.22,1.73,0.66,2.49s1.04,1.36,1.8,1.8c0.76,0.44,1.58,0.66,2.47,0.66h10.83c0.89,0,1.72-0.22,2.48-0.66\n\tc0.76-0.44,1.37-1.04,1.81-1.8c0.44-0.76,0.67-1.59,0.67-2.49c0-0.66-0.14-1.33-0.42-2C22.62,13.98,23,12.87,23,11.6\n\tc0-0.71-0.14-1.39-0.41-2.04c-0.27-0.65-0.65-1.2-1.12-1.67C21,7.42,20.45,7.04,19.8,6.77c-0.65-0.28-1.33-0.41-2.04-0.41\n\tc-1.48,0-2.77,0.58-3.88,1.74c-0.77-0.44-1.67-0.66-2.7-0.66c-1.41,0-2.65,0.44-3.73,1.31c-1.08,0.87-1.78,1.99-2.08,3.35\n\tc-1.12,0.26-2.03,0.83-2.74,1.73S1.56,15.75,1.56,16.9z M3.27,16.9c0-0.84,0.28-1.56,0.84-2.17c0.56-0.61,1.26-0.96,2.1-1.06\n\tl0.5-0.03c0.12,0,0.19-0.06,0.19-0.18l0.07-0.54c0.14-1.08,0.61-1.99,1.41-2.71c0.8-0.73,1.74-1.09,2.81-1.09\n\tc1.1,0,2.06,0.37,2.87,1.1c0.82,0.73,1.27,1.63,1.37,2.71l0.07,0.58c0.02,0.11,0.09,0.17,0.21,0.17h1.61c0.88,0,1.64,0.32,2.28,0.96\n\tc0.64,0.64,0.96,1.39,0.96,2.27c0,0.91-0.32,1.68-0.95,2.32c-0.63,0.64-1.4,0.96-2.28,0.96H6.49c-0.88,0-1.63-0.32-2.27-0.97\n\tC3.59,18.57,3.27,17.8,3.27,16.9z M9.97,4.63c0,0.24,0.08,0.45,0.24,0.63l0.66,0.64c0.25,0.19,0.46,0.27,0.64,0.25\n\tc0.21,0,0.39-0.09,0.55-0.26s0.24-0.38,0.24-0.62c0-0.24-0.09-0.44-0.26-0.59l-0.59-0.66c-0.18-0.16-0.38-0.24-0.61-0.24\n\tc-0.24,0-0.45,0.08-0.62,0.25C10.05,4.19,9.97,4.39,9.97,4.63z M15.31,9.06c0.69-0.67,1.51-1,2.45-1c0.99,0,1.83,0.34,2.52,1.03\n\tc0.69,0.69,1.04,1.52,1.04,2.51c0,0.62-0.17,1.24-0.51,1.84C19.84,12.48,18.68,12,17.32,12H17C16.75,10.91,16.19,9.93,15.31,9.06z\n\t M16.94,3.78c0,0.26,0.08,0.46,0.23,0.62s0.35,0.23,0.59,0.23c0.26,0,0.46-0.08,0.62-0.23c0.16-0.16,0.23-0.36,0.23-0.62V1.73\n\tc0-0.24-0.08-0.43-0.24-0.59s-0.36-0.23-0.61-0.23c-0.24,0-0.43,0.08-0.59,0.23s-0.23,0.35-0.23,0.59V3.78z M22.46,6.07\n\tc0,0.26,0.07,0.46,0.22,0.62c0.21,0.16,0.42,0.24,0.62,0.24c0.18,0,0.38-0.08,0.59-0.24l1.43-1.43c0.16-0.18,0.24-0.39,0.24-0.64\n\tc0-0.24-0.08-0.44-0.24-0.6c-0.16-0.16-0.36-0.24-0.59-0.24c-0.24,0-0.43,0.08-0.58,0.24l-1.47,1.43\n\tC22.53,5.64,22.46,5.84,22.46,6.07z M23.25,17.91c0,0.24,0.08,0.45,0.25,0.63l0.65,0.63c0.15,0.16,0.34,0.24,0.58,0.24\n\ts0.44-0.08,0.6-0.25c0.16-0.17,0.24-0.37,0.24-0.62c0-0.22-0.08-0.42-0.24-0.58l-0.65-0.65c-0.16-0.16-0.35-0.24-0.57-0.24\n\tc-0.24,0-0.44,0.08-0.6,0.24C23.34,17.47,23.25,17.67,23.25,17.91z M24.72,11.6c0,0.23,0.09,0.42,0.26,0.58\n\tc0.16,0.16,0.37,0.24,0.61,0.24h2.04c0.23,0,0.42-0.08,0.58-0.23s0.23-0.35,0.23-0.59c0-0.24-0.08-0.44-0.23-0.6\n\ts-0.35-0.25-0.58-0.25h-2.04c-0.24,0-0.44,0.08-0.61,0.25C24.8,11.17,24.72,11.37,24.72,11.6z\"/>\n</svg>",
          snow: "<svg version=\"1.1\" class=\"hour-svg\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n\t viewBox=\"0 0 30 30\" style=\"enable-background:new 0 0 30 30;\" xml:space=\"preserve\">\n<path d=\"M1.58,16.93c0,0.86,0.21,1.67,0.64,2.41c0.42,0.74,1,1.34,1.74,1.79c0.73,0.45,1.54,0.69,2.4,0.71\n\tc0.11,0,0.17-0.06,0.17-0.17v-1.33c0-0.12-0.06-0.19-0.17-0.19c-0.85-0.04-1.58-0.38-2.18-1.02s-0.9-1.37-0.9-2.21\n\tc0-0.82,0.28-1.54,0.85-2.16c0.57-0.61,1.26-0.97,2.1-1.07l0.53-0.06c0.12,0,0.18-0.06,0.18-0.19l0.08-0.51\n\tc0.11-1.09,0.56-2,1.36-2.73c0.8-0.73,1.75-1.09,2.85-1.09c1.09,0,2.04,0.36,2.85,1.09c0.82,0.73,1.28,1.63,1.38,2.7l0.07,0.58\n\tc0,0.11,0.06,0.17,0.17,0.17h1.61c0.9,0,1.67,0.32,2.31,0.96c0.64,0.64,0.96,1.4,0.96,2.29c0,0.84-0.3,1.57-0.9,2.21\n\tc-0.6,0.63-1.33,0.97-2.17,1.02c-0.12,0-0.19,0.06-0.19,0.19v1.33c0,0.11,0.06,0.17,0.19,0.17c1.33-0.04,2.45-0.54,3.38-1.5\n\tc0.93-0.96,1.39-2.09,1.39-3.41c0-0.76-0.14-1.43-0.43-2.03C22.6,13.95,23,12.85,23,11.6c0-0.94-0.23-1.81-0.7-2.61\n\tc-0.47-0.8-1.11-1.44-1.91-1.91s-1.68-0.7-2.62-0.7c-1.54,0-2.83,0.58-3.87,1.73c-0.81-0.44-1.71-0.66-2.69-0.66\n\tc-1.41,0-2.65,0.44-3.74,1.31s-1.78,1.99-2.09,3.34c-1.12,0.28-2.03,0.86-2.74,1.75C1.93,14.75,1.58,15.77,1.58,16.93z M7.92,20.98\n\tc0,0.24,0.08,0.44,0.24,0.61c0.16,0.17,0.35,0.25,0.59,0.25c0.23,0,0.43-0.08,0.59-0.25c0.16-0.17,0.24-0.37,0.24-0.61\n\tc0-0.23-0.08-0.42-0.24-0.58s-0.35-0.24-0.59-0.24c-0.23,0-0.43,0.08-0.59,0.24S7.92,20.76,7.92,20.98z M7.92,24.61\n\tc0,0.21,0.08,0.4,0.24,0.57c0.18,0.16,0.37,0.24,0.58,0.24c0.24,0,0.43-0.08,0.59-0.23c0.16-0.16,0.23-0.35,0.23-0.58\n\tc0-0.24-0.08-0.43-0.24-0.59c-0.16-0.16-0.35-0.23-0.59-0.23c-0.23,0-0.43,0.08-0.59,0.23C8,24.17,7.92,24.37,7.92,24.61z\n\t M9.97,4.68c0,0.24,0.08,0.44,0.24,0.59l0.66,0.66c0.16,0.16,0.34,0.25,0.53,0.25c0.21,0.03,0.41-0.04,0.61-0.22\n\tc0.2-0.18,0.3-0.39,0.3-0.63c0-0.24-0.08-0.46-0.24-0.64l-0.64-0.61c-0.15-0.17-0.34-0.25-0.58-0.25c-0.25,0-0.46,0.08-0.63,0.25\n\tC10.05,4.24,9.97,4.44,9.97,4.68z M11.1,22.9c0,0.22,0.08,0.42,0.24,0.6c0.16,0.16,0.36,0.24,0.58,0.24c0.24,0,0.44-0.08,0.6-0.24\n\ts0.25-0.36,0.25-0.6c0-0.23-0.08-0.43-0.25-0.6s-0.37-0.25-0.6-0.25c-0.23,0-0.42,0.08-0.58,0.25S11.1,22.67,11.1,22.9z M11.1,19.3\n\tc0,0.23,0.08,0.42,0.24,0.58s0.36,0.24,0.58,0.24c0.24,0,0.44-0.08,0.6-0.24c0.17-0.16,0.25-0.35,0.25-0.59\n\tc0-0.23-0.08-0.43-0.25-0.59s-0.37-0.24-0.6-0.24c-0.23,0-0.42,0.08-0.58,0.24S11.1,19.07,11.1,19.3z M11.1,26.56\n\tc0,0.22,0.08,0.41,0.24,0.57c0.17,0.17,0.36,0.25,0.58,0.25c0.24,0,0.44-0.08,0.6-0.23c0.17-0.16,0.25-0.35,0.25-0.59\n\ts-0.08-0.44-0.25-0.6c-0.17-0.17-0.37-0.25-0.6-0.25c-0.22,0-0.41,0.08-0.58,0.25C11.18,26.13,11.1,26.33,11.1,26.56z M14.32,20.98\n\tc0,0.24,0.08,0.44,0.24,0.61c0.16,0.17,0.36,0.25,0.59,0.25s0.43-0.08,0.59-0.25c0.16-0.17,0.24-0.37,0.24-0.61\n\tc0-0.23-0.08-0.42-0.24-0.58s-0.35-0.24-0.59-0.24s-0.43,0.08-0.59,0.24S14.32,20.76,14.32,20.98z M14.32,24.61\n\tc0,0.21,0.08,0.4,0.23,0.57c0.18,0.16,0.38,0.24,0.6,0.24c0.24,0,0.43-0.08,0.59-0.23c0.16-0.16,0.23-0.35,0.23-0.58\n\tc0-0.24-0.08-0.43-0.24-0.59c-0.16-0.16-0.35-0.23-0.59-0.23c-0.24,0-0.44,0.08-0.6,0.24C14.4,24.18,14.32,24.38,14.32,24.61z\n\t M15.3,9.06c0.69-0.66,1.51-0.99,2.47-0.99c0.97,0,1.8,0.35,2.48,1.04c0.69,0.69,1.03,1.53,1.03,2.49c0,0.62-0.17,1.24-0.51,1.84\n\tC19.82,12.48,18.66,12,17.3,12h-0.32C16.68,10.83,16.12,9.85,15.3,9.06z M16.9,3.84c0,0.23,0.08,0.43,0.25,0.58s0.37,0.23,0.61,0.23\n\ts0.43-0.08,0.59-0.23c0.16-0.16,0.23-0.35,0.23-0.58V1.8c0-0.24-0.08-0.44-0.24-0.61S18,0.94,17.77,0.94s-0.43,0.09-0.6,0.26\n\tc-0.17,0.17-0.26,0.37-0.26,0.6V3.84z M22.42,6.11c0,0.23,0.08,0.43,0.25,0.59c0.15,0.16,0.34,0.24,0.56,0.26s0.43-0.07,0.62-0.26\n\tl1.43-1.43c0.18-0.18,0.26-0.38,0.26-0.61c0-0.24-0.09-0.44-0.26-0.61c-0.17-0.17-0.37-0.25-0.6-0.25c-0.22,0-0.41,0.08-0.58,0.25\n\tl-1.43,1.46C22.5,5.67,22.42,5.87,22.42,6.11z M23.22,17.91c0,0.25,0.08,0.46,0.24,0.62l0.64,0.63c0.24,0.16,0.46,0.24,0.64,0.24\n\tc0.21,0,0.39-0.09,0.56-0.26c0.17-0.17,0.25-0.38,0.25-0.61c0-0.23-0.09-0.42-0.26-0.58l-0.62-0.65c-0.18-0.16-0.38-0.24-0.61-0.24\n\ts-0.43,0.08-0.59,0.25C23.3,17.47,23.22,17.67,23.22,17.91z M24.67,11.6c0,0.24,0.09,0.43,0.26,0.59c0.17,0.18,0.38,0.27,0.62,0.27\n\th2.02c0.23,0,0.43-0.08,0.6-0.25s0.25-0.37,0.25-0.61c0-0.24-0.08-0.44-0.25-0.6s-0.37-0.25-0.6-0.25h-2.02\n\tc-0.24,0-0.44,0.08-0.62,0.25S24.67,11.37,24.67,11.6z\"/>\n</svg>",
          'partly-cloudy-day': "<svg version=\"1.1\" class=\"hour-svg\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n\t viewBox=\"0 0 30 30\" style=\"enable-background:new 0 0 30 30;\" xml:space=\"preserve\">\n<path d=\"M3.89,17.6c0-0.99,0.31-1.88,0.93-2.65s1.41-1.27,2.38-1.49c0.26-1.17,0.85-2.14,1.78-2.88c0.93-0.75,2-1.12,3.22-1.12\n\tc1.18,0,2.24,0.36,3.16,1.09c0.93,0.73,1.53,1.66,1.8,2.8h0.27c1.18,0,2.18,0.41,3.01,1.24s1.25,1.83,1.25,3\n\tc0,1.18-0.42,2.18-1.25,3.01s-1.83,1.25-3.01,1.25H8.16c-0.58,0-1.13-0.11-1.65-0.34S5.52,21,5.14,20.62\n\tc-0.38-0.38-0.68-0.84-0.91-1.36S3.89,18.17,3.89,17.6z M5.34,17.6c0,0.76,0.28,1.42,0.82,1.96s1.21,0.82,1.99,0.82h9.28\n\tc0.77,0,1.44-0.27,1.99-0.82c0.55-0.55,0.83-1.2,0.83-1.96c0-0.76-0.27-1.42-0.83-1.96c-0.55-0.54-1.21-0.82-1.99-0.82h-1.39\n\tc-0.1,0-0.15-0.05-0.15-0.15l-0.07-0.49c-0.1-0.94-0.5-1.73-1.19-2.35s-1.51-0.93-2.45-0.93c-0.94,0-1.76,0.31-2.46,0.94\n\tc-0.7,0.62-1.09,1.41-1.18,2.34l-0.07,0.42c0,0.1-0.05,0.15-0.16,0.15l-0.45,0.07c-0.72,0.06-1.32,0.36-1.81,0.89\n\tC5.59,16.24,5.34,16.87,5.34,17.6z M14.19,8.88c-0.1,0.09-0.08,0.16,0.07,0.21c0.43,0.19,0.79,0.37,1.08,0.55\n\tc0.11,0.03,0.19,0.02,0.22-0.03c0.61-0.57,1.31-0.86,2.12-0.86c0.81,0,1.5,0.27,2.1,0.81c0.59,0.54,0.92,1.21,0.99,2l0.09,0.64h1.42\n\tc0.65,0,1.21,0.23,1.68,0.7c0.47,0.47,0.7,1.02,0.7,1.66c0,0.6-0.21,1.12-0.62,1.57s-0.92,0.7-1.53,0.77c-0.1,0-0.15,0.05-0.15,0.16\n\tv1.13c0,0.11,0.05,0.16,0.15,0.16c1.01-0.06,1.86-0.46,2.55-1.19s1.04-1.6,1.04-2.6c0-1.06-0.37-1.96-1.12-2.7\n\tc-0.75-0.75-1.65-1.12-2.7-1.12h-0.15c-0.26-1-0.81-1.82-1.65-2.47c-0.83-0.65-1.77-0.97-2.8-0.97C16.28,7.29,15.11,7.82,14.19,8.88\n\tz\"/>\n</svg>",
          cloudy: "<svg version=\"1.1\" class=\"hour-svg\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n\t viewBox=\"0 0 30 30\" style=\"enable-background:new 0 0 30 30;\" xml:space=\"preserve\">\n<path d=\"M3.89,17.6c0-0.99,0.31-1.88,0.93-2.65s1.41-1.27,2.38-1.49c0.26-1.17,0.85-2.14,1.78-2.88c0.93-0.75,2-1.12,3.22-1.12\n\tc1.18,0,2.24,0.36,3.16,1.09c0.93,0.73,1.53,1.66,1.8,2.8h0.27c1.18,0,2.18,0.41,3.01,1.24s1.25,1.83,1.25,3\n\tc0,1.18-0.42,2.18-1.25,3.01s-1.83,1.25-3.01,1.25H8.16c-0.58,0-1.13-0.11-1.65-0.34S5.52,21,5.14,20.62\n\tc-0.38-0.38-0.68-0.84-0.91-1.36S3.89,18.17,3.89,17.6z M5.34,17.6c0,0.76,0.28,1.42,0.82,1.96s1.21,0.82,1.99,0.82h9.28\n\tc0.77,0,1.44-0.27,1.99-0.82c0.55-0.55,0.83-1.2,0.83-1.96c0-0.76-0.27-1.42-0.83-1.96c-0.55-0.54-1.21-0.82-1.99-0.82h-1.39\n\tc-0.1,0-0.15-0.05-0.15-0.15l-0.07-0.49c-0.1-0.94-0.5-1.73-1.19-2.35s-1.51-0.93-2.45-0.93c-0.94,0-1.76,0.31-2.46,0.94\n\tc-0.7,0.62-1.09,1.41-1.18,2.34l-0.07,0.42c0,0.1-0.05,0.15-0.16,0.15l-0.45,0.07c-0.72,0.06-1.32,0.36-1.81,0.89\n\tC5.59,16.24,5.34,16.87,5.34,17.6z M14.19,8.88c-0.1,0.09-0.08,0.16,0.07,0.21c0.43,0.19,0.79,0.37,1.08,0.55\n\tc0.11,0.03,0.19,0.02,0.22-0.03c0.61-0.57,1.31-0.86,2.12-0.86c0.81,0,1.5,0.27,2.1,0.81c0.59,0.54,0.92,1.21,0.99,2l0.09,0.64h1.42\n\tc0.65,0,1.21,0.23,1.68,0.7c0.47,0.47,0.7,1.02,0.7,1.66c0,0.6-0.21,1.12-0.62,1.57s-0.92,0.7-1.53,0.77c-0.1,0-0.15,0.05-0.15,0.16\n\tv1.13c0,0.11,0.05,0.16,0.15,0.16c1.01-0.06,1.86-0.46,2.55-1.19s1.04-1.6,1.04-2.6c0-1.06-0.37-1.96-1.12-2.7\n\tc-0.75-0.75-1.65-1.12-2.7-1.12h-0.15c-0.26-1-0.81-1.82-1.65-2.47c-0.83-0.65-1.77-0.97-2.8-0.97C16.28,7.29,15.11,7.82,14.19,8.88\n\tz\"/>\n</svg>"
        }; // sets current temp icon
        mainTempIcon = document.getElementById('main-temp-icon');
        if (data.icon === 'rain') {
          mainTempIcon.innerHTML = "<svg version=\"1.1\" class=\"temp-svg\" id=\"main-temp-icon\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n        viewBox=\"0 0 30 30\" style=\"enable-background:new 0 0 30 30;\" xml:space=\"preserve\">\n    <path d=\"M4.64,16.91c0-1.15,0.36-2.17,1.08-3.07c0.72-0.9,1.63-1.47,2.73-1.73c0.31-1.36,1.02-2.48,2.11-3.36s2.34-1.31,3.75-1.31\n       c1.38,0,2.6,0.43,3.68,1.28c1.08,0.85,1.78,1.95,2.1,3.29h0.32c0.89,0,1.72,0.22,2.48,0.65s1.37,1.03,1.81,1.78\n       c0.44,0.75,0.67,1.58,0.67,2.47c0,0.88-0.21,1.69-0.63,2.44c-0.42,0.75-1,1.35-1.73,1.8c-0.73,0.45-1.53,0.69-2.4,0.71\n       c-0.13,0-0.2-0.06-0.2-0.17v-1.33c0-0.12,0.07-0.18,0.2-0.18c0.85-0.04,1.58-0.38,2.18-1.02s0.9-1.39,0.9-2.26s-0.33-1.62-0.98-2.26\n       s-1.42-0.96-2.31-0.96h-1.61c-0.12,0-0.18-0.06-0.18-0.17l-0.08-0.58c-0.11-1.08-0.58-1.99-1.39-2.71\n       c-0.82-0.73-1.76-1.09-2.85-1.09c-1.09,0-2.05,0.36-2.85,1.09c-0.81,0.73-1.26,1.63-1.36,2.71l-0.07,0.53c0,0.12-0.07,0.19-0.2,0.19\n       l-0.53,0.03c-0.83,0.1-1.53,0.46-2.1,1.07s-0.85,1.33-0.85,2.16c0,0.87,0.3,1.62,0.9,2.26s1.33,0.98,2.18,1.02\n       c0.11,0,0.17,0.06,0.17,0.18v1.33c0,0.11-0.06,0.17-0.17,0.17c-1.34-0.06-2.47-0.57-3.4-1.53S4.64,18.24,4.64,16.91z M9.99,23.6\n       c0-0.04,0.01-0.11,0.04-0.2l1.63-5.77c0.06-0.19,0.17-0.34,0.32-0.44c0.15-0.1,0.31-0.15,0.46-0.15c0.07,0,0.15,0.01,0.24,0.03\n       c0.24,0.04,0.42,0.17,0.54,0.37c0.12,0.2,0.15,0.42,0.08,0.67l-1.63,5.73c-0.12,0.43-0.4,0.64-0.82,0.64\n       c-0.04,0-0.07-0.01-0.11-0.02c-0.06-0.02-0.09-0.03-0.1-0.03c-0.22-0.06-0.38-0.17-0.49-0.33C10.04,23.93,9.99,23.77,9.99,23.6z\n        M12.61,26.41l2.44-8.77c0.04-0.19,0.14-0.34,0.3-0.44c0.16-0.1,0.32-0.15,0.49-0.15c0.09,0,0.18,0.01,0.27,0.03\n       c0.22,0.06,0.38,0.19,0.49,0.39c0.11,0.2,0.13,0.41,0.07,0.64l-2.43,8.78c-0.04,0.17-0.13,0.31-0.29,0.43\n       c-0.16,0.12-0.32,0.18-0.51,0.18c-0.09,0-0.18-0.02-0.25-0.05c-0.2-0.05-0.37-0.18-0.52-0.39C12.56,26.88,12.54,26.67,12.61,26.41z\n        M16.74,23.62c0-0.04,0.01-0.11,0.04-0.23l1.63-5.77c0.06-0.19,0.16-0.34,0.3-0.44c0.15-0.1,0.3-0.15,0.46-0.15\n       c0.08,0,0.17,0.01,0.26,0.03c0.21,0.06,0.36,0.16,0.46,0.31c0.1,0.15,0.15,0.31,0.15,0.47c0,0.03-0.01,0.08-0.02,0.14\n       s-0.02,0.1-0.02,0.12l-1.63,5.73c-0.04,0.19-0.13,0.35-0.28,0.46s-0.32,0.17-0.51,0.17l-0.24-0.05c-0.2-0.06-0.35-0.16-0.46-0.32\n       C16.79,23.94,16.74,23.78,16.74,23.62z\"/>\n    </svg>";
        } else if (data.icon === 'clear-day') {
          mainTempIcon.innerHTML = "<svg version=\"1.1\" class=\"temp-svg\" id=\"main-temp-icon\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n\t viewBox=\"0 0 30 30\" style=\"enable-background:new 0 0 30 30;\" xml:space=\"preserve\">\n<path d=\"M1.56,16.9c0,0.9,0.22,1.73,0.66,2.49s1.04,1.36,1.8,1.8c0.76,0.44,1.58,0.66,2.47,0.66h10.83c0.89,0,1.72-0.22,2.48-0.66\n\tc0.76-0.44,1.37-1.04,1.81-1.8c0.44-0.76,0.67-1.59,0.67-2.49c0-0.66-0.14-1.33-0.42-2C22.62,13.98,23,12.87,23,11.6\n\tc0-0.71-0.14-1.39-0.41-2.04c-0.27-0.65-0.65-1.2-1.12-1.67C21,7.42,20.45,7.04,19.8,6.77c-0.65-0.28-1.33-0.41-2.04-0.41\n\tc-1.48,0-2.77,0.58-3.88,1.74c-0.77-0.44-1.67-0.66-2.7-0.66c-1.41,0-2.65,0.44-3.73,1.31c-1.08,0.87-1.78,1.99-2.08,3.35\n\tc-1.12,0.26-2.03,0.83-2.74,1.73S1.56,15.75,1.56,16.9z M3.27,16.9c0-0.84,0.28-1.56,0.84-2.17c0.56-0.61,1.26-0.96,2.1-1.06\n\tl0.5-0.03c0.12,0,0.19-0.06,0.19-0.18l0.07-0.54c0.14-1.08,0.61-1.99,1.41-2.71c0.8-0.73,1.74-1.09,2.81-1.09\n\tc1.1,0,2.06,0.37,2.87,1.1c0.82,0.73,1.27,1.63,1.37,2.71l0.07,0.58c0.02,0.11,0.09,0.17,0.21,0.17h1.61c0.88,0,1.64,0.32,2.28,0.96\n\tc0.64,0.64,0.96,1.39,0.96,2.27c0,0.91-0.32,1.68-0.95,2.32c-0.63,0.64-1.4,0.96-2.28,0.96H6.49c-0.88,0-1.63-0.32-2.27-0.97\n\tC3.59,18.57,3.27,17.8,3.27,16.9z M9.97,4.63c0,0.24,0.08,0.45,0.24,0.63l0.66,0.64c0.25,0.19,0.46,0.27,0.64,0.25\n\tc0.21,0,0.39-0.09,0.55-0.26s0.24-0.38,0.24-0.62c0-0.24-0.09-0.44-0.26-0.59l-0.59-0.66c-0.18-0.16-0.38-0.24-0.61-0.24\n\tc-0.24,0-0.45,0.08-0.62,0.25C10.05,4.19,9.97,4.39,9.97,4.63z M15.31,9.06c0.69-0.67,1.51-1,2.45-1c0.99,0,1.83,0.34,2.52,1.03\n\tc0.69,0.69,1.04,1.52,1.04,2.51c0,0.62-0.17,1.24-0.51,1.84C19.84,12.48,18.68,12,17.32,12H17C16.75,10.91,16.19,9.93,15.31,9.06z\n\t M16.94,3.78c0,0.26,0.08,0.46,0.23,0.62s0.35,0.23,0.59,0.23c0.26,0,0.46-0.08,0.62-0.23c0.16-0.16,0.23-0.36,0.23-0.62V1.73\n\tc0-0.24-0.08-0.43-0.24-0.59s-0.36-0.23-0.61-0.23c-0.24,0-0.43,0.08-0.59,0.23s-0.23,0.35-0.23,0.59V3.78z M22.46,6.07\n\tc0,0.26,0.07,0.46,0.22,0.62c0.21,0.16,0.42,0.24,0.62,0.24c0.18,0,0.38-0.08,0.59-0.24l1.43-1.43c0.16-0.18,0.24-0.39,0.24-0.64\n\tc0-0.24-0.08-0.44-0.24-0.6c-0.16-0.16-0.36-0.24-0.59-0.24c-0.24,0-0.43,0.08-0.58,0.24l-1.47,1.43\n\tC22.53,5.64,22.46,5.84,22.46,6.07z M23.25,17.91c0,0.24,0.08,0.45,0.25,0.63l0.65,0.63c0.15,0.16,0.34,0.24,0.58,0.24\n\ts0.44-0.08,0.6-0.25c0.16-0.17,0.24-0.37,0.24-0.62c0-0.22-0.08-0.42-0.24-0.58l-0.65-0.65c-0.16-0.16-0.35-0.24-0.57-0.24\n\tc-0.24,0-0.44,0.08-0.6,0.24C23.34,17.47,23.25,17.67,23.25,17.91z M24.72,11.6c0,0.23,0.09,0.42,0.26,0.58\n\tc0.16,0.16,0.37,0.24,0.61,0.24h2.04c0.23,0,0.42-0.08,0.58-0.23s0.23-0.35,0.23-0.59c0-0.24-0.08-0.44-0.23-0.6\n\ts-0.35-0.25-0.58-0.25h-2.04c-0.24,0-0.44,0.08-0.61,0.25C24.8,11.17,24.72,11.37,24.72,11.6z\"/>\n</svg>";
        } else if (data.icon === 'snow') {
          mainTempIcon.innerHTML = "<svg version=\"1.1\" class=\"temp-svg\" id=\"main-temp-icon\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n\t viewBox=\"0 0 30 30\" style=\"enable-background:new 0 0 30 30;\" xml:space=\"preserve\">\n<path d=\"M1.58,16.93c0,0.86,0.21,1.67,0.64,2.41c0.42,0.74,1,1.34,1.74,1.79c0.73,0.45,1.54,0.69,2.4,0.71\n\tc0.11,0,0.17-0.06,0.17-0.17v-1.33c0-0.12-0.06-0.19-0.17-0.19c-0.85-0.04-1.58-0.38-2.18-1.02s-0.9-1.37-0.9-2.21\n\tc0-0.82,0.28-1.54,0.85-2.16c0.57-0.61,1.26-0.97,2.1-1.07l0.53-0.06c0.12,0,0.18-0.06,0.18-0.19l0.08-0.51\n\tc0.11-1.09,0.56-2,1.36-2.73c0.8-0.73,1.75-1.09,2.85-1.09c1.09,0,2.04,0.36,2.85,1.09c0.82,0.73,1.28,1.63,1.38,2.7l0.07,0.58\n\tc0,0.11,0.06,0.17,0.17,0.17h1.61c0.9,0,1.67,0.32,2.31,0.96c0.64,0.64,0.96,1.4,0.96,2.29c0,0.84-0.3,1.57-0.9,2.21\n\tc-0.6,0.63-1.33,0.97-2.17,1.02c-0.12,0-0.19,0.06-0.19,0.19v1.33c0,0.11,0.06,0.17,0.19,0.17c1.33-0.04,2.45-0.54,3.38-1.5\n\tc0.93-0.96,1.39-2.09,1.39-3.41c0-0.76-0.14-1.43-0.43-2.03C22.6,13.95,23,12.85,23,11.6c0-0.94-0.23-1.81-0.7-2.61\n\tc-0.47-0.8-1.11-1.44-1.91-1.91s-1.68-0.7-2.62-0.7c-1.54,0-2.83,0.58-3.87,1.73c-0.81-0.44-1.71-0.66-2.69-0.66\n\tc-1.41,0-2.65,0.44-3.74,1.31s-1.78,1.99-2.09,3.34c-1.12,0.28-2.03,0.86-2.74,1.75C1.93,14.75,1.58,15.77,1.58,16.93z M7.92,20.98\n\tc0,0.24,0.08,0.44,0.24,0.61c0.16,0.17,0.35,0.25,0.59,0.25c0.23,0,0.43-0.08,0.59-0.25c0.16-0.17,0.24-0.37,0.24-0.61\n\tc0-0.23-0.08-0.42-0.24-0.58s-0.35-0.24-0.59-0.24c-0.23,0-0.43,0.08-0.59,0.24S7.92,20.76,7.92,20.98z M7.92,24.61\n\tc0,0.21,0.08,0.4,0.24,0.57c0.18,0.16,0.37,0.24,0.58,0.24c0.24,0,0.43-0.08,0.59-0.23c0.16-0.16,0.23-0.35,0.23-0.58\n\tc0-0.24-0.08-0.43-0.24-0.59c-0.16-0.16-0.35-0.23-0.59-0.23c-0.23,0-0.43,0.08-0.59,0.23C8,24.17,7.92,24.37,7.92,24.61z\n\t M9.97,4.68c0,0.24,0.08,0.44,0.24,0.59l0.66,0.66c0.16,0.16,0.34,0.25,0.53,0.25c0.21,0.03,0.41-0.04,0.61-0.22\n\tc0.2-0.18,0.3-0.39,0.3-0.63c0-0.24-0.08-0.46-0.24-0.64l-0.64-0.61c-0.15-0.17-0.34-0.25-0.58-0.25c-0.25,0-0.46,0.08-0.63,0.25\n\tC10.05,4.24,9.97,4.44,9.97,4.68z M11.1,22.9c0,0.22,0.08,0.42,0.24,0.6c0.16,0.16,0.36,0.24,0.58,0.24c0.24,0,0.44-0.08,0.6-0.24\n\ts0.25-0.36,0.25-0.6c0-0.23-0.08-0.43-0.25-0.6s-0.37-0.25-0.6-0.25c-0.23,0-0.42,0.08-0.58,0.25S11.1,22.67,11.1,22.9z M11.1,19.3\n\tc0,0.23,0.08,0.42,0.24,0.58s0.36,0.24,0.58,0.24c0.24,0,0.44-0.08,0.6-0.24c0.17-0.16,0.25-0.35,0.25-0.59\n\tc0-0.23-0.08-0.43-0.25-0.59s-0.37-0.24-0.6-0.24c-0.23,0-0.42,0.08-0.58,0.24S11.1,19.07,11.1,19.3z M11.1,26.56\n\tc0,0.22,0.08,0.41,0.24,0.57c0.17,0.17,0.36,0.25,0.58,0.25c0.24,0,0.44-0.08,0.6-0.23c0.17-0.16,0.25-0.35,0.25-0.59\n\ts-0.08-0.44-0.25-0.6c-0.17-0.17-0.37-0.25-0.6-0.25c-0.22,0-0.41,0.08-0.58,0.25C11.18,26.13,11.1,26.33,11.1,26.56z M14.32,20.98\n\tc0,0.24,0.08,0.44,0.24,0.61c0.16,0.17,0.36,0.25,0.59,0.25s0.43-0.08,0.59-0.25c0.16-0.17,0.24-0.37,0.24-0.61\n\tc0-0.23-0.08-0.42-0.24-0.58s-0.35-0.24-0.59-0.24s-0.43,0.08-0.59,0.24S14.32,20.76,14.32,20.98z M14.32,24.61\n\tc0,0.21,0.08,0.4,0.23,0.57c0.18,0.16,0.38,0.24,0.6,0.24c0.24,0,0.43-0.08,0.59-0.23c0.16-0.16,0.23-0.35,0.23-0.58\n\tc0-0.24-0.08-0.43-0.24-0.59c-0.16-0.16-0.35-0.23-0.59-0.23c-0.24,0-0.44,0.08-0.6,0.24C14.4,24.18,14.32,24.38,14.32,24.61z\n\t M15.3,9.06c0.69-0.66,1.51-0.99,2.47-0.99c0.97,0,1.8,0.35,2.48,1.04c0.69,0.69,1.03,1.53,1.03,2.49c0,0.62-0.17,1.24-0.51,1.84\n\tC19.82,12.48,18.66,12,17.3,12h-0.32C16.68,10.83,16.12,9.85,15.3,9.06z M16.9,3.84c0,0.23,0.08,0.43,0.25,0.58s0.37,0.23,0.61,0.23\n\ts0.43-0.08,0.59-0.23c0.16-0.16,0.23-0.35,0.23-0.58V1.8c0-0.24-0.08-0.44-0.24-0.61S18,0.94,17.77,0.94s-0.43,0.09-0.6,0.26\n\tc-0.17,0.17-0.26,0.37-0.26,0.6V3.84z M22.42,6.11c0,0.23,0.08,0.43,0.25,0.59c0.15,0.16,0.34,0.24,0.56,0.26s0.43-0.07,0.62-0.26\n\tl1.43-1.43c0.18-0.18,0.26-0.38,0.26-0.61c0-0.24-0.09-0.44-0.26-0.61c-0.17-0.17-0.37-0.25-0.6-0.25c-0.22,0-0.41,0.08-0.58,0.25\n\tl-1.43,1.46C22.5,5.67,22.42,5.87,22.42,6.11z M23.22,17.91c0,0.25,0.08,0.46,0.24,0.62l0.64,0.63c0.24,0.16,0.46,0.24,0.64,0.24\n\tc0.21,0,0.39-0.09,0.56-0.26c0.17-0.17,0.25-0.38,0.25-0.61c0-0.23-0.09-0.42-0.26-0.58l-0.62-0.65c-0.18-0.16-0.38-0.24-0.61-0.24\n\ts-0.43,0.08-0.59,0.25C23.3,17.47,23.22,17.67,23.22,17.91z M24.67,11.6c0,0.24,0.09,0.43,0.26,0.59c0.17,0.18,0.38,0.27,0.62,0.27\n\th2.02c0.23,0,0.43-0.08,0.6-0.25s0.25-0.37,0.25-0.61c0-0.24-0.08-0.44-0.25-0.6s-0.37-0.25-0.6-0.25h-2.02\n\tc-0.24,0-0.44,0.08-0.62,0.25S24.67,11.37,24.67,11.6z\"/>\n</svg>";
        } else if (data.icon === 'partly-cloudy-day') {
          mainTempIcon.innerHTML = "<svg version=\"1.1\" class=\"temp-svg\" id=\"main-temp-icon\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n\t viewBox=\"0 0 30 30\" style=\"enable-background:new 0 0 30 30;\" xml:space=\"preserve\">\n<path d=\"M3.89,17.6c0-0.99,0.31-1.88,0.93-2.65s1.41-1.27,2.38-1.49c0.26-1.17,0.85-2.14,1.78-2.88c0.93-0.75,2-1.12,3.22-1.12\n\tc1.18,0,2.24,0.36,3.16,1.09c0.93,0.73,1.53,1.66,1.8,2.8h0.27c1.18,0,2.18,0.41,3.01,1.24s1.25,1.83,1.25,3\n\tc0,1.18-0.42,2.18-1.25,3.01s-1.83,1.25-3.01,1.25H8.16c-0.58,0-1.13-0.11-1.65-0.34S5.52,21,5.14,20.62\n\tc-0.38-0.38-0.68-0.84-0.91-1.36S3.89,18.17,3.89,17.6z M5.34,17.6c0,0.76,0.28,1.42,0.82,1.96s1.21,0.82,1.99,0.82h9.28\n\tc0.77,0,1.44-0.27,1.99-0.82c0.55-0.55,0.83-1.2,0.83-1.96c0-0.76-0.27-1.42-0.83-1.96c-0.55-0.54-1.21-0.82-1.99-0.82h-1.39\n\tc-0.1,0-0.15-0.05-0.15-0.15l-0.07-0.49c-0.1-0.94-0.5-1.73-1.19-2.35s-1.51-0.93-2.45-0.93c-0.94,0-1.76,0.31-2.46,0.94\n\tc-0.7,0.62-1.09,1.41-1.18,2.34l-0.07,0.42c0,0.1-0.05,0.15-0.16,0.15l-0.45,0.07c-0.72,0.06-1.32,0.36-1.81,0.89\n\tC5.59,16.24,5.34,16.87,5.34,17.6z M14.19,8.88c-0.1,0.09-0.08,0.16,0.07,0.21c0.43,0.19,0.79,0.37,1.08,0.55\n\tc0.11,0.03,0.19,0.02,0.22-0.03c0.61-0.57,1.31-0.86,2.12-0.86c0.81,0,1.5,0.27,2.1,0.81c0.59,0.54,0.92,1.21,0.99,2l0.09,0.64h1.42\n\tc0.65,0,1.21,0.23,1.68,0.7c0.47,0.47,0.7,1.02,0.7,1.66c0,0.6-0.21,1.12-0.62,1.57s-0.92,0.7-1.53,0.77c-0.1,0-0.15,0.05-0.15,0.16\n\tv1.13c0,0.11,0.05,0.16,0.15,0.16c1.01-0.06,1.86-0.46,2.55-1.19s1.04-1.6,1.04-2.6c0-1.06-0.37-1.96-1.12-2.7\n\tc-0.75-0.75-1.65-1.12-2.7-1.12h-0.15c-0.26-1-0.81-1.82-1.65-2.47c-0.83-0.65-1.77-0.97-2.8-0.97C16.28,7.29,15.11,7.82,14.19,8.88\n\tz\"/>\n</svg>";
        }

        // sets misc stats
        precip = document.getElementById('precip-stat');
        precip.textContent = "".concat(data.precip);
        humidity = document.getElementById('humidity-stat');
        humidity.textContent = "".concat(data.humidity);
        visibility = document.getElementById('visibility-stat');
        visibility.textContent = "".concat(data.visibility);
        feelsLike = document.getElementById('feels-like-stat');
        feelsLike.textContent = "".concat(data.feelslike);
        uv = document.getElementById('uv-stat');
        uv.textContent = "".concat(data.uvindex, " of 11");

        // sets moon phase
        moonPhase = document.getElementById('moon-phase-stat');
        if (Number(data.moonphase) <= 0.03) {
          moonPhase.textContent = 'New Moon';
        } else if (Number(data.moonphase) <= 0.25) {
          moonPhase.textContent = 'Waxing Crescent';
          moonIcon = document.getElementById('moon-phase-icon');
          moonIcon.innerHTML = "<svg version=\"1.1\" class=\"stats-icon\" id=\"moon-phase-icon\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n\t viewBox=\"0 0 30 30\" style=\"enable-background:new 0 0 30 30;\" xml:space=\"preserve\">\n<path d=\"M15.01,25.71c2.04,0,3.92-0.5,5.65-1.51s3.09-2.37,4.09-4.1s1.51-3.61,1.51-5.65s-0.5-3.92-1.51-5.65s-2.37-3.09-4.09-4.09\n\ts-3.61-1.51-5.65-1.51c1.1,0.59,2.07,1.32,2.89,2.19s1.47,1.82,1.95,2.83s0.83,2.03,1.05,3.07s0.34,2.09,0.34,3.16\n\tc0,0.91-0.04,1.76-0.13,2.54s-0.27,1.63-0.53,2.53s-0.62,1.71-1.06,2.43s-1.04,1.42-1.82,2.09S16.03,25.26,15.01,25.71z\"/>\n</svg>";
        } else if (Number(data.moonphase) <= 0.50) {
          moonPhase.textContent = 'First Quarter';
        } else if (Number(data.moonphase) <= 0.97) {
          moonPhase.textContent = 'Waxing Gibbous';
        } else if (Number(data.moonphase) <= 1) {
          moonPhase.textContent = 'Full Moon';
        }

        // sets next 7 hours
        now = new Date();
        hours = now.getHours();
        hourElements = [document.getElementById('hour-1'), document.getElementById('hour-2'), document.getElementById('hour-3'), document.getElementById('hour-4'), document.getElementById('hour-5'), document.getElementById('hour-6'), document.getElementById('hour-7')];
        hourIcons = [document.getElementById('hour-1-icon'), document.getElementById('hour-2-icon'), document.getElementById('hour-3-icon'), document.getElementById('hour-4-icon'), document.getElementById('hour-5-icon'), document.getElementById('hour-6-icon'), document.getElementById('hour-7-icon')];
        hourTempElements = [document.getElementById('hour-1-temp'), document.getElementById('hour-2-temp'), document.getElementById('hour-3-temp'), document.getElementById('hour-4-temp'), document.getElementById('hour-5-temp'), document.getElementById('hour-6-temp'), document.getElementById('hour-7-temp')];
        hourElements.forEach(function (hourElement, index) {
          var hour = hours + index + 1;
          var timePeriod = hour >= 12 ? 'PM' : 'AM';
          var formattedHour = hour % 12 || 12;
          hourElement.textContent = "".concat(formattedHour, ":00 ").concat(timePeriod);
          hourTempElements[index].textContent = "".concat(data.hours[hour].temp);
          hourIcons[index].innerHTML = "".concat(weatherIconHours[data.hours[hour].icon]);
        });
      case 36:
      case "end":
        return _context.stop();
    }
  }, _callee);
})));
})();

/******/ })()
;
//# sourceMappingURL=bundleb11442319105d381c85b.js.map