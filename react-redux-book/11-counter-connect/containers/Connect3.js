import Counter from '../components/Counter';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as ActionCreators from '../actions';

/**
 * 第一个参数是参数为state的函数，该函数返回的对象被合并到组件的props中。
 *
 * 第二个参数是参数为dispatch的函数，但是函数的返回值使用了redux的bindActionCreator（）来减少样板代码。
 *
 */
export default connect(
  state => ({ counter: state.counter }),
  dispatch => bindActionCreators(ActionCreators, dispatch)
)(Counter);
