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
}

	