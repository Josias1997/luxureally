import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ordersStatus, cancel, deleteAllOrders } from '../../../store/actions/food';


class Orders extends Component {
	componentDidMount() {
		const { orders } = this.props;
		console.log(orders);
		this.interval = setInterval(() => {
			for (let i = 0; i < orders.length; i++) {
				this.props.checkOrdersStatus(orders[i].id);
			}
		}, 5000);
	}

	componentWillUnmount() {
		clearInterval(this.interval);
	}
	render() {
		const { orders, onCancel } = this.props;
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
	                </div>
	            </div>
		       	</div>
		    </div>
		</div>
	);
	}
}

const mapStateToProps = state => {
	return {
		orders: state.food.orders,
		restaurantId: state.food.restaurantId,
		tableId: state.food.tableId,
	}
};

const mapDisptachToProps = dispatch => {
	return {
		checkOrdersStatus: (orderId) => dispatch(ordersStatus(orderId)),
		onCancel: (orderId) =>  dispatch(cancel(orderId)),
		onDeleteAll: () => dispatch(deleteAllOrders()),
	}
}

export default connect(mapStateToProps, mapDisptachToProps)(Orders);
