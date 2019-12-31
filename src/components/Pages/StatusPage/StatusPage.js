import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ordersStatus, cancel, deleteAllOrders } from '../../../store/actions/food';
import './StatusPage.css';
import { Link } from 'react-router-dom';

class StatusPage extends Component {

	componentDidMount() {
		const { orders } = this.props;
		console.log(orders);
		this.interval = setInterval(() => {
			for (let i = 0; i < orders.length; i++) {
				this.props.checkOrdersStatus(orders[i].id);
			}
		}, 60 * 1000);
	}

	componentWillUnmount() {
		clearInterval(this.interval);
	}

	render() {
		const { orders, onCancel } = this.props;
		return (
		<div className='Status'>
			<table border="1">
				<thead>
					<tr>
						<th>ID</th>
						<th>Price</th>
						<th>Status</th>
						<th>Actions</th>
					</tr>
				</thead>
				<tbody>
					 {
					 	orders.length !== 0 ?
					 	orders.map(order => (
					 		<tr key={order.id}>
					 			<td>{order.id}</td>
					 			<td>{order.price}</td>
					 			<td>{order.status}</td>
					 			<td><button onClick={() => onCancel(order.id)} className="btn btn-outline btn-primary btn-md">
					 				Cancel
					 				</button>
					 			</td>
					 		</tr>
					 	)) : <td colspan="4">You haven't ordered a meal yet. Go back to <Link to="/">Home Page</Link> </td>
					 }
				</tbody>
			</table>
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

export default connect(mapStateToProps, mapDisptachToProps)(StatusPage);