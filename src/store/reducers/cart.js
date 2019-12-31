import * as actionTypes from './../actions/actionTypes';

const initialState = {
	cartItems: [],
	totalQuantity: 0,
	totalPrice: 0,
};

const reducer = (state = initialState, action) => {
	switch(action.type) {
		case actionTypes.ADD_ITEM_TO_CART:
			console.log(action.item);
			let newItems = [...state.cartItems]
			let itemIndex = newItems.findIndex(item => item.id === action.item.id);
			if (itemIndex !== -1) {
				newItems[itemIndex].quantity++;
			} else {
				newItems.push({
					...action.item,
					quantity: 1,
				})
			}
			console.log(state.cartItems);
			return {
				...state,
				cartItems: newItems,
				totalQuantity: state.totalQuantity + 1,
				totalPrice: newItems.reduce((acc, item) => acc + (item.price * item.quantity), 0)
			};
		case actionTypes.UPDATE_CART_ITEMS:
			return {
				...state,
				cartItems: action.items,
				totalQuantity: action.items.reduce((acc, item) => acc + item.quantity, 0),
				totalPrice: action.items.reduce((acc, item) => acc + (item.price * item.quantity), 0)
			};
		case actionTypes.REMOVE_ITEMS:
			return initialState;
		default:
			return state;
	}
}; 

export default reducer;