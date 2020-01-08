import React from 'react';
import './RemoveItems.css';
import { connect } from 'react-redux';
import { removeAllItems } from '../../../store/actions/cart';

const RemoveItems = props => {
	return (
		<div className='RemoveItem' onClick={() => {props.onRemoveItems()}}>
			<div style={{color: 'white', fontSize: '12px'}}>
				<i className="ti ti-trash mr-1"></i>
				<span className="label">Remove Items</span>
			</div>
		</div>
	)
};

const mapDispatchToProps = dispatch => {
	return {
		onRemoveItems: ()  => dispatch(removeAllItems()),
	}
}

export default  connect(null, mapDispatchToProps)(RemoveItems);