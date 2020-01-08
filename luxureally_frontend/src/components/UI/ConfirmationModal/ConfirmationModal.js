import React from 'react';
import { connect } from 'react-redux';
import { addItemToCart } from '../../../store/actions/cart';

const ConfirmationModal = ({food, onAddItem}) => {
	return (
		<div className="modal fade" id="confirmationModal" role="dialog">
    <div className="modal-dialog" role="document">
        <div className="modal-content">
            <div className="modal-header modal-header-lg dark bg-dark">
                <div className="bg-image"><img src="assets/img/photos/modal-add.jpg" alt="" /></div>
                <h4 className="modal-title">Specify your dish</h4>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close"><i className="ti-close"></i></button>
            </div>
            <div className="modal-product-details">
                <div className="row align-items-center">
                    <div className="col-9">
                        <h6 className="mb-0">Boscaiola Pasta</h6>
                        <span className="text-muted">Pasta, Cheese, Tomatoes, Olives</span>
                    </div>
                    <div className="col-3 text-lg text-right">$9.00</div>
                </div>
            </div>
            <button onClick={() => onAddItem(food)} type="button" className="modal-btn btn btn-secondary btn-block btn-lg" data-dismiss="modal">
            	<span>Confirm</span>
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
};

export default connect(null, mapDispatchToProps)(ConfirmationModal)