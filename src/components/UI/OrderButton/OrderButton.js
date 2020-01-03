import React from 'react';
import './OrderButton.css';

const OrderButton = props => {
	return (
		<button data-target="#orders" data-toggle="modal">
			<div className='OrderButton'>
				<div style={{color: 'white', fontSize: '12px'}}>
					<i className="ti ti-clipboard mr-1"></i>
					<span className="clipboard-label">Orders</span>
				</div>
			</div>
		</button>
	)
};


export default OrderButton;