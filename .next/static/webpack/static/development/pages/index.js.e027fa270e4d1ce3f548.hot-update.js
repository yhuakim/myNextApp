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
        className: "jsx-2289941481" + " " + "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-2289941481" + " " + "list",
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
        className: "jsx-2289941481" + " " + "form-control text-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("button", {
        type: "submit",
        onClick: this.addTask,
        className: "jsx-2289941481" + " " + "btn btn-primary btn-md mt-1 ",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("i", {
        className: "jsx-2289941481" + " " + "fas fa-plus fa-md",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "2289941481",
        __self: this
      }, "input.jsx-2289941481{background-color:skyblue;position:absolute;}button.jsx-2289941481{border-radius:50%;float:right;}button.jsx-2289941481:hover{box-shadow:1px 1px 1px 1px skyblue;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcdXNlclxcRG9jdW1lbnRzXFx0b0RvLUxpc3RcXGNvbXBvbmVudHNcXGlucHV0LmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUErRDRCLEFBSXNELEFBSVAsQUFJaUIsa0JBSHZCLE9BSk0sS0FLdEIsS0FHQSxRQVBBIiwiZmlsZSI6IkM6XFxVc2Vyc1xcdXNlclxcRG9jdW1lbnRzXFx0b0RvLUxpc3RcXGNvbXBvbmVudHNcXGlucHV0LmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBUYXNrTGlzdCBmcm9tICcuL3Rhc2tMaXN0JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIElucHV0IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIHRhc2tUZXh0OiAnJyxcclxuICAgICAgICAgICAgdGFza0xpc3Q6IFtdXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZUNoYW5nZSh0YXNrVGV4dCkge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyB0YXNrVGV4dDogdGFza1RleHQudGFyZ2V0LnZhbHVlIH0pXHJcbiAgICB9XHJcblxyXG4gICAgYWRkVGFzayA9ICgpID0+IHtcclxuICAgICAgICBpZiAodGhpcy5zdGF0ZS50YXNrVGV4dCA9PT0gJycpIHtcclxuICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgdGFza3NBcnIgPSB0aGlzLnN0YXRlLnRhc2tMaXN0O1xyXG4gICAgICAgIHRhc2tzQXJyLnB1c2godGhpcy5zdGF0ZS50YXNrVGV4dCk7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHRhc2tMaXN0OiB0YXNrc0FyciB9KTtcclxuICAgICAgICB0aGlzLnRhc2tUZXh0SW5wdXQuZm9jdXMoKTtcclxuICAgICAgICB0aGlzLnRhc2tUZXh0SW5wdXQudmFsdWUgPSAnJztcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVLZXlQcmVzcyA9IChldmVudCkgPT4ge1xyXG4gICAgICAgIGlmIChldmVudC5rZXkgPT09ICdFbnRlcicpIHtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGRlbGV0ZVRhc2soaW5kZXgpIHtcclxuICAgICAgICBsZXQgdGFza0FyciA9IHRoaXMuc3RhdGUudGFza0xpc3Q7XHJcbiAgICAgICAgdGFza0Fyci5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyB0YXNrTGlzdDogdGFza0FyciB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUudGFza0xpc3QgPT09ICcnKSB7IHJldHVybiB9XHJcblxyXG4gICAgICAgIGxldCB0YXNrTGlzdCA9IHRoaXMuc3RhdGUudGFza0xpc3QubWFwKCh2YWwsIGtleSkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gPFRhc2tMaXN0IGtleT17a2V5fSB0ZXh0PXt2YWx9IGRlbGV0ZU1ldGhvZD17KCkgPT4gdGhpcy5kZWxldGVUYXNrKGtleSl9IC8+XHJcbiAgICAgICAgfSk7XHJcblxyXG5cclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIiA+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpc3RcIiA+XHJcbiAgICAgICAgICAgICAgICAgICAge3Rhc2tMaXN0fVxyXG5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJpbnB1dFwiIGlkPVwiaW5wdXRcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgdGV4dC1jZW50ZXJcIiBvbkNoYW5nZT17dGFza1RleHQgPT4gdGhpcy5oYW5kbGVDaGFuZ2UodGFza1RleHQpfVxyXG4gICAgICAgICAgICAgICAgICAgIHJlZj17KHJlZikgPT4gdGhpcy50YXNrVGV4dElucHV0ID0gcmVmfSB2YWx1ZT17dGhpcy5zdGF0ZS50YXNrdGV4dH0gcGxhY2Vob2xkZXI9XCJFbnRlciB5b3VyIHRhc2tzIGhlcmVcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uS2V5UHJlc3M9e3RoaXMuaGFuZGxlS2V5UHJlc3MuYmluZCh0aGlzKX0gLz5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeSBidG4tbWQgbXQtMSBcIiBvbkNsaWNrPXt0aGlzLmFkZFRhc2t9ID5cclxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtcGx1cyBmYS1tZFwiPjwvaT5cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG5cclxuICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHNreWJsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgYnV0dG9uIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsb2F0OiByaWdodDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBidXR0b246aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMXB4IDFweCAxcHggMXB4IHNreWJsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBgfTwvc3R5bGU+XHJcblxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuIl19 */\n/*@ sourceURL=C:\\Users\\user\\Documents\\toDo-List\\components\\input.jsx */"));
    }
  }]);

  return Input;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);



/***/ })

})
//# sourceMappingURL=index.js.e027fa270e4d1ce3f548.hot-update.js.map