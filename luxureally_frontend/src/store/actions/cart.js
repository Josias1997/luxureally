import * as actionTypes from './actionTypes';


export const addItemToCart = (item) => {
	return {
		type: actionTypes.ADD_ITEM_TO_CART,
		item: item,
	}
};

export const updateCart = (items) => {
	return {
		type: actionTypes.UPDATE_CART_ITEMS,
		items: items
	}
};

export const removeAllItems = () => {
	return {
		type: actionTypes.REMOVE_ITEMS,
	}
};

export const removeItem = (id) => {
	return {
		type: actionTypes.REMOVE_ITEM,
		id: id,
	}
};

export const updateItem = (id, quantity) => {
	return {
		type: actionTypes.UPDATE_ITEM,
		data: {
			id: id,
			quantity: quantity
		},
	}
};

export const setOrderType = (orderType) => {
	return {
		type: actionTypes.SET_ORDER_TYPE,
		orderType: orderType,
	}
};

	