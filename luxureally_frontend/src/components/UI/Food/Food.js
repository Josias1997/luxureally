import React from 'react';

const Food = ({food, onAddItem}) => {

	return (
		<div className="col-lg-4 col-6">
		    <div className="menu-item menu-list-item">
                <img className="mb-4" src={food.picture} alt="" />
                <h6 className="mb-0">{food.title}</h6>
                <span className="text-muted text-sm">{food.description}</span>
                <div className="row align-items-center mt-4">
                    <div className="col-sm-6">
                    	<span className="text-md mr-4"><span className="text-muted">from</span> {food.price} DHS</span>
                    </div>
                    <div class="col-sm-6 text-sm-right mt-2 mt-sm-0">
                    	<button class="btn btn-outline-secondary btn-sm" data-target="#confirmationModal" data-toggle="modal">
                    		<span>Add to cart</span>
                    	</button>
                    </div>
                </div>
		    </div>
	    </div>
	)

};


export default Food;