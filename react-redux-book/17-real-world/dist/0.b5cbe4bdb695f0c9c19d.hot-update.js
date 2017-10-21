webpackHotUpdate(0,{

/***/ 121:
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _actions = __webpack_require__(120);\n\nvar ActionTypes = _interopRequireWildcard(_actions);\n\nvar _merge = __webpack_require__(342);\n\nvar _merge2 = _interopRequireDefault(_merge);\n\nvar _paginate = __webpack_require__(407);\n\nvar _paginate2 = _interopRequireDefault(_paginate);\n\nvar _reactRouterRedux = __webpack_require__(375);\n\nvar _redux = __webpack_require__(162);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }\n\n// Updates an entity cache in response to any action with response.entities.\nfunction entities() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { users: {}, repos: {} };\n  var action = arguments[1];\n\n  if (action.response && action.response.entities) {\n    //merge 类似于 Object.assign   返回一个新的对象\n    return (0, _merge2.default)({}, state, action.response.entities);\n  }\n\n  return state;\n}\n\n// Updates error message to notify about the failed fetches.\nfunction errorMessage() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;\n  var action = arguments[1];\n  var type = action.type,\n      error = action.error;\n\n\n  if (type === ActionTypes.RESET_ERROR_MESSAGE) {\n    return null;\n  } else if (error) {\n    return action.error;\n  }\n\n  return state;\n}\n\n// Updates the pagination data for different actions.\nvar pagination = (0, _redux.combineReducers)({\n  starredByUser: (0, _paginate2.default)({\n    mapActionToKey: function mapActionToKey(action) {\n      return action.login;\n    },\n    types: [ActionTypes.STARRED_REQUEST, ActionTypes.STARRED_SUCCESS, ActionTypes.STARRED_FAILURE]\n  }),\n  stargazersByRepo: (0, _paginate2.default)({\n    mapActionToKey: function mapActionToKey(action) {\n      return action.fullName;\n    },\n    types: [ActionTypes.STARGAZERS_REQUEST, ActionTypes.STARGAZERS_SUCCESS, ActionTypes.STARGAZERS_FAILURE]\n  })\n});\n\nvar rootReducer = (0, _redux.combineReducers)({\n  entities: entities,\n  pagination: pagination,\n  errorMessage: errorMessage,\n  routing: _reactRouterRedux.routerReducer\n});\n\nexports.default = rootReducer;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTIxLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3JlZHVjZXJzL2luZGV4LmpzP2ZmNjYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgQWN0aW9uVHlwZXMgZnJvbSAnLi4vYWN0aW9ucyc7XG5pbXBvcnQgbWVyZ2UgZnJvbSAnbG9kYXNoL21lcmdlJztcbmltcG9ydCBwYWdpbmF0ZSBmcm9tICcuL3BhZ2luYXRlJztcbmltcG9ydCB7IHJvdXRlclJlZHVjZXIgYXMgcm91dGluZyB9IGZyb20gJ3JlYWN0LXJvdXRlci1yZWR1eCc7XG5pbXBvcnQgeyBjb21iaW5lUmVkdWNlcnMgfSBmcm9tICdyZWR1eCc7XG5cbi8vIFVwZGF0ZXMgYW4gZW50aXR5IGNhY2hlIGluIHJlc3BvbnNlIHRvIGFueSBhY3Rpb24gd2l0aCByZXNwb25zZS5lbnRpdGllcy5cbmZ1bmN0aW9uIGVudGl0aWVzKHN0YXRlID0geyB1c2Vyczoge30sIHJlcG9zOiB7fSB9LCBhY3Rpb24pIHtcbiAgaWYgKGFjdGlvbi5yZXNwb25zZSAmJiBhY3Rpb24ucmVzcG9uc2UuZW50aXRpZXMpIHtcbiAgICAvL21lcmdlIOexu+S8vOS6jiBPYmplY3QuYXNzaWduICAg6L+U5Zue5LiA5Liq5paw55qE5a+56LGhXG4gICAgcmV0dXJuIG1lcmdlKHt9LCBzdGF0ZSwgYWN0aW9uLnJlc3BvbnNlLmVudGl0aWVzKTtcbiAgfVxuXG4gIHJldHVybiBzdGF0ZTtcbn1cblxuLy8gVXBkYXRlcyBlcnJvciBtZXNzYWdlIHRvIG5vdGlmeSBhYm91dCB0aGUgZmFpbGVkIGZldGNoZXMuXG5mdW5jdGlvbiBlcnJvck1lc3NhZ2Uoc3RhdGUgPSBudWxsLCBhY3Rpb24pIHtcbiAgY29uc3QgeyB0eXBlLCBlcnJvciB9ID0gYWN0aW9uO1xuXG4gIGlmICh0eXBlID09PSBBY3Rpb25UeXBlcy5SRVNFVF9FUlJPUl9NRVNTQUdFKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH0gZWxzZSBpZiAoZXJyb3IpIHtcbiAgICByZXR1cm4gYWN0aW9uLmVycm9yO1xuICB9XG5cbiAgcmV0dXJuIHN0YXRlO1xufVxuXG4vLyBVcGRhdGVzIHRoZSBwYWdpbmF0aW9uIGRhdGEgZm9yIGRpZmZlcmVudCBhY3Rpb25zLlxuY29uc3QgcGFnaW5hdGlvbiA9IGNvbWJpbmVSZWR1Y2Vycyh7XG4gIHN0YXJyZWRCeVVzZXI6IHBhZ2luYXRlKHtcbiAgICBtYXBBY3Rpb25Ub0tleTogYWN0aW9uID0+IGFjdGlvbi5sb2dpbixcbiAgICB0eXBlczogW1xuICAgICAgQWN0aW9uVHlwZXMuU1RBUlJFRF9SRVFVRVNULFxuICAgICAgQWN0aW9uVHlwZXMuU1RBUlJFRF9TVUNDRVNTLFxuICAgICAgQWN0aW9uVHlwZXMuU1RBUlJFRF9GQUlMVVJFLFxuICAgIF0sXG4gIH0pLFxuICBzdGFyZ2F6ZXJzQnlSZXBvOiBwYWdpbmF0ZSh7XG4gICAgbWFwQWN0aW9uVG9LZXk6IGFjdGlvbiA9PiBhY3Rpb24uZnVsbE5hbWUsXG4gICAgdHlwZXM6IFtcbiAgICAgIEFjdGlvblR5cGVzLlNUQVJHQVpFUlNfUkVRVUVTVCxcbiAgICAgIEFjdGlvblR5cGVzLlNUQVJHQVpFUlNfU1VDQ0VTUyxcbiAgICAgIEFjdGlvblR5cGVzLlNUQVJHQVpFUlNfRkFJTFVSRSxcbiAgICBdLFxuICB9KSxcbn0pO1xuXG5jb25zdCByb290UmVkdWNlciA9IGNvbWJpbmVSZWR1Y2Vycyh7XG4gIGVudGl0aWVzLFxuICBwYWdpbmF0aW9uLFxuICBlcnJvck1lc3NhZ2UsXG4gIHJvdXRpbmcsXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgcm9vdFJlZHVjZXI7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gcmVkdWNlcnMvaW5kZXguanMiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7Ozs7O0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFGQTtBQVFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFGQTtBQVRBO0FBQ0E7QUFrQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBQ0E7QUFNQSIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ }

})