import React, { useState } from 'react';
import { connect } from 'react-redux';
import { FILES_BASE_DIR } from '../../../utils/Constants';
import { addItemToCart } from '../../../store/actions/cart';

const Menu = props => {
	const [currentCategory, setCurrentCategory] = useState(0)

	const updateCategory = (index) => {
		setCurrentCategory(index);
	}

	return (
		<div className="colorlib-menu">
			<div className="container">
				<div className="colorlib-menu-2">
					<div className="row">
						<div className="col-md-6 col-md-offset-3 text-center intro-heading">
							<span className="icon"><i className="flaticon-cutlery"></i></span>
							<h2>Restaurant</h2>
						</div>
					</div>
					<div className="row">
						<div className="col-md-12">
							<div className="row">
								<div className="col-md-12 text-center">
									<ul className="nav nav-tabs text-center" role="tablist">
									{
										props.categories.length !== 0 ? props.categories.map((category, index) => {
											return <li key={category.id} role="presentation" className={index === currentCategory ? "active" : ""}>
												<a href={"#" + category.id} 
												aria-controls="mains" 
												role="tab" data-toggle="tab" onClick={(index) => updateCategory(index)}>
													{category.title}
												</a>

												</li>
										}) : null
									}
									</ul>
								</div>
							</div>
							<div className="tab-content">
								{
									props.categories.length !== undefined ? props.categories.map((category, index) => {
										return <div role="tabpanel" className={"tab-pane " + (currentCategory === index ? "active" : "")} 
													id={category.id} key={category.id}>
													<div className="row">
														<div className="col-md-6">
															<ul className="menu-dish">
															{
																category.foods.map((food) => {
																	return <li key={food.id}>
														                <figure className="dish-entry">
														                	<div className="dish-img" style={{ backgroundImage: 'url(' + FILES_BASE_DIR + food.picture + ')' }}></div>
														                </figure>
														                <div className="text">
														                  <span className="price">{food.price}DHS</span>
														                  <h3>{food.title}</h3>
														                  <p className="cat">{food.description}</p>
														                  <span className="btn btn-primary btn-lg btn-learn"
														                  	onClick={() => props.onAddItem(food)}
														                  >+</span>
														                </div>
												              		</li>
																})
															}
											            	</ul>
											            </div>
													</div>
												</div>
									}) : null 
								}
							</div>
						</div>
						<div className="col-md-12 text-center">
							<p><a href="/checkout" className="btn btn-primary btn-outline btn-md">Checkout</a></p>
						</div>
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

const mapDispatchToProps = dispatch => {
	return {
		onAddItem: item => dispatch(addItemToCart(item))
	}
}


export default connect(mapStateToProps, mapDispatchToProps)(Menu);