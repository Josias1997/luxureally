import * as actionTypes from './adminActionTypes';
import axios from './../../instanceAxios';


export const fetchData = (data, url) => {
	switch(url) {
		case '/user/':
			return {
		 		type: actionTypes.FETCH_USERS,
		 		data: data
		 	}
		case '/category/':
		 	return {
		 		type: actionTypes.FETCH_CATEGORIES,
		 		data: data
		 	}
		case '/restaurant/':
			return {
		 		type: actionTypes.FETCH_RESTAURANTS,
		 		data: data
		 	}
		case '/order/':
		 	return {
		 		type: actionTypes.FETCH_ORDERS,
		 		data: data
 			}
		case '/table/':
		 	return {
		 		type: actionTypes.FETCH_TABLES,
		 		data: data
		 	}
		case '/addition/':
			return {
		 		type: actionTypes.FETCH_ADDITIONS,
		 		data: data
	 		}
			break;
		case '/food/':
			return {
		 		type: actionTypes.FETCH_FOODS,
		 		data: data
			 };
		case '/delivery/':
			return {
				type: actionTypes.FETCH_DELIVERIES,
				data: data,
			}
 		default:
 			break;
	}
};

export const createData = (data, url) => {
	switch(url) {
		case '/user/':
			return {
		 		type: actionTypes.CREATE_USER,
		 		data: data
		 	}
		case '/category/':
		 	return {
		 		type: actionTypes.CREATE_CATEGORIE,
		 		data: data
		 	}
		case '/restaurant/':
			return {
		 		type: actionTypes.CREATE_RESTAURANT,
		 		data: data
		 	}
		case '/order/':
		 	return {
		 		type: actionTypes.CREATE_ORDER,
		 		data: data
 			}
		case '/table/':
		 	return {
		 		type: actionTypes.CREATE_TABLE,
		 		data: data
		 	}
		case '/addition/':
			return {
		 		type: actionTypes.CREATE_ADDITION,
		 		data: data
	 		}
			break;
		case '/food/':
			return {
		 		type: actionTypes.CREATE_FOOD,
		 		data: data
			 };
			 case '/delivery/':
					return {
						type: actionTypes.CREATE_DELIVERY,
						data: data,
					}
 		default:
 			break;
	}
};

export const updateData = (data, url) => {
	switch(url) {
		case '/user/':
			return {
		 		type: actionTypes.UPDATE_USER,
		 		data: data
		 	}
		case '/category/':
		 	return {
		 		type: actionTypes.UPDATE_CATEGORIE,
		 		data: data
		 	}
		case '/restaurant/':
			return {
		 		type: actionTypes.UPDATE_RESTAURANT,
		 		data: data
		 	}
		case '/order/':
		 	return {
		 		type: actionTypes.UPDATE_ORDER,
		 		data: data
 			}
		case '/table/':
		 	return {
		 		type: actionTypes.UPDATE_TABLE,
		 		data: data
		 	}
		case '/addition/':
			return {
		 		type: actionTypes.UPDATE_ADDITION,
		 		data: data
	 		}
			break;
		case '/food/':
			return {
		 		type: actionTypes.UPDATE_FOOD,
		 		data: data
			 };
			 case '/delivery/':
					return {
						type: actionTypes.UPDATE_DELIVERY,
						data: data,
					}
 		default:
 			break;
	}
};

export const deleteData = (data, url) => {
	switch(url) {
		case '/user/':
			return {
		 		type: actionTypes.DELETE_USER,
		 		data: data
		 	}
		case '/category/':
		 	return {
		 		type: actionTypes.DELETE_CATEGORIE,
		 		data: data
		 	}
		case '/restaurant/':
			return {
		 		type: actionTypes.DELETE_RESTAURANT,
		 		data: data
		 	}
		case '/order/':
		 	return {
		 		type: actionTypes.DELETE_ORDER,
		 		data: data
 			}
		case '/table/':
		 	return {
		 		type: actionTypes.DELETE_TABLE,
		 		data: data
		 	}
		case '/addition/':
			return {
		 		type: actionTypes.DELETE_ADDITION,
		 		data: data
	 		}
			break;
		case '/food/':
			return {
		 		type: actionTypes.DELETE_FOOD,
		 		data: data
			 };
			 case '/delivery/':
				return {
					type: actionTypes.DELETE_DELIVERY,
					data: data,
				}
 		default:
 			break;
	}
};


export const fetch = (url) => {
	return dispatch => {
		axios.get(url)
		.then(({data}) => {
			console.log(data);
			dispatch(fetchData(data, url))
		}).catch(error => {
			console.log(error.message);
		})
	}
};


export const create = (url, payload) => {
	return dispatch => {
		axios.post(url, payload)
		.then(({data}) => {
			console.log(data);
			dispatch(createData(data, url))
		}).catch(error => {
			console.log(error.message);
		})
	}
};

export const update = (url, payload) => {
	return dispatch => {
		axios.put(url, payload)
		.then(({data}) => {
			console.log(data);
			dispatch(updateData(data, url))
		}).catch(error => {
			console.log(error.message);
		})
	}
};

export const del = url => {
	return dispatch => {
		axios.delete(url)
		.then(({data}) => {
			console.log(data);
			dispatch(deleteData(data, url))
		}).catch(error => {
			console.log(error.message);
		})
	}
};

