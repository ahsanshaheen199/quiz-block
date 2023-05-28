/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/FrontendAnswerOption.tsx":
/*!*************************************************!*\
  !*** ./src/components/FrontendAnswerOption.tsx ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);


const FrontendAnswerOption = _ref => {
  let {
    answerOption,
    onChange
  } = _ref;
  const id = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useId)();
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "answer-text"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    id: `answer_text-${id}`,
    type: "radio",
    name: "answer_text",
    value: answerOption.answer.split(' ').join('_').toLowerCase(),
    onChange: e => {
      onChange(answerOption);
    },
    className: "peer hidden"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    htmlFor: `answer_text-${id}`,
    className: "flex justify-between w-full text-base cursor-pointer p-4 border border-gray-200 rounded peer-checked:text-white peer-checked:bg-blue-500 peer-checked:border-blue-600 hover:text-gray-600 hover:bg-gray-100"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, answerOption.answer), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    className: "h-6 w-6 hidden peer-checked:block"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("circle", {
    cx: 12,
    cy: 12,
    r: 12,
    fill: "#fff",
    opacity: "0.2"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M7 13l3 3 7-7",
    stroke: "#fff",
    strokeWidth: 1.5,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FrontendAnswerOption);

/***/ }),

/***/ "@wordpress/dom-ready":
/*!**********************************!*\
  !*** external ["wp","domReady"] ***!
  \**********************************/
/***/ ((module) => {

module.exports = window["wp"]["domReady"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["i18n"];

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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/view.tsx ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/dom-ready */ "@wordpress/dom-ready");
/* harmony import */ var _wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_FrontendAnswerOption__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/FrontendAnswerOption */ "./src/components/FrontendAnswerOption.tsx");





_wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_1___default()(function () {
  const quizContainer = document.querySelectorAll('.quiz-block-container');
  quizContainer.forEach(div => {
    const preElement = div.querySelector('pre');
    const data = JSON.parse(preElement.innerText);
    (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.render)((0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(App, data), div);
    div.classList.remove('quiz-block-container');
  });
});
const App = props => {
  const [userAnswer, setUserAnswer] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)();
  const [isCorrectAnswer, setIsCorrectAnswer] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(undefined);
  const submitAnswer = () => {
    if (userAnswer?.isCorrect) {
      setIsCorrectAnswer(true);
    } else {
      setIsCorrectAnswer(false);
    }
  };
  if (isCorrectAnswer !== undefined) {
    return isCorrectAnswer ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "flex h-28 rounded border border-green-500 items-center justify-center text-white bg-green-500"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
      className: "text-base"
    }, "Answer is correct")) : (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "flex h-28 rounded border border-red-500 items-center justify-center text-white bg-red-500"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
      className: "text-base"
    }, "Answer is incorrect"));
  }
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3", {
    className: "text-2xl mb-5"
  }, props.question), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "answer-list space-y-2"
  }, props.answers.map((answer, index) => {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_FrontendAnswerOption__WEBPACK_IMPORTED_MODULE_3__["default"], {
      key: index,
      answerOption: answer,
      onChange: value => {
        setUserAnswer(value);
      }
    });
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "mt-5"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    onClick: submitAnswer,
    className: "cursor-pointer rounded border-none text-white py-3 px-4 text-base bg-green-700"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Submit Answer', 'quiz-block'))));
};
})();

/******/ })()
;
//# sourceMappingURL=view.js.map