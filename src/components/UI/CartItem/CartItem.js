import React from 'react';
import './CartItem.css';
import { connect } from 'react-redux';

const CartItem = props => {
	return (
		<a href="/checkout">
		<div className='CartItem'>
		    <span className="cart-icon" style={{
		    	color: 'white'
		    }}>
                <i className="ti ti-shopping-cart"></i>
                <span className="notification notif">{props.totalQuantity}</span>
            </span>
		</div>
		</a>
	)
};

const mapStateToProps = state => {
	return {
		totalQuantity: state.cart.totalQuantity
	}
}

export default  connect(mapStateToProps)(CartItem);