/**
 * 纯函数
 * 接受两个参数，一个是原有的state
 * 一个是action对象，根据action的type参数决定返回的state
 * 纯函数，返回一个新的state
 *
 * @param state
 * @param action
 */
export default function counter(state=0,action) {

  switch (action.type){
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
}
