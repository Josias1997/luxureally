import * as actionTypes from './actionTypes';
import axios from '../../instanceAxios';

export const requestStart = () => {
	return {
		type: actionTypes.REQUEST_START,
	}
};

export const fetchFoodSuccess = (data) => {
	return {
		type: actionTypes.FETCH_FOOD_SUCCESS,
		data: data
	}
};

export const postOrderSuccess = (data) => {
	return {
		type: actionTypes.POST_ORDER_SUCCESS,
		data: data
	}
};

export const getOrdersStatus = (data) => {
	return {
		type: actionTypes.GET_ORDERS_STATUS,
		data: data
	}
};

export const requestFail = (error) => {
	return {
		type: actionTypes.REQUEST_FAIL,
		error: error
	}
};

export const askAddition = () => {
	return {
		type: actionTypes.ASK_ADDITION,
	}
};

export const getAddition = (data) => {
	return dispatch => {
		dispatch(requestStart());
		axios.post('/addition/', data)
			.then(data => {
				dispatch(askAddition());
			}).catch(error => {
				dispatch(requestFail(error));
		})
	}
};


export const fetchFood = (restaurantId) => {
	return dispatch => {
		dispatch(requestStart());
		axios.get('/foods/' + restaurantId)
		.then(({data}) => {
			dispatch(fetchFoodSuccess(data));
			window.location.reload();
		}).catch(error => {
			dispatch(requestFail(error));
		})
	}
};

export const postOrder = (order) => {
	return dispatch => {
		dispatch(requestStart());
		axios.post('/place-order/', order)
		.then(({data}) => {
			dispatch(postOrderSuccess(data));
		}).catch(error => {
			dispatch(requestFail(error));
		})
	}
};

export const ordersStatus = (orderId) => {
	return dispatch => {
		dispatch(requestStart());
		axios.get('/check-status/' + orderId)
		.then(({data}) => {
			dispatch(getOrdersStatus(data));
		}).catch(error => {
			dispatch(requestFail(error));
		})
	}
};

export const deleteAllOrders = () => {
	return {
		type: actionTypes.REMOVE_ALL_ORDERS,
	}
};

export const deleteOrder = orderId => {
	return {
		type: actionTypes.DELETE_ORDER,
		orderId: orderId,
	}
};

export const cancel = (orderId) => {
	return dispatch => {
		axios.delete('/cancel-order/' + orderId)
		.then(({data}) => {
			console.log(data);
			dispatch(deleteOrder(data.id));
		}).catch(error => {

		});
	}
};

export const initializeRestaurantTable = (restaurantId, tableId) => {
	return {
		type: actionTypes.INITIALIZE_RESTAURANT_TABLE_IDS,
		payload: {
			restaurantId: restaurantId,
			tableId: tableId,
		}
	}
};

export const reset = () => {
	return {
		type: actionTypes.RESET_DATA,
	}
}