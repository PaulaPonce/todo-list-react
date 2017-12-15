import { ADD_TODO, DELETE_TODO, EDIT_TODO, COMPLETE_TODO, COMPLETE_ALL, CLEAR_COMPLETED } from '../constants/ActionTypes';

const initialState = [
	{
		text: 'learn redux',
		key: 0,
		completed: false
	}
]

function todos(state = initialState, action) {
	switch(action.type) {
		case ADD_TODO:
		return [
			...state,
			{
				completed: false,
				key: action.key,
				text: action.text
			}
		]
		case DELETE_TODO:
			return state.filter(todo => 
				todo.key !== action.key
			)
		case EDIT_TODO: 
			return state.map(todo =>
				todo.key === action.key ?
					{ ...todo, text: action.text} :
					todo
			)
		case COMPLETE_TODO:
			return state.map(todo=>
				todo.key === action.key ?
					{ ...todo, completed: !todo.completed} :
					todo
				)
		case COMPLETE_ALL:
			const areAllMArked = state.every(todo =>todo.completed)
			return state.map(todo => ({
				...todo,
				completed: !areAllMArked
			}))
		case CLEAR_COMPLETED:
			return state.filter(todo => todo.completed === false)
		default:
			return state
	}
}

export default todos