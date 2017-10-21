webpackHotUpdate(0,{

/***/ 109:
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _redux = __webpack_require__(165);\n\nvar _actions = __webpack_require__(166);\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction selectedReddit() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'reactjs';\n  var action = arguments[1];\n\n  console.log('selectedReddit');\n\n  switch (action.type) {\n    case _actions.SELECT_REDDIT:\n      return action.reddit;\n    default:\n      return state;\n  }\n}\n\nfunction posts() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {\n    isFetching: false,\n    didInvalidate: false,\n    items: []\n  };\n  var action = arguments[1];\n\n  console.log('posts');\n  switch (action.type) {\n    case _actions.INVALIDATE_REDDIT:\n      return Object.assign({}, state, {\n        didInvalidate: true\n      });\n    case _actions.REQUEST_POSTS:\n      return Object.assign({}, state, {\n        isFetching: true,\n        didInvalidate: false\n      });\n    case _actions.RECEIVE_POSTS:\n      return Object.assign({}, state, {\n        isFetching: false,\n        didInvalidate: false,\n        items: action.posts,\n        lastUpdated: action.receivedAt\n      });\n    default:\n      return state;\n  }\n}\n\nfunction postsByReddit() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n  var action = arguments[1];\n\n  console.log('postsByReddit');\n  console.log(action);\n  switch (action.type) {\n    case _actions.INVALIDATE_REDDIT:\n    case _actions.RECEIVE_POSTS:\n    case _actions.REQUEST_POSTS:\n      return Object.assign({}, state, _defineProperty({}, action.reddit, posts(state[action.reddit], action)));\n    default:\n      return state;\n  }\n}\n\nvar rootReducer = (0, _redux.combineReducers)({\n  postsByReddit: postsByReddit,\n  selectedReddit: selectedReddit\n});\n\nexports.default = rootReducer;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTA5LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3JlZHVjZXJzL2luZGV4LmpzP2ZmNjYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY29tYmluZVJlZHVjZXJzIH0gZnJvbSAncmVkdXgnO1xuaW1wb3J0IHtcbiAgU0VMRUNUX1JFRERJVCwgSU5WQUxJREFURV9SRURESVQsXG4gIFJFUVVFU1RfUE9TVFMsIFJFQ0VJVkVfUE9TVFMsXG59IGZyb20gJy4uL2FjdGlvbnMnO1xuXG5mdW5jdGlvbiBzZWxlY3RlZFJlZGRpdChzdGF0ZSA9ICdyZWFjdGpzJywgYWN0aW9uKSB7XG4gIGNvbnNvbGUubG9nKCdzZWxlY3RlZFJlZGRpdCcpO1xuXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIFNFTEVDVF9SRURESVQ6XG4gICAgICByZXR1cm4gYWN0aW9uLnJlZGRpdDtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9XG59XG5cbmZ1bmN0aW9uIHBvc3RzKHN0YXRlID0ge1xuICBpc0ZldGNoaW5nOiBmYWxzZSxcbiAgZGlkSW52YWxpZGF0ZTogZmFsc2UsXG4gIGl0ZW1zOiBbXSxcbn0sIGFjdGlvbikge1xuICBjb25zb2xlLmxvZygncG9zdHMnKTtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgSU5WQUxJREFURV9SRURESVQ6XG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgICAgZGlkSW52YWxpZGF0ZTogdHJ1ZSxcbiAgICAgIH0pO1xuICAgIGNhc2UgUkVRVUVTVF9QT1NUUzpcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuICAgICAgICBpc0ZldGNoaW5nOiB0cnVlLFxuICAgICAgICBkaWRJbnZhbGlkYXRlOiBmYWxzZSxcbiAgICAgIH0pO1xuICAgIGNhc2UgUkVDRUlWRV9QT1NUUzpcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuICAgICAgICBpc0ZldGNoaW5nOiBmYWxzZSxcbiAgICAgICAgZGlkSW52YWxpZGF0ZTogZmFsc2UsXG4gICAgICAgIGl0ZW1zOiBhY3Rpb24ucG9zdHMsXG4gICAgICAgIGxhc3RVcGRhdGVkOiBhY3Rpb24ucmVjZWl2ZWRBdCxcbiAgICAgIH0pO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGU7XG4gIH1cbn1cblxuZnVuY3Rpb24gcG9zdHNCeVJlZGRpdChzdGF0ZSA9IHsgfSwgYWN0aW9uKSB7XG4gIGNvbnNvbGUubG9nKCdwb3N0c0J5UmVkZGl0Jyk7XG4gIGNvbnNvbGUubG9nKGFjdGlvbik7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIElOVkFMSURBVEVfUkVERElUOlxuICAgIGNhc2UgUkVDRUlWRV9QT1NUUzpcbiAgICBjYXNlIFJFUVVFU1RfUE9TVFM6XG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgICAgW2FjdGlvbi5yZWRkaXRdOiBwb3N0cyhzdGF0ZVthY3Rpb24ucmVkZGl0XSwgYWN0aW9uKSxcbiAgICAgIH0pO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGU7XG4gIH1cbn1cblxuY29uc3Qgcm9vdFJlZHVjZXIgPSBjb21iaW5lUmVkdWNlcnMoe1xuICBwb3N0c0J5UmVkZGl0LFxuICBzZWxlY3RlZFJlZGRpdCxcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCByb290UmVkdWNlcjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyByZWR1Y2Vycy9pbmRleC5qcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7OztBQUlBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BO0FBQ0E7QUFDQTtBQUlBO0FBSEE7QUFDQTtBQUNBO0FBSEE7QUFJQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7QUFDQTtBQWxCQTtBQW9CQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFSQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUNBO0FBSUEiLCJzb3VyY2VSb290IjoiIn0=");

/***/ }

})