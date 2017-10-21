import Counter from '../components/Counter';
import { connect } from 'react-redux';
import { increment, decrement, incrementIfOdd, incrementAsync } from '../actions';

/**
 * 第一个参数是参数为state的函数，该函数返回的对象被合并到组件的props中。
 *
 *
 *第二个参数是  参数为dispatch的函数，该函数返回的对象也会被合并到组件的props中。
 *
 *
 * 该写法不会自动为action创建函数绑定dispatch方法，需要手动绑定。
 *
 */
export default connect(
  state => ({ counter: state.counter }),
  dispatch => ({
    increment: () => dispatch(increment()),
    decrement: () => dispatch(decrement()),
    incrementIfOdd: () => dispatch(incrementIfOdd()),
    incrementAsync: () => dispatch(incrementAsync()),
  })
)(Counter);
