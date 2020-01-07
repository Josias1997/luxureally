import React from 'react';
import { connect } from 'react-redux';
import { addItemToCart } from '../../../store/actions/cart';

const Food = ({food, onAddItem}) => {

	return (
	    <div className="menu-item menu-list-item">
	        <div className="row align-items-center">
	            <div className="col-sm-6 mb-2 mb-sm-0">
	                <h6 className="mb-0">{food.title}</h6>
	                <span className="text-muted text-sm">{food.description}</span>
	            </div>
	            <div className="col-sm-6 text-sm-right">
	                <span className="text-md mr-4"><span className="text-muted">from</span> {food.price} DHS</span>
	                <button className="btn btn-secondary btn-sm" onClick={() => onAddItem(food)}>
	                	<span>Add to cart</span>
	                </button>
	            </div>
	        </div>
	    </div>
	)

};

const mapDispatchToProps = dispatch => {
	return {
		onAddItem: item => dispatch(addItemToCart(item))
	}
}

export default connect(null, mapDispatchToProps)(Food);