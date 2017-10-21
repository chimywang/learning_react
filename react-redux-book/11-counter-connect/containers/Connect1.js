import Counter from '../components/Counter';
import { connect } from 'react-redux';
import * as ActionCreators from '../actions';

/**
 * 第一个参数是参数为state的函数，该函数返回的对象被合并到组件的props中
 *
 *
 * 第二个参数是多个action创建函数组成的对象，该对象也会被合并到组件的props中
 */
export default connect(
  state => ({ counter: state.counter }),
  ActionCreators
)(Counter);
