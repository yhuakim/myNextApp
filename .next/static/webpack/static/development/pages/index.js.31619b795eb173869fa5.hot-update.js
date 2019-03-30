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
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _taskList__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./taskList */ "./components/taskList.jsx");







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
        return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_taskList__WEBPACK_IMPORTED_MODULE_9__["default"], {
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
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-1364463049" + " " + "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-1364463049" + " " + "list",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, taskList), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("input", {
        type: "text",
        name: "input",
        id: "input",
        onChange: function onChange(taskText) {
          return _this2.handleChange(taskText);
        },
        ref: function ref(_ref) {
          return _this2.taskTextInput = _ref;
        },
        value: this.state.tasktext,
        placeholder: "Enter your tasks here",
        onKeyPress: this.handleKeyPress.bind(this),
        className: "jsx-1364463049" + " " + "form-control text-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("button", {
        type: "submit",
        onClick: this.addTask,
        className: "jsx-1364463049" + " " + "btn btn-primary btn-md mt-1 ",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("i", {
        className: "jsx-1364463049" + " " + "fas fa-plus fa-md",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "1364463049",
        __self: this
      }, "input.jsx-1364463049{background-color:skyblue;}button.jsx-1364463049{border-radius:50%;position:fixed;}button.jsx-1364463049:hover{box-shadow:1px 1px 1px 1px skyblue;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcdXNlclxcRG9jdW1lbnRzXFx0b0RvLUxpc3RcXGNvbXBvbmVudHNcXGlucHV0LmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUErRDRCLEFBR3NELEFBR1AsQUFJaUIsa0JBSHBCLE9BSG5CLFFBSUEsRUFHQSIsImZpbGUiOiJDOlxcVXNlcnNcXHVzZXJcXERvY3VtZW50c1xcdG9Eby1MaXN0XFxjb21wb25lbnRzXFxpbnB1dC5qc3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgVGFza0xpc3QgZnJvbSAnLi90YXNrTGlzdCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbnB1dCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICB0YXNrVGV4dDogJycsXHJcbiAgICAgICAgICAgIHRhc2tMaXN0OiBbXVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVDaGFuZ2UodGFza1RleHQpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgdGFza1RleHQ6IHRhc2tUZXh0LnRhcmdldC52YWx1ZSB9KVxyXG4gICAgfVxyXG5cclxuICAgIGFkZFRhc2sgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUudGFza1RleHQgPT09ICcnKSB7XHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IHRhc2tzQXJyID0gdGhpcy5zdGF0ZS50YXNrTGlzdDtcclxuICAgICAgICB0YXNrc0Fyci5wdXNoKHRoaXMuc3RhdGUudGFza1RleHQpO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyB0YXNrTGlzdDogdGFza3NBcnIgfSk7XHJcbiAgICAgICAgdGhpcy50YXNrVGV4dElucHV0LmZvY3VzKCk7XHJcbiAgICAgICAgdGhpcy50YXNrVGV4dElucHV0LnZhbHVlID0gJyc7XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlS2V5UHJlc3MgPSAoZXZlbnQpID0+IHtcclxuICAgICAgICBpZiAoZXZlbnQua2V5ID09PSAnRW50ZXInKSB7XHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBkZWxldGVUYXNrKGluZGV4KSB7XHJcbiAgICAgICAgbGV0IHRhc2tBcnIgPSB0aGlzLnN0YXRlLnRhc2tMaXN0O1xyXG4gICAgICAgIHRhc2tBcnIuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgdGFza0xpc3Q6IHRhc2tBcnIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLnRhc2tMaXN0ID09PSAnJykgeyByZXR1cm4gfVxyXG5cclxuICAgICAgICBsZXQgdGFza0xpc3QgPSB0aGlzLnN0YXRlLnRhc2tMaXN0Lm1hcCgodmFsLCBrZXkpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIDxUYXNrTGlzdCBrZXk9e2tleX0gdGV4dD17dmFsfSBkZWxldGVNZXRob2Q9eygpID0+IHRoaXMuZGVsZXRlVGFzayhrZXkpfSAvPlxyXG4gICAgICAgIH0pO1xyXG5cclxuXHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCIgPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaXN0XCIgPlxyXG4gICAgICAgICAgICAgICAgICAgIHt0YXNrTGlzdH1cclxuXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwiaW5wdXRcIiBpZD1cImlucHV0XCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIHRleHQtY2VudGVyXCIgb25DaGFuZ2U9e3Rhc2tUZXh0ID0+IHRoaXMuaGFuZGxlQ2hhbmdlKHRhc2tUZXh0KX1cclxuICAgICAgICAgICAgICAgICAgICByZWY9eyhyZWYpID0+IHRoaXMudGFza1RleHRJbnB1dCA9IHJlZn0gdmFsdWU9e3RoaXMuc3RhdGUudGFza3RleHR9IHBsYWNlaG9sZGVyPVwiRW50ZXIgeW91ciB0YXNrcyBoZXJlXCJcclxuICAgICAgICAgICAgICAgICAgICBvbktleVByZXNzPXt0aGlzLmhhbmRsZUtleVByZXNzLmJpbmQodGhpcyl9IC8+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnkgYnRuLW1kIG10LTEgXCIgb25DbGljaz17dGhpcy5hZGRUYXNrfSA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLXBsdXMgZmEtbWRcIj48L2k+XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuXHJcbiAgICAgICAgICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHNreWJsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgYnV0dG9uIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBidXR0b246aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMXB4IDFweCAxcHggMXB4IHNreWJsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBgfTwvc3R5bGU+XHJcblxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuIl19 */\n/*@ sourceURL=C:\\Users\\user\\Documents\\toDo-List\\components\\input.jsx */"));
    }
  }]);

  return Input;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);



/***/ })

})
//# sourceMappingURL=index.js.31619b795eb173869fa5.hot-update.js.map