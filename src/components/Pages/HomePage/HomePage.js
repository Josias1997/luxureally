import React, { useState } from 'react';
import { connect } from 'react-redux';
import Scanner from '../../UI/Scanner/Scanner';
import CartItem from '../../UI/CartItem/CartItem';
import RemoveItems from './../../UI/RemoveItems/RemoveItems';
import OrderButton from './../../UI/OrderButton/OrderButton';
import Logout from './../../UI/Logout/Logout';
import BackgroundImage from '../../UI/BackgroundImage/BackgroundImage';
import Header from '../../UI/Header/Header';
import Menu from '../../UI/Menu/Menu';
import Form from '../../UI/Form/Form';
import Checkout from '../../UI/Checkout/Checkout';
import Orders from '../../UI/Orders/Orders';

const HomePage = (props) => {

	const [display, setDisplay] = useState(false);

	const openQRScanner = () => {
		setDisplay(true);
	};

	const closeQRScanner = () => {
		setDisplay(false)
	};
	return (
		<>
		<Form />
		 <Scanner display={display ? 'block' : 'none'} 
       		closeQRScanner={closeQRScanner} openQRScanner={openQRScanner}
       	/>
       	<OrderButton history={props.history} />
       	<CartItem history={props.history} />
       	<RemoveItems />
       	<Logout />
		<Header openQRScanner={openQRScanner} />
		<BackgroundImage openQRScanner={openQRScanner} />
		<Checkout />
		<Orders />
		<div className="goto-here">

		</div>
		{
			props.qrCodeScanned ? <Menu /> : null
		}
	</>
	)
};


const mapStateToProps = state => {
	return {
		qrCodeScanned: state.food.qrCodeScanned,
	}
};


export default connect(mapStateToProps)(HomePage);