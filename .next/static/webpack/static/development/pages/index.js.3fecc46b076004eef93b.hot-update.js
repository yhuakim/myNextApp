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
        className: "jsx-3110489826" + " " + "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-3110489826" + " " + "list",
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
        className: "jsx-3110489826" + " " + "form-control text-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("button", {
        type: "submit",
        onClick: this.addTask,
        className: "jsx-3110489826" + " " + "btn btn-primary btn-md mt-1 ",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("i", {
        className: "jsx-3110489826" + " " + "fas fa-plus fa-md",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "3110489826",
        __self: this
      }, "input.jsx-3110489826{background-color:skyblue;}button.jsx-3110489826{border-radius:50%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcdXNlclxcRG9jdW1lbnRzXFx0b0RvLUxpc3RcXGNvbXBvbmVudHNcXGlucHV0LmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUErRDRCLEFBR3NELEFBR1Asa0JBQ3RCLE9BSEEiLCJmaWxlIjoiQzpcXFVzZXJzXFx1c2VyXFxEb2N1bWVudHNcXHRvRG8tTGlzdFxcY29tcG9uZW50c1xcaW5wdXQuanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFRhc2tMaXN0IGZyb20gJy4vdGFza0xpc3QnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5wdXQgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgdGFza1RleHQ6ICcnLFxyXG4gICAgICAgICAgICB0YXNrTGlzdDogW11cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlQ2hhbmdlKHRhc2tUZXh0KSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHRhc2tUZXh0OiB0YXNrVGV4dC50YXJnZXQudmFsdWUgfSlcclxuICAgIH1cclxuXHJcbiAgICBhZGRUYXNrID0gKCkgPT4ge1xyXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLnRhc2tUZXh0ID09PSAnJykge1xyXG4gICAgICAgICAgICByZXR1cm5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCB0YXNrc0FyciA9IHRoaXMuc3RhdGUudGFza0xpc3Q7XHJcbiAgICAgICAgdGFza3NBcnIucHVzaCh0aGlzLnN0YXRlLnRhc2tUZXh0KTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgdGFza0xpc3Q6IHRhc2tzQXJyIH0pO1xyXG4gICAgICAgIHRoaXMudGFza1RleHRJbnB1dC5mb2N1cygpO1xyXG4gICAgICAgIHRoaXMudGFza1RleHRJbnB1dC52YWx1ZSA9ICcnO1xyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZUtleVByZXNzID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgaWYgKGV2ZW50LmtleSA9PT0gJ0VudGVyJykge1xyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZGVsZXRlVGFzayhpbmRleCkge1xyXG4gICAgICAgIGxldCB0YXNrQXJyID0gdGhpcy5zdGF0ZS50YXNrTGlzdDtcclxuICAgICAgICB0YXNrQXJyLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHRhc2tMaXN0OiB0YXNrQXJyIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBpZiAodGhpcy5zdGF0ZS50YXNrTGlzdCA9PT0gJycpIHsgcmV0dXJuIH1cclxuXHJcbiAgICAgICAgbGV0IHRhc2tMaXN0ID0gdGhpcy5zdGF0ZS50YXNrTGlzdC5tYXAoKHZhbCwga2V5KSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiA8VGFza0xpc3Qga2V5PXtrZXl9IHRleHQ9e3ZhbH0gZGVsZXRlTWV0aG9kPXsoKSA9PiB0aGlzLmRlbGV0ZVRhc2soa2V5KX0gLz5cclxuICAgICAgICB9KTtcclxuXHJcblxyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiID5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlzdFwiID5cclxuICAgICAgICAgICAgICAgICAgICB7dGFza0xpc3R9XHJcblxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImlucHV0XCIgaWQ9XCJpbnB1dFwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCB0ZXh0LWNlbnRlclwiIG9uQ2hhbmdlPXt0YXNrVGV4dCA9PiB0aGlzLmhhbmRsZUNoYW5nZSh0YXNrVGV4dCl9XHJcbiAgICAgICAgICAgICAgICAgICAgcmVmPXsocmVmKSA9PiB0aGlzLnRhc2tUZXh0SW5wdXQgPSByZWZ9IHZhbHVlPXt0aGlzLnN0YXRlLnRhc2t0ZXh0fSBwbGFjZWhvbGRlcj1cIkVudGVyIHlvdXIgdGFza3MgaGVyZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgb25LZXlQcmVzcz17dGhpcy5oYW5kbGVLZXlQcmVzcy5iaW5kKHRoaXMpfSAvPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi1tZCBtdC0xIFwiIG9uQ2xpY2s9e3RoaXMuYWRkVGFza30gPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1wbHVzIGZhLW1kXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcblxyXG4gICAgICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbnB1dCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBza3libHVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBgfTwvc3R5bGU+XHJcblxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuIl19 */\n/*@ sourceURL=C:\\Users\\user\\Documents\\toDo-List\\components\\input.jsx */"));
    }
  }]);

  return Input;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);



/***/ })

})
//# sourceMappingURL=index.js.3fecc46b076004eef93b.hot-update.js.map