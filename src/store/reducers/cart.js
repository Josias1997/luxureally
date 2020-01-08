import * as actionTypes from './../actions/actionTypes';

const initialState = {
	cartItems: [],
	totalQuantity: 0,
	orderType: '',
};

const reducer = (state = initialState, action) => {
	switch(action.type) {
		case actionTypes.ADD_ITEM_TO_CART:
			console.log(action.item);
			let newItems = [...state.cartItems];
			let itemIndex = newItems.findIndex(item => item.id === action.item.id);
			if (itemIndex !== -1) {
				newItems[itemIndex].quantity++;
			} else {
				newItems.push({
					...action.item,
					quantity: 1,
				})
			}
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
		case actionTypes.REMOVE_ITEM:
			const updatedItems = [...state.cartItems];
			const itemToDeleteIndex = updatedItems.findIndex(item => item.id === action.id);
			let itemToDelete = undefined;
			if (itemToDeleteIndex !== - 1) {
				itemToDelete = updatedItems.splice(itemToDeleteIndex, 1)[0];
			}
			return {
				...state,
				cartItems: updatedItems,
				totalQuantity: state.totalQuantity - itemToDelete.quantity,
				totalPrice: updatedItems.reduce((acc, item) => acc + (item.price * item.quantity), 0)
			};
		case actionTypes.UPDATE_ITEM:
			const items = [...state.cartItems];
			const itemToUpdateIndex = items.findIndex(item => item.id === action.data.id);
			if (itemToUpdateIndex !== -1) {
				items[itemToUpdateIndex].quantity = action.data.quantity;
			}
			return {
				...state,
				cartItems: items,
				totalQuantity: items.reduce((acc, item) => acc + item.quantity, 0),
				totalPrice: items.reduce((acc, item) => acc + (item.price * item.quantity), 0)
			};
		case actionTypes.SET_ORDER_TYPE:
			return {
				...state,
				orderType: action.orderType,
			};
		case actionTypes.REMOVE_ITEMS:
			return initialState;
		case actionTypes.RESET_DATA:
			return initialState;
		default:
			return state;
	}
}; 

export default reducer;