import * as actionTypes from '../actions/adminActionTypes';
import { updateObject } from './../../utils/Methods/updateObject';

const initialState = {
	users: [],
	categories: [],
	foods: [],
	additions: [],
	tables: [],
	restaurants: [],
	orders: [],
	deliveries: [],
	loading: false,
	error: null,
	notificationMessage: '',
	serviceWorker: null,
};

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
			});
			case actionTypes.FETCH_DELIVERIES:
			return updateObject(state, {
				deliveries: action.data
			});
		case actionTypes.DELETE_USER:
			return updateObject(state, {
				users: action.data
			});
		case actionTypes.DELETE_CATEGORY:
			return updateObject(state, {
				categories: action.data
			});
		case actionTypes.DELETE_FOOD:
			return updateObject(state, {
				foods: action.data
			});
		case actionTypes.DELETE_ADDITION:
			return updateObject(state, {
				additions: action.data
			});
		case actionTypes.DELETE_TABLE:
			return updateObject(state, {
				tables: action.data
			});
		case actionTypes.DELETE_RESTAURANT:
			return updateObject(state, {
				restaurants: action.data
			});
		case actionTypes.DELETE_ORDER:
			return updateObject(state, {
				orders: action.data
			})
		case actionTypes.DELETE_DELIVERY:
				return updateObject(state, {
					orders: action.data
				})
		case actionTypes.UPDATE_USER:
			return updateObject(state, {
				users: action.data
			});
		case actionTypes.UPDATE_CATEGORY:
			return updateObject(state, {
				categories: action.data
			});
		case actionTypes.UPDATE_FOOD:
			return updateObject(state, {
				foods: action.data
			});
		case actionTypes.UPDATE_ADDITION:
			return updateObject(state, {
				additions: action.data
			});
		case actionTypes.UPDATE_TABLE:
			return updateObject(state, {
				tables: action.data
			});
		case actionTypes.UPDATE_RESTAURANT:
			return updateObject(state, {
				restaurants: action.data
			});
		case actionTypes.UPDATE_ORDER:
			return updateObject(state, {
				orders: action.data
			})
			case actionTypes.UPDATE_DELIVERY:
				return updateObject(state, {
					orders: action.data
				})
		case actionTypes.CREATE_USER:
			return updateObject(state, {
				users: action.data
			});
		case actionTypes.CREATE_CATEGORY:
			return updateObject(state, {
				categories: action.data
			});
		case actionTypes.CREATE_FOOD:
			return updateObject(state, {
				foods: action.data
			});
		case actionTypes.CREATE_ADDITION:
			return updateObject(state, {
				additions: action.data
			});
		case actionTypes.CREATE_TABLE:
			return updateObject(state, {
				tables: action.data
			});
		case actionTypes.CREATE_RESTAURANT:
			return updateObject(state, {
				restaurants: action.data
			});
		case actionTypes.CREATE_ORDER:
			return updateObject(state, {
				orders: action.data
			})
		case actionTypes.CREATE_DELIVERY:
			return updateObject(state, {
					orders: action.data
			});
		case actionTypes.PROCESSING_REQUEST:
			return updateObject(state, {
				loading: true,
			})
		case actionTypes.REQUEST_FAILED:
			return updateObject(state, {
				loading: false,
				error: action.error.message
			})
		case actionTypes.REQUEST_SUCCEED:
			return updateObject(state, {
				loading: false,
			})
		case actionTypes.NOTIFY_USER:
			return updateObject(state, {
				notificationMessage: action.message
			})
		default:
			return state;
	}
};

export default reducer;