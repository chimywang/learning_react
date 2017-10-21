import { combineReducers } from 'redux';
import undoable, { includeAction } from 'redux-undo';
import counter from './counter';
import { INCREMENT_COUNTER, DECREMENT_COUNTER, UNDO_COUNTER, REDO_COUNTER } from '../actions';
/**
 *undoable是个高阶函数，这意味着可以使用函数作为他的参数，然后生成一个新的函数
 *
 *
 * filter 用于指定创建了一个更高级的reducer，这里只是撤销和重做action
 *
 * limit是次数限制   当撤销或者重做的次数超过这个指定值，将无法继续撤销或者重做
 *
 * debug：用于设定是否调试代码，激活状态下会打印相关的信息
 *
 * undoType和redoType 是撤销和重做的action，如此以来，只需要触发撤销／重做action，便可以实现撤销／重做功能。
 */
const rootReducer = combineReducers({
  counter: undoable(counter, {
    filter: includeAction([INCREMENT_COUNTER, DECREMENT_COUNTER]),
    limit: 10,
    debug: true,
    undoType: UNDO_COUNTER,
    redoType: REDO_COUNTER
  })
});

export default rootReducer;
