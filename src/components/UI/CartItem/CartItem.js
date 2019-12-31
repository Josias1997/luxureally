import React from 'react';
import './CartItem.css';
import { connect } from 'react-redux';

const CartItem = props => {
	return (
		<div className='CartItem' onClick={() => {props.history.push('/checkout')}}>
			<div className="icon" style={{color: 'white', fontSize: '40px'}}><i className="flaticon-cutlery"></i></div>
			<div className="items-count">{props.totalQuantity}</div>
		</div>
	)
};

const mapStateToProps = state => {
	return {
		totalQuantity: state.cart.totalQuantity
	}
}

export default  connect(mapStateToProps)(CartItem);