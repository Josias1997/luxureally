import React, { useState } from 'react';
import { connect } from 'react-redux';
import { createJsonData } from '../../../utils/Methods/createJsonData';
import { updateCart, removeItem, updateItem } from '../../../store/actions/cart';
import { postOrder } from '../../../store/actions/food';

const Checkout = props => {
	const [ orderNotes, setOrderNotes ] = useState('');
	const [updatedQuantity, setUpdatedQuantity] = useState(undefined);
	const [onEditMode, setOnEditMode] = useState(false);
	const [currentLine, setCurrentLine] = useState(undefined);
	const { cartItems, updateItems, totalPrice, 
    totalQuantity, tableId, onOrderPost, loading, onRemoteItem, onUpdateItem } = props;

	const handleChange = event => {
        setOrderNotes(event.target.value);
    };

    const handleQuantityChange = event => {
    	setUpdatedQuantity(event.target.value);
    }

    const placeOrder = () => {
        const order = createJsonData(['table', 'total_price', 'details', 'notes'], 
            [tableId, totalPrice, [
                cartItems.map(cartItem => [cartItem.id, cartItem.quantity])
            ], orderNotes]);
        onOrderPost(order);
        props.history.push('/order-status');
    };
    const updateQuantity = (id) => {
    	onUpdateItem(id, parseInt(updatedQuantity));
    	setOnEditMode(false);
    	setCurrentLine(undefined);
    	setUpdatedQuantity('');
    }

    const editLine = (id) => {
    	setOnEditMode(true);
    	setCurrentLine(id);
    };

    const styles = {
    	cursor: 'pointer',
    }

	return (
	<div className="modal fade" id="checkout" role="dialog">
    	<div className="modal-dialog" role="document">
	        <div className="modal-content">
	            <div className="modal-header modal-header-lg dark bg-dark">
	                <div className="bg-image"><img src="assets/img/photos/modal-add.jpg" alt="" /></div>
	                <h4 className="modal-title">Your Cart Items</h4>
	                <button type="button" className="close" data-dismiss="modal" aria-label="Close"><i className="ti-close"></i></button>
	            </div>
            	<div className="col-md-12 form-group">
                    <textarea className="form-control" value={orderNotes} onChange={handleChange} placeholder="Order details">
                    </textarea>
            	</div>
                 <div className="col-md-12">
                    <div className="shadow bg-white stick-to-content mb-4">
                        <table className="table-cart">
                        {
                        	cartItems.map(item => (
                        	<tr key={item.id}>
                                <td className="title">
                                    <span className="name"><a href="#productModal" data-toggle="modal">{item.title}</a></span>
                                    <span className="caption text-muted">{item.description}</span>
                                </td>
                                <td>{item.price} DHS</td>
                                <td className="price">{
                                	(onEditMode && item.id === currentLine) ? <div className="form-group" >
                                		<label style={styles} className="action-icon" onClick={() => updateQuantity(item.id)}><i className="ti ti-check"></i></label>
                                		<label style={styles} className="action-icon" onClick={() => setOnEditMode(false)}><i className="ti ti-close"></i></label>
                                		<input type="number" min={"0"} className="form-control" 
                                		value={updatedQuantity} onChange={handleQuantityChange} />
                                	</div> : item.quantity
                                }</td>
                                <td className="actions">
                                    <label style={styles} onClick={() => editLine(item.id)} className="action-icon">
                                    	<i className="ti ti-pencil"></i>
                                    </label>
                                    <label style={styles} className="action-icon" onClick={() => onRemoteItem(item.id)}>
                                    	<i className="ti ti-close"></i>
                                    </label>
                                </td>
                            </tr>
                        	))
                        }
                        </table>
                        <div className="cart-summary">
                            <div className="row">
                                <div className="col-7 text-right text-muted">Total Quantity:</div>
                                <div className="col-5"><strong>{totalQuantity}</strong></div>
                            </div>
                            <div className="row">
                                <div className="col-7 text-right text-muted">Order total:</div>
                                <div className="col-5"><strong>{totalPrice} DHS</strong></div>
                            </div>
                            <hr className="hr-sm" />
                            <div className="row text-md">
                                <div className="col-7 text-right text-muted">Total:</div>
                                <div className="col-5"><strong>{totalPrice} DHS</strong></div>
                            </div>
                        </div>
                    </div>
                </div>
                <button type="button" className="modal-btn btn btn-secondary btn-block btn-lg" data-dismiss="modal">
                	<span>Order</span>
                </button>
	        </div>
	    </div>
	</div>
	)
};

const mapStateToProps = state => {
    return {
        cartItems: state.cart.cartItems,
        totalQuantity: state.cart.totalQuantity,
        totalPrice: state.cart.totalPrice,
        tableId: state.food.tableId,
        loading: state.food.loading,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        updateItems: items => dispatch(updateCart(items)),
        onOrderPost: order => dispatch(postOrder(order)),
        onRemoteItem: id => dispatch(removeItem(id)),
        onUpdateItem: (id, quantity) => dispatch(updateItem(id, quantity))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);