import React from 'react';
import { connect } from 'react-redux';
// import { FILES_BASE_DIR } from '../../../utils/Constants';
import Category from './../Category/Category';

const Menu = props => {
	return (
        <div className="page-content">
            <div className="container">
                <div className="row no-gutters">
                    <div className="col-md-10 push-md-1" role="tablist">
                    {	
                    	props.categories !== undefined ? props.categories.map(category => {
                    		return <Category category={category} key={category.id} foods={category.foods} />
                    	}) : null
                    }
                    <a href="/checkout" className="panel-cart-action btn btn-secondary btn-block btn-lg">
                		<span>Go to checkout</span>
                	</a>
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