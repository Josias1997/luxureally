import React from 'react';
import { FILES_BASE_DIR } from '../../../utils/Constants';
import { connect } from 'react-redux';
import { setCurrentFood } from '../../../store/actions/food';

const Food = ({food, onSetCurrentFood}) => {

	return (
		<div className="col-lg-4 col-6">
		    <div className="menu-item menu-list-item">
                <img className="mb-4" src={FILES_BASE_DIR + food.picture} alt="" />
                <h6 className="mb-0">{food.title}</h6>
                <span className="text-muted text-sm">{food.description}</span>
                <div className="row align-items-center mt-4">
                    <div className="col-sm-6">
                    	<span className="text-md mr-4"><span className="text-muted">from</span> {food.price} DHS</span>
                    </div>
                    <div className="col-sm-6 text-sm-right mt-2 mt-sm-0">
                    	<button onClick={() => onSetCurrentFood(food)} className="btn btn-outline-secondary btn-sm" data-target="#confirmationModal" data-toggle="modal">
                    		<span>Add to cart</span>
                    	</button>
                    </div>
                </div>
		    </div>
	    </div>
	)

};

const mapDispatchToProps = dispatch => {
    return {
        onSetCurrentFood: food => dispatch(setCurrentFood(food))
    }
};

export default connect(null, mapDispatchToProps)(Food);