import React from 'react';
import { connect } from 'react-redux';
import Category from './../Category/Category';

const Menu = props => {
	return (
        <div className="page-content">
            <div className="container">
                <div className="row no-gutters">
                    <div className="col-md-11 push-md-1" role="tablist">
                    {	
                    	props.categories !== undefined ? props.categories.map(category => {
                    		return <Category category={category} key={category.id} foods={category.foods} />
                    	}) : null
                    }
                    <button className="panel-cart-action btn btn-secondary btn-block btn-lg"
                    data-target="#checkout" data-toggle="modal">
                		<span>Checkout</span>
                	</button>
                    </div>

                </div>
            </div>
        </div>
	)
};

const mapStateToProps = state => {
	return {
		categories: state.food.categoriesDetails,
		loading: state.food.loading,
		error: state.food.error,
	}
};

export default connect(mapStateToProps)(Menu);