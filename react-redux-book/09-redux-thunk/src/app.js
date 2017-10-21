import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

//action创建函数，返回action
function increment() {
  return { type: 'INCREMENT' };
}
//action创建函数，返回action
function decrement() {
  return { type: 'DECREMENT' };
}


/**
 * 奇偶判断函数，奇数加一
 * @returns {function(*, *)}
 */
function incrementIfOdd() {
  return (dispatch, getState) => {
    const value = getState();
    if (value % 2 === 0) {
      return;
    }

    dispatch(increment());
  };
}
/**
 * 延迟加载函数
 * @param delay
 * @returns {function(*)}
 */
function incrementAsync(delay = 1000) {
  return dispatch => {
    setTimeout(() => {
      dispatch(increment());
    }, delay);
  };
}

/**
 * 纯函数（state,action）=>state
 * @param state
 * @param action
 * @returns {number}
 */
function counter(state = 0, action) {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
}

/**
 * 激活thunk和applyMiddleware
 */
const store = createStore(counter, applyMiddleware(thunk));

let currentValue = store.getState();
/**
 * 监听变化
 */
store.subscribe(() => {
  const previousValue = currentValue;
  currentValue = store.getState();
  console.log('pre state:', previousValue, 'next state:', currentValue);
}
);

store.dispatch(increment());

store.dispatch(incrementIfOdd());

store.dispatch(incrementAsync());

store.dispatch(decrement());
