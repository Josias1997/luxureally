import React, { useState } from 'react';
import './CheckoutPage.css';
import { connect } from 'react-redux';
import { createJsonData } from '../../../utils/Methods/createJsonData';
import { updateCart } from '../../../store/actions/cart';
import { postOrder } from '../../../store/actions/food';
import { withRouter } from 'react-router-dom';
import Spinner from '../../UI/Spinner/Spinner';
import MaterialTable from "material-table";
import { options, localization } from '../../../utils/settings';

const CheckoutPage = (props) => {
	const { cartItems, updateItems, totalPrice, 
        totalQuantity, tableId, onOrderPost, loading } = props;
    const [ orderNotes, setOrderNotes ] = useState('');
	const columns = [
		{
			title: 'Title',
			field: 'title',
            editable: 'never'
		},
		{
			title: 'Price',
			field: 'price',
            editable: 'never'
		},
		{
			title: 'Quantity',
			field: 'quantity'
		}
	];
    const handleChange = event => {
        setOrderNotes(event.target.value);
    };

    const placeOrder = () => {
        const order = createJsonData(['table', 'total_price', 'details', 'notes'], 
            [tableId, totalPrice, [
                cartItems.map(cartItem => [cartItem.id, cartItem.quantity])
            ], orderNotes]);
        onOrderPost(order);
        props.history.push('/order-status');
    };

    const updateRow = (newData, oldData) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                let data_copy = JSON.parse(JSON.stringify(cartItems));
                let index = data_copy.findIndex(item => item.title === newData.title);
                data_copy[index].quantity = parseInt(newData.quantity);
                updateItems(data_copy);
                resolve();
            }, 1000);
        });
    };

    const deleteRow = (oldData) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                let data_copy = JSON.parse(JSON.stringify(cartItems));
                let index = data_copy.findIndex(item => item.title === oldData.title);
                data_copy.splice(index, 1);
                console.log(data_copy);
                updateItems(data_copy);
                resolve();
            }, 1000);
        });
    };

	return (
		<div className="Checkout">
                <div className="col-md-8 text-center textarea">
                    <textarea value={orderNotes} onChange={handleChange} placeholder="Order details">
                    </textarea>
                </div>
                <div className="col-md-8">
                {
                    !loading ? <MaterialTable
                    title={"Checkout"}
                    columns={columns}
                    data={cartItems.map(item => {
                            return {
                                title: item.title,
                                price: item.price,
                                quantity: item.quantity
                            }
                        })
                    }
                    options={options}
                    editable={{
                        onRowUpdate: (newData, oldData) => updateRow(newData, oldData),
                        onRowDelete: oldData => deleteRow(oldData)
                    }}
                    localization={localization}
                    /> : <Spinner />
                }
                </div>
            <div className="col-md-3 text-center summary">Total Price: {totalPrice} DHS Total Meals: {totalQuantity}</div>
            <div className="col-md-12 text-center">
                <p><button className="btn btn-secondary" onClick={placeOrder}>Place Order</button></p>
            </div>
		</div>
	)
};

const mapStateToProps = state => {
    return {
        cartItems: state.cart.cartItems,
        totalQuantity: state.cart.totalQuantity,
        totalPrice: state.cart.totalPrice,
        tableId: state.food.tableId,
        loading: state.food.loading,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        updateItems: items => dispatch(updateCart(items)),
        onOrderPost: order => dispatch(postOrder(order))
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CheckoutPage));