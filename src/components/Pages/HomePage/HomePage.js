import React, { useState } from 'react';
import { connect } from 'react-redux';
import Scanner from '../../UI/Scanner/Scanner';
import CartItem from '../../UI/CartItem/CartItem';
import RemoveItems from './../../UI/RemoveItems/RemoveItems';
import Order from './../../UI/Orders/Order';
import Logout from './../../UI/Logout/Logout';
import BackgroundImage from '../../UI/BackgroundImage/BackgroundImage';
import Header from '../../UI/Header/Header';
import Menu from '../../UI/Menu/Menu';

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
		 <Scanner display={display ? 'block' : 'none'} 
       		closeQRScanner={closeQRScanner} openQRScanner={openQRScanner}
       	/>
       	<Order history={props.history} />
       	<CartItem history={props.history} />
       	<RemoveItems />
       	<Logout />
		<Header openQRScanner={openQRScanner} />
		<BackgroundImage openQRScanner={openQRScanner} />
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