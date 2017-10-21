import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { increment, decrement, incrementIfOdd, incrementAsync } from '../actions';

/**
 * 第一个参数是参数为state的函数，该函数返回的对象被合并到组件的props中。
 *
 * 第二个参数为空
 *
 *
 * 此时connect（）  将会自动给组件传递一个dispatch，让组件自己使用dispatch来发起action创建函数
 * @param counter
 * @param dispatch
 * @returns {XML}
 * @constructor
 */
function Counter({ counter, dispatch }) {
  return (
    <p>
      Clicked: {counter} times
      {' '}
      <button onClick={() => dispatch(increment())}>+</button>
      {' '}
      <button onClick={() => dispatch(decrement())}>-</button>
      {' '}
      <button onClick={() => dispatch(incrementIfOdd())}>Increment if odd</button>
      {' '}
      <button onClick={() => dispatch(incrementAsync())}>Increment async</button>
    </p>
  );
}

Counter.propTypes = {
  counter: PropTypes.number.isRequired,
  dispatch: PropTypes.func.isRequired
};

export default connect(
  state => ({ counter: state.counter })
)(Counter);
