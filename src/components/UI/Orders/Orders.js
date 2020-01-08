import React, { Component } from 'react';
import { connect } from 'react-redux';
import {ordersStatus, deleteAllOrders, createAddition} from '../../../store/actions/food';
import {createJsonData} from "../../../utils/Methods/createJsonData";
import Header from '../Header/Header';

class Orders extends Component {
	componentDidMount() {
		const { orders, orderType } = this.props;
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
		const { tableId, orders_total_price, onAskAddition, restaurantId } = this.props;
		const data = createJsonData(['total_price', 'status', 'table', 'restaurant'],
			[orders_total_price, 'NON PAID', tableId, restaurantId]);
		onAskAddition(data);
	};

	addNewOrders = () => {
		this.props.history.push("/");
		window.location.reload();
	}
	render() {
		const { orders, orders_total_price, orders_total_quantity } = this.props;
		return (
			<>
			 <Header />
		    <div className="col-md-12 push-xl-8 col-lg-5 push-lg-7" style={{
		    	marginTop: '150px'
		    }}>
                   <div className="shadow bg-white stick-to-content mb-4">
                        <div className="bg-dark dark p-4"><h5 className="mb-0">You orders</h5></div>
                        <table className="table-cart">
                        {
                        	orders.map(order => (
                        			<tr key={order.id}>
		                                <td className="title">
		     								{order.id}
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
                                <div className="col-7 text-right text-muted">Devliery:</div>
                                <div className="col-5"><strong>Quantity: {orders_total_quantity}</strong></div>
                            </div>
                            <hr className="hr-sm" />
                            <div className="row text-md">
                                <div className="col-7 text-right text-muted">Total:</div>
                                <div className="col-5"><strong>{orders_total_price}</strong></div>
                            </div>
                       </div>
            </div>

            {
            	this.props.orderType === 'on-place' ?<> <button onClick={this.askAddition} type="button" className="modal-btn btn btn-secondary btn-block btn-lg" data-dismiss="modal">
				<span>Ask addition</span> </button>
				<button onClick={this.addNewOrders} 
				type="button" className="modal-btn btn btn-secondary btn-block">
					<span>Add new Orders</span>
				</button> 
				</> : <button onClick={this.addNewOrders} type="button" className="modal-btn btn btn-secondary btn-block">
				<span>Add new Orders</span>
			</button>
            }
		</div>
		</>
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
		onAskAddition: data => dispatch(createAddition(data)),
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(Orders);
