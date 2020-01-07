import * as actionTypes from './actionTypes';
import axios from './../../adminAxios';


export const fetchUsers = (data) => {
 	return {
 		type: actionTypes.FETCH_USERS,
 		data: data
 	}
};

export const fetchCategories = (data) => {
 	return {
 		type: actionTypes.FETCH_CATEGORIES,
 		data: data
 	}
};

export const fetchRestaurants = (data) => {
 	return {
 		type: actionTypes.FETCH_RESTAURANTS,
 		data: data
 	}
};

export const fetchOrders = (data) => {
 	return {
 		type: actionTypes.FETCH_ORDERS,
 		data: data
 	}
};

export const fetchTables = (data) => {
 	return {
 		type: actionTypes.FETCH_TABLES,
 		data: data
 	}
};
export const fetchAdditions = (data) => {
 	return {
 		type: actionTypes.FETCH_ADDITIONS,
 		data: data
 	}
};

export const getData = (url) => {
	return dispatch => {
		axios.get(url)
		.then(({data}) => {
			console.log(data);
			switch(url) {
				case '/user/':
					dispatch(fetchUsers(data));
					break;
				case '/category/':
					dispatch(fetchCategories(data));
					break;
				case '/restaurant/':
					dispatch(fetchRestaurants(data));
					break;
				case '/order/':
					dispatch(fetchOrders(data));
					break;
				case '/table/':
					dispatch(fetchTables(data));
					break;
				case '/addition/':
					dispatch(fetchAdditions(data));
					break;
			}
		}).catch(error => {
			console.log(error.message);
		})
	}
};

