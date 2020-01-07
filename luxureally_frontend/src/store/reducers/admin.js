import * as actionTypes from '../actions/actionTypes';
import { updateObject } from './../../utils/Methods/updateObject';

const initialState = {
	users: [],
	categories: [],
	foods: [],
	additions: [],
	tables: [],
	restaurants: [],
	orders: [],
}

const reducer = (state  = initialState, action) => {
	switch(action.type) {
		case actionTypes.FETCH_USERS:
			return updateObject(state, {
				users: action.data
			});
		case actionTypes.FETCH_CATEGORIES:
			return updateObject(state, {
				categories: action.data
			});
		case actionTypes.FETCH_FOODS:
			return updateObject(state, {
				foods: action.data
			});
		case actionTypes.FETCH_ADDITIONS:
			return updateObject(state, {
				additions: action.data
			});
		case actionTypes.FETCH_TABLES:
			return updateObject(state, {
				tables: action.data
			});
		case actionTypes.FETCH_RESTAURANTS:
			return updateObject(state, {
				restaurants: action.data
			});
		case actionTypes.FETCH_ORDERS:
			return updateObject(state, {
				orders: action.data
			})
		default:
			return state;
	}
};

export default reducer;