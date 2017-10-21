/**
 * 本组件相当于React组件和Redux的中间连接器
 */

import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
//react component
import Counter from './components/Counter';
//redux pure function
import counter from './reducers';
//create store
const store = createStore(counter);
//get html DOM
const rootEl = document.getElementById('root');

//render function
function render() {
  ReactDOM.render(
    <Counter
      value={store.getState()}//get state from store
      onIncrement={() => store.dispatch({ type: 'INCREMENT' })}//increment
      onDecrement={() => store.dispatch({ type: 'DECREMENT' })}//decrement
    />,
    rootEl
  );
}

//now render
render();
//watch the render
store.subscribe(render);
