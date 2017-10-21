webpackHotUpdate(0,{

/***/ 261:
/***/ function(module, exports, __webpack_require__) {

	eval("/* WEBPACK VAR INJECTION */(function(module) {'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _index = __webpack_require__(661);\n\nvar _index2 = _interopRequireDefault(_index);\n\nvar _index3 = __webpack_require__(648);\n\nvar _index4 = _interopRequireDefault(_index3);\n\nvar _react2 = __webpack_require__(48);\n\nvar _react3 = _interopRequireDefault(_react2);\n\nvar _index5 = __webpack_require__(649);\n\nvar _index6 = _interopRequireDefault(_index5);\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _reactRedux = __webpack_require__(247);\n\nvar _actions = __webpack_require__(166);\n\nvar _Picker = __webpack_require__(259);\n\nvar _Picker2 = _interopRequireDefault(_Picker);\n\nvar _Posts = __webpack_require__(260);\n\nvar _Posts2 = _interopRequireDefault(_Posts);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _components = {\n  App: {\n    displayName: 'App'\n  }\n};\n\nvar _UsersChimyDesktopReactReduxBook16AsyncNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({\n  filename: '/Users/chimy/Desktop/react-redux-book/16-async/containers/App.js',\n  components: _components,\n  locals: [module],\n  imports: [_react3.default]\n});\n\nvar _UsersChimyDesktopReactReduxBook16AsyncNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({\n  filename: '/Users/chimy/Desktop/react-redux-book/16-async/containers/App.js',\n  components: _components,\n  locals: [],\n  imports: [_react3.default, _index2.default]\n});\n\nfunction _wrapComponent(id) {\n  return function (Component) {\n    return _UsersChimyDesktopReactReduxBook16AsyncNode_modulesReactTransformHmrLibIndexJs2(_UsersChimyDesktopReactReduxBook16AsyncNode_modulesReactTransformCatchErrorsLibIndexJs2(Component, id), id);\n  };\n}\n\nvar App = _wrapComponent('App')(function (_Component) {\n  _inherits(App, _Component);\n\n  function App(props) {\n    _classCallCheck(this, App);\n\n    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));\n\n    _this.handleChange = _this.handleChange.bind(_this);\n    _this.handleRefreshClick = _this.handleRefreshClick.bind(_this);\n    return _this;\n  }\n\n  _createClass(App, [{\n    key: 'componentDidMount',\n    value: function componentDidMount() {\n\n      console.log('执行componentDidMount');\n      var _props = this.props,\n          dispatch = _props.dispatch,\n          selectedReddit = _props.selectedReddit;\n\n\n      console.log(selectedReddit);\n      dispatch((0, _actions.fetchPostsIfNeeded)(selectedReddit));\n    }\n  }, {\n    key: 'componentWillReceiveProps',\n    value: function componentWillReceiveProps(nextProps) {\n      console.log('执行componentWillReceiveProps', nextProps);\n      if (nextProps.selectedReddit !== this.props.selectedReddit) {\n        var dispatch = nextProps.dispatch,\n            selectedReddit = nextProps.selectedReddit;\n\n        dispatch((0, _actions.fetchPostsIfNeeded)(selectedReddit));\n      }\n    }\n  }, {\n    key: 'handleChange',\n    value: function handleChange(nextReddit) {\n      console.log('handleChange');\n      this.props.dispatch((0, _actions.selectReddit)(nextReddit));\n    }\n  }, {\n    key: 'handleRefreshClick',\n    value: function handleRefreshClick(e) {\n      e.preventDefault();\n      console.log('handleRefreshClick');\n      var _props2 = this.props,\n          dispatch = _props2.dispatch,\n          selectedReddit = _props2.selectedReddit;\n\n      dispatch((0, _actions.invalidateReddit)(selectedReddit));\n      dispatch((0, _actions.fetchPostsIfNeeded)(selectedReddit));\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      console.log('render');\n      var _props3 = this.props,\n          selectedReddit = _props3.selectedReddit,\n          posts = _props3.posts,\n          isFetching = _props3.isFetching,\n          lastUpdated = _props3.lastUpdated;\n\n\n      var isEmpty = posts.length === 0;\n      var message = isFetching ? _react3.default.createElement(\n        'h2',\n        null,\n        'Loading...'\n      ) : _react3.default.createElement(\n        'h2',\n        null,\n        'Empty.'\n      );\n      return _react3.default.createElement(\n        'div',\n        null,\n        _react3.default.createElement(_Picker2.default, {\n          value: selectedReddit,\n          onChange: this.handleChange,\n          options: ['reactjs', 'frontend']\n        }),\n        _react3.default.createElement(\n          'p',\n          null,\n          lastUpdated && _react3.default.createElement(\n            'span',\n            null,\n            'Last updated at ',\n            new Date(lastUpdated).toLocaleTimeString(),\n            '.',\n            ' '\n          ),\n          !isFetching && _react3.default.createElement(\n            'a',\n            {\n              href: '#',\n              onClick: this.handleRefreshClick\n            },\n            'Refresh'\n          )\n        ),\n        isEmpty ? message : _react3.default.createElement(\n          'div',\n          { style: { opacity: isFetching ? 0.5 : 1 } },\n          _react3.default.createElement(_Posts2.default, { posts: posts })\n        )\n      );\n    }\n  }]);\n\n  return App;\n}(_react2.Component));\n\nApp.propTypes = {\n  selectedReddit: _react2.PropTypes.string.isRequired,\n  posts: _react2.PropTypes.array.isRequired,\n  isFetching: _react2.PropTypes.bool.isRequired,\n  lastUpdated: _react2.PropTypes.number,\n  dispatch: _react2.PropTypes.func.isRequired\n};\n\nfunction mapStateToProps(state) {\n  console.log('mapStateToProps');\n  console.log(state);\n  var selectedReddit = state.selectedReddit,\n      postsByReddit = state.postsByReddit;\n\n  var _ref = postsByReddit[selectedReddit] || {\n    isFetching: true,\n    items: []\n  },\n      isFetching = _ref.isFetching,\n      lastUpdated = _ref.lastUpdated,\n      posts = _ref.items;\n\n  return {\n    selectedReddit: selectedReddit,\n    posts: posts,\n    isFetching: isFetching,\n    lastUpdated: lastUpdated\n  };\n}\n\nexports.default = (0, _reactRedux.connect)(mapStateToProps)(App);\n/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(83)(module)))//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjYxLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2NvbnRhaW5lcnMvQXBwLmpzPzUxODUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCwgUHJvcFR5cGVzIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IHNlbGVjdFJlZGRpdCwgZmV0Y2hQb3N0c0lmTmVlZGVkLCBpbnZhbGlkYXRlUmVkZGl0IH0gZnJvbSAnLi4vYWN0aW9ucyc7XG5pbXBvcnQgUGlja2VyIGZyb20gJy4uL2NvbXBvbmVudHMvUGlja2VyJztcbmltcG9ydCBQb3N0cyBmcm9tICcuLi9jb21wb25lbnRzL1Bvc3RzJztcblxuY2xhc3MgQXBwIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5oYW5kbGVDaGFuZ2UgPSB0aGlzLmhhbmRsZUNoYW5nZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuaGFuZGxlUmVmcmVzaENsaWNrID0gdGhpcy5oYW5kbGVSZWZyZXNoQ2xpY2suYmluZCh0aGlzKTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuXG4gICAgY29uc29sZS5sb2coJ+aJp+ihjGNvbXBvbmVudERpZE1vdW50Jyk7XG4gICAgY29uc3QgeyBkaXNwYXRjaCwgc2VsZWN0ZWRSZWRkaXQgfSA9IHRoaXMucHJvcHM7XG5cbiAgICBjb25zb2xlLmxvZyhzZWxlY3RlZFJlZGRpdCk7XG4gICAgZGlzcGF0Y2goZmV0Y2hQb3N0c0lmTmVlZGVkKHNlbGVjdGVkUmVkZGl0KSk7XG4gIH1cblxuICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuICAgIGNvbnNvbGUubG9nKCfmiafooYxjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzJywgbmV4dFByb3BzKTtcbiAgICBpZiAobmV4dFByb3BzLnNlbGVjdGVkUmVkZGl0ICE9PSB0aGlzLnByb3BzLnNlbGVjdGVkUmVkZGl0KSB7XG4gICAgICBjb25zdCB7IGRpc3BhdGNoLCBzZWxlY3RlZFJlZGRpdCB9ID0gbmV4dFByb3BzO1xuICAgICAgZGlzcGF0Y2goZmV0Y2hQb3N0c0lmTmVlZGVkKHNlbGVjdGVkUmVkZGl0KSk7XG4gICAgfVxuICB9XG5cbiAgaGFuZGxlQ2hhbmdlKG5leHRSZWRkaXQpIHtcbiAgICBjb25zb2xlLmxvZygnaGFuZGxlQ2hhbmdlJyk7XG4gICAgdGhpcy5wcm9wcy5kaXNwYXRjaChzZWxlY3RSZWRkaXQobmV4dFJlZGRpdCkpO1xuICB9XG5cbiAgaGFuZGxlUmVmcmVzaENsaWNrKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc29sZS5sb2coJ2hhbmRsZVJlZnJlc2hDbGljaycpO1xuICAgIGNvbnN0IHsgZGlzcGF0Y2gsIHNlbGVjdGVkUmVkZGl0IH0gPSB0aGlzLnByb3BzO1xuICAgIGRpc3BhdGNoKGludmFsaWRhdGVSZWRkaXQoc2VsZWN0ZWRSZWRkaXQpKTtcbiAgICBkaXNwYXRjaChmZXRjaFBvc3RzSWZOZWVkZWQoc2VsZWN0ZWRSZWRkaXQpKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zb2xlLmxvZygncmVuZGVyJyk7XG4gICAgY29uc3QgeyBzZWxlY3RlZFJlZGRpdCwgcG9zdHMsIGlzRmV0Y2hpbmcsIGxhc3RVcGRhdGVkIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgY29uc3QgaXNFbXB0eSA9IHBvc3RzLmxlbmd0aCA9PT0gMDtcbiAgICBjb25zdCBtZXNzYWdlID0gaXNGZXRjaGluZyA/IDxoMj5Mb2FkaW5nLi4uPC9oMj4gOiA8aDI+RW1wdHkuPC9oMj47XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxQaWNrZXJcbiAgICAgICAgICB2YWx1ZT17c2VsZWN0ZWRSZWRkaXR9XG4gICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgIG9wdGlvbnM9e1sncmVhY3RqcycsICdmcm9udGVuZCddfVxuICAgICAgICAvPlxuICAgICAgICA8cD5cbiAgICAgICAgICB7bGFzdFVwZGF0ZWQgJiZcbiAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICBMYXN0IHVwZGF0ZWQgYXQge25ldyBEYXRlKGxhc3RVcGRhdGVkKS50b0xvY2FsZVRpbWVTdHJpbmcoKX0uXG4gICAgICAgICAgICAgIHsnICd9XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgfVxuICAgICAgICAgIHshaXNGZXRjaGluZyAmJlxuICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgaHJlZj1cIiNcIlxuICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZVJlZnJlc2hDbGlja31cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgUmVmcmVzaFxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIH1cbiAgICAgICAgPC9wPlxuICAgICAgICAgIHtpc0VtcHR5ID8gbWVzc2FnZSA6IDxkaXYgc3R5bGU9e3sgb3BhY2l0eTogaXNGZXRjaGluZyA/IDAuNSA6IDEgfX0+XG4gICAgICAgICAgICA8UG9zdHMgcG9zdHM9e3Bvc3RzfSAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIH1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuQXBwLnByb3BUeXBlcyA9IHtcbiAgc2VsZWN0ZWRSZWRkaXQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgcG9zdHM6IFByb3BUeXBlcy5hcnJheS5pc1JlcXVpcmVkLFxuICBpc0ZldGNoaW5nOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxuICBsYXN0VXBkYXRlZDogUHJvcFR5cGVzLm51bWJlcixcbiAgZGlzcGF0Y2g6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG59O1xuXG5mdW5jdGlvbiBtYXBTdGF0ZVRvUHJvcHMoc3RhdGUpIHtcbiAgY29uc29sZS5sb2coJ21hcFN0YXRlVG9Qcm9wcycpO1xuICBjb25zb2xlLmxvZyhzdGF0ZSk7XG4gIGNvbnN0IHsgc2VsZWN0ZWRSZWRkaXQsIHBvc3RzQnlSZWRkaXQgfSA9IHN0YXRlO1xuICBjb25zdCB7XG4gICAgaXNGZXRjaGluZyxcbiAgICBsYXN0VXBkYXRlZCxcbiAgICBpdGVtczogcG9zdHMsXG4gIH0gPSBwb3N0c0J5UmVkZGl0W3NlbGVjdGVkUmVkZGl0XSB8fCB7XG4gICAgaXNGZXRjaGluZzogdHJ1ZSxcbiAgICBpdGVtczogW10sXG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBzZWxlY3RlZFJlZGRpdCxcbiAgICBwb3N0cyxcbiAgICBpc0ZldGNoaW5nLFxuICAgIGxhc3RVcGRhdGVkLFxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcykoQXBwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBjb250YWluZXJzL0FwcC5qcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUlBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUZBO0FBQUE7QUFBQTtBQUNBO0FBR0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFFQTtBQUZBO0FBS0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBQUE7QUFBQTtBQVJBO0FBZ0JBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUF0QkE7QUE0QkE7Ozs7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBQ0E7QUFPQTtBQUNBO0FBQ0E7QUFGQTtBQUFBO0FBQ0E7QUFEQTtBQVNBO0FBQ0E7QUFGQTtBQVJBO0FBQUE7QUFBQTtBQUNBO0FBWUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7QUFDQTs7Iiwic291cmNlUm9vdCI6IiJ9");

/***/ }

})