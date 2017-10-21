import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import * as ActionCreators from '../actions';

/**
 * 使用装饰器写法将connect写在组件的类声明上面。装饰器写法和前面的写法只是语法上的区别，其他并无二致
 *
 * 但是，如果使用装饰器写法，就不能使用无状态函数来编写组件了，因为装饰器需要添加在类的声明上。另外还必须使用static propTypes ={}这种静态属性的写法来声明props类型。
 *
 */
// 装饰器应该写在类声明上面
@connect(
  state => ({ counter: state.counter }),
  ActionCreators
)
class Counter extends Component { // eslint-disable-line

  static propTypes = {
    counter: PropTypes.number.isRequired,
    increment: PropTypes.func.isRequired,
    incrementIfOdd: PropTypes.func.isRequired,
    incrementAsync: PropTypes.func.isRequired,
    decrement: PropTypes.func.isRequired
  };

  render() {
    const { counter, increment, decrement, incrementIfOdd, incrementAsync } = this.props;
    return (
      <p>
        Clicked: {counter} times
        {' '}
        <button onClick={increment}>+</button>
        {' '}
        <button onClick={decrement}>-</button>
        {' '}
        <button onClick={incrementIfOdd}>Increment if odd</button>
        {' '}
        {/* 这里必须写成箭头函数，否则incrementAsync中的delay参数将会是SyntheticEvent的实例*/}
        <button onClick={() => incrementAsync()}>Increment async</button>
      </p>
    );  
  }
}

export default Counter;
