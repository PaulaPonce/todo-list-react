import * as types from '../constants/ActionTypes';

const addTodo = text => ({ type: types.ADD_TODO, text });
const deleteTodo = key => ({ type: types.DELETE_TODO, key });
const editTodo = (key, text) => ({ type: types.EDIT_TODO, key, text });
const completeTodo = key => ({ type: types.COMPLETE_TODO, key });
const completeAll = () => ({ type: types.COMPLETE_ALL });
const clearCompleted = () => ({ type: types.CLEAR_COMPLETED });

export default { addTodo, deleteTodo, editTodo, completeTodo, completeAll, clearCompleted };
