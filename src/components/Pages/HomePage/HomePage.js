import React, { useState } from 'react';
import { connect } from 'react-redux';
import Scanner from '../../UI/Scanner/Scanner';
import BackgroundImage from '../../UI/BackgroundImage/BackgroundImage';
import ConfirmationModal from '../../UI/ConfirmationModal/ConfirmationModal';
import Header from '../../UI/Header/Header';
import Menu from '../../UI/Menu/Menu';
import Form from '../../UI/Form/Form';
import Checkout from '../../UI/Checkout/Checkout';
import Logout from '../../UI/Logout/Logout';

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
		<Logout />
		<Form />
		 <Scanner display={display ? 'block' : 'none'} 
       		closeQRScanner={closeQRScanner} openQRScanner={openQRScanner}
       	/>
		<Header openQRScanner={openQRScanner} />
		<ConfirmationModal />
		<BackgroundImage openQRScanner={openQRScanner} />
		<Checkout history={props.history} />
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