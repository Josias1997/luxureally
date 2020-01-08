import React from 'react';
import { connect } from 'react-redux';
import { addItemToCart } from '../../../store/actions/cart';
import { setCurrentFood } from '../../../store/actions/food';
import { FILES_BASE_DIR } from '../../../utils/Constants';

const ConfirmationModal = ({onAddItem, currentFood}) => {
	return (
		<div className="modal fade" id="confirmationModal" role="dialog">
    <div className="modal-dialog" role="document">
        <div className="modal-content">
            <div className="modal-header modal-header-lg dark bg-dark">
                <div className="bg-image"><img src={ FILES_BASE_DIR + currentFood.picture} alt="" /></div>
                <h4 className="modal-title">Confirmation</h4>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close"><i className="ti-close"></i></button>
            </div>
            <div className="modal-product-details">
                <div className="row align-items-center">
                    <div className="col-9">
                        <h6 className="mb-0">{currentFood.title}</h6>
                        <span className="text-muted">{currentFood.description}</span>
                    </div>
                    <div className="col-3 text-lg text-right">{currentFood.price} DHS</div>
                </div>
            </div>
            <button onClick={() => onAddItem(currentFood)} type="button" className="modal-btn btn btn-secondary btn-block btn-lg" data-dismiss="modal">
            	<span>Confirm</span>
            </button>
        </div>
    </div>
</div>
	)
};

const mapStateToProps = state => {
    return {
        currentFood: state.food.currentFood,
    }
}
const mapDispatchToProps = dispatch => {
	return {
		onAddItem: item => dispatch(addItemToCart(item)),
        onSetCurrentFood: food => dispatch(setCurrentFood(food))
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(ConfirmationModal)