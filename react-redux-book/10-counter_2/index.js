

/**
 *
 *
 * 用于连接redux 和React
 *
 *
 */
//引入依赖
import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import Counter from './components/Counter';
import counter from './reducers'

//创建store
const store = createStore(counter);

function render() {
  ReactDOM.render(
    <Counter value={store.getState()}
             onIncrement={()=>store.dispatch({type:'INCREMENT'})}
             onDecrement={()=>store.dispatch({type:'DECREMENT'})}/>,document.getElementById('root')
  );
}

render();
store.subscribe(render);




