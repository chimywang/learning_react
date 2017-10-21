import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Header from '../components/Header';
import MainSection from '../components/MainSection';
import * as TodoActions from '../actions';//action创建函数


/**
 * 顶层组件，纯函数，用于展示，
 * 通过connect让react于redux连接
 * @param todos
 * @param actions
 * @returns {XML}
 * @constructor
 */
function App({ todos, actions }) {

  return (
    <div>
      <Header addTodo={actions.addTodo} />
      <MainSection todos={todos} actions={actions} />
    </div>
  );
}

App.propTypes = {
  todos: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
};

/**
 * 该方法在connect中会
 * @param state
 * @returns {{todos: (*|Array)}}
 */
function mapStateToProps(state) {
  return {
    todos: state.todos,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(TodoActions, dispatch),
  };
}

export default connect(
  mapStateToProps,//参数为state的函数
  mapDispatchToProps//参数为dispatch的函数
)(App);
