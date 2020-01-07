import React, { Component } from 'react';
import { connect } from 'react-redux';
import {ordersStatus, deleteAllOrders, getAddition} from '../../../store/actions/food';
import {createJsonData} from "../../../utils/Methods/createJsonData";


class Orders extends Component {
	componentDidMount() {
		const { orders,orderType } = this.props;
		console.log(orders);
		this.interval = setInterval(() => {
			for (let i = 0; i < orders.length; i++) {
				this.props.checkOrdersStatus(orders[i].id, orderType);
			}
		}, 5000);
	}

	componentWillUnmount() {
		clearInterval(this.interval);
	}
	askAddition = () => {
		const { tableId, orders_total_price, onAskAddition } = this.props;
		const data = createJsonData(['table_id', 'total_price'],
			[tableId, orders_total_price]);
		onAskAddition(data);
	};
	render() {
		const { orders, orders_total_price, orders_total_quantity } = this.props;
		return (
		<div className="modal fade" id="orders" role="dialog">
		    <div className="modal-dialog" role="document">
		        <div className="modal-content">
		       		<div className="modal-header modal-header-lg dark bg-dark">
		                <div className="bg-image"><img src="assets/img/photos/modal-add.jpg" alt="" /></div>
		                <h4 className="modal-title">Your Orders</h4>
		                <button type="button" className="close" data-dismiss="modal" aria-label="Close"><i className="ti-close"></i></button>
	                </div>
	                <div className="col-md-12">
	                	<div className="shadow bg-white stick-to-content mb-4">
	                    <table className="table-cart">
	                    	{
	                    		orders.map(order => (
	                    			<tr key={order.id}>
			                            <td className="title">
			                                <span className="name"><a href="#productModal" data-toggle="modal">{order.id}</a></span>
			                            </td>
			                            <td className="price">{order.price} DHS</td>
			                            <td className="actions">
			                                {order.status}
			                            </td>
	                        		</tr>
	                    		))
	                    	}
	                    </table>
							<div className="cart-summary">
                            <div className="row">
                                <div className="col-7 text-right text-muted">Total Orders:</div>
                                <div className="col-5"><strong>{orders_total_quantity}</strong></div>
                            </div>
                            <div className="row">
                                <div className="col-7 text-right text-muted">Total Price:</div>
                                <div className="col-5"><strong>{orders_total_price} DHS</strong></div>
                            </div>
                        </div>
	                </div>
	            </div>
	            {
	            	this.props.orderType === 'on-place' ? <button onClick={this.askAddition} type="button" className="modal-btn btn btn-secondary btn-block btn-lg" data-dismiss="modal">
					<span>Ask addition</span>
				</button> : <button type="button" className="modal-btn btn btn-secondary btn-block btn-lg" data-dismiss="modal">
					<span>OK</span>
				</button>
	            }
		       	</div>
		    </div>
		</div>
	);
	}
}

const mapStateToProps = state => {
	return {
		orders: state.food.orders,
		orders_total_price: state.food.orders_total_price,
		orders_total_quantity: state.food.orders_total_quantity,
		restaurantId: state.food.restaurantId,
		tableId: state.food.tableId,
		orderType: state.cart.orderType,
	}
};

const mapDispatchToProps = dispatch => {
	return {
		checkOrdersStatus: (orderId, orderType) => dispatch(ordersStatus(orderId, orderType)),
		onDeleteAll: () => dispatch(deleteAllOrders()),
		onAskAddition: data => dispatch(getAddition(data)),
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(Orders);
