import React from 'react';
import './Order.css';

const Order = props => {
	return (
		<a href="/order-status">
			<div className='Order'>
				<div style={{color: 'white', fontSize: '12px'}}>Orders</div>
			</div>
		</a>
	)
};


export default Order;