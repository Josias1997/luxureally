import React from 'react';
import './Order.css';

const Order = props => {
	return (
		<a href="/order-status">
			<div className='Order'>
				<div style={{color: 'white', fontSize: '12px'}}>
					<i className="ti ti-clipboard mr-1"></i>
					<span className="clipboard-label">Orders</span>
				</div>
			</div>
		</a>
	)
};


export default Order;