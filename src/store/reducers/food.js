import * as actionTypes from './../actions/actionTypes';
import { updateObject } from './../../utils/Methods/updateObject';

const initialState = {
	restaurantId: undefined,
	tableId: undefined,
	categoriesDetails: [],
	loading: false,
	error: null,
	qrCodeScanned: false,
	orders: [],
	orders_total_price: 0,
	orders_total_quantity: 0,
	addition_asked: false,
	currentFood: {},
};

const initializeRestaurantTableIds = (state, action) => {
	return updateObject(state, {
		restaurantId: action.payload.restaurantId,
		tableId: action.payload.tableId,
	})
};

const requestStart = (state, action) => {
	return updateObject(state, {
		loading: true
	})
};

const fetchFoodSuccess = (state, action) => {
	return updateObject(state, {
		categoriesDetails: action.data.infos,
		loading: false,
		error: null,
		qrCodeScanned: true,
	})
};

const postOrder = (state, action) => {
	const orders = [...state.orders];
	orders.push(action.data);
	return updateObject(state, {
		loading: false,
		error: null,
		orders: orders,
		orders_total_price: orders.reduce((acc, order) => acc + parseInt(order.price), 0),
		orders_total_quantity: orders.length
	})
};

const checkStatus = (state, action) => {
	const orders = [...state.orders];
	const orderIndex = orders.findIndex(order => order.id === action.data.id);
	orders[orderIndex].status = action.data.status;
	return updateObject(state, {
		loading: false,
		error: null,
		orders: orders,
		orders_total_price: orders.reduce((acc, order) => acc + parseInt(order.price), 0),
		orders_total_quantity: orders.length
	})
};



const requestFail = (state, action) => {
	return updateObject(state, {
		loading: false,
		error: action.error.message,
	})
};

const deleteOrder = (state, action) => {
	const newOrders = [...state.orders];
	const index = newOrders.findIndex(order => order.id === action.orderId);
	if (index !== - 1) {
		newOrders.splice(index, 1);
	}
	return updateObject(state, {
		orders: newOrders
	})
};

const removeAllOrders = (state, action) => {
	return updateObject(state, {
		orders: [],
	})
};

const createAddition = (state, action) => {
	return updateObject(state, {
		addition_asked: true,
	})
};

const setCurrentFood = (state, action) => {
	return updateObject(state, {
		currentFood: action.food,
	})
};

const reducer = (state = initialState, action) => {
	switch(action.type) {
		case actionTypes.INITIALIZE_RESTAURANT_TABLE_IDS:
		 	return initializeRestaurantTableIds(state, action);
		case actionTypes.REQUEST_START:
			return requestStart(state, action);
		case actionTypes.FETCH_FOOD_SUCCESS:
			return fetchFoodSuccess(state, action);
		case actionTypes.GET_ORDERS_STATUS:
			return checkStatus(state, action);
		case actionTypes.POST_ORDER_SUCCESS:
			return postOrder(state, action);
		case actionTypes.REQUEST_FAIL:
			return requestFail(state, action);
		case actionTypes.DELETE_ORDER:
			return deleteOrder(state, action);
		case actionTypes.REMOVE_ALL_ORDERS:
			 return removeAllOrders(state, action);
		case actionTypes.RESET_DATA:
			return initialState;
		case actionTypes.ASK_ADDITION:
			return createAddition(state, action);
		case actionTypes.SET_CURRENT_FOOD:
			return setCurrentFood(state, action);
		default:
			return state;
	}
};

export default reducer;