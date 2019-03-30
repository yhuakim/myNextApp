webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/input.jsx":
/*!******************************!*\
  !*** ./components/input.jsx ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Input; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _taskList__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./taskList */ "./components/taskList.jsx");







var _jsxFileName = "C:\\Users\\user\\Documents\\toDo-List\\components\\input.jsx";



var Input =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Input, _Component);

  function Input(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Input);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Input).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "addTask", function () {
      if (_this.state.taskText === '') {
        return;
      }

      var tasksArr = _this.state.taskList;
      tasksArr.push(_this.state.taskText);

      _this.setState({
        taskList: tasksArr
      });

      _this.taskTextInput.focus();

      _this.taskTextInput.value = '';
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleKeyPress", function (event) {
      if (event.key === 'Enter') {}
    });

    _this.state = {
      taskText: '',
      taskList: []
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Input, [{
    key: "handleChange",
    value: function handleChange(taskText) {
      this.setState({
        taskText: taskText.target.value
      });
    }
  }, {
    key: "deleteTask",
    value: function deleteTask(index) {
      var taskArr = this.state.taskList;
      taskArr.splice(index, 1);
      this.setState({
        taskList: taskArr
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      if (this.state.taskList === '') {
        return;
      }

      var taskList = this.state.taskList.map(function (val, key) {
        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_taskList__WEBPACK_IMPORTED_MODULE_8__["default"], {
          key: key,
          text: val,
          deleteMethod: function deleteMethod() {
            return _this2.deleteTask(key);
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 45
          },
          __self: this
        });
      });
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, taskList), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        type: "text",
        name: "input",
        id: "input",
        className: "form-control text-center",
        onChange: function onChange(taskText) {
          return _this2.handleChange(taskText);
        },
        ref: function ref(_ref) {
          return _this2.taskTextInput = _ref;
        },
        value: this.state.tasktext,
        placeholder: "Enter your tasks here",
        onKeyPress: this.handleKeyPress.bind(this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("button", {
        type: "submit",
        className: "btn btn-primary btn-md mt-1 ",
        onClick: this.addTask,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("i", {
        className: "fas fa-plus fa-md",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      })));
    }
  }]);

  return Input;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);



/***/ })

})
//# sourceMappingURL=index.js.b150155edc968c794622.hot-update.js.map