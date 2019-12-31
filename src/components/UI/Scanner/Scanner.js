import React, { useState, useRef } from 'react';
import QrReader from 'react-qr-reader';
import './Scanner.css';
import { connect } from 'react-redux';
import { initializeRestaurantTable, fetchFood } from '../../../store/actions/food';


const Scanner = props => {
	const [error, setError] = useState(false);
	const x = useRef(window.matchMedia('(max-width: 800px)'));

	let style = {
		width: '50%',
		marginLeft: '25%',
		marginTop: '60%',
	}
	if (!x.current.matches) {
		style = {
			width: '40%',
			marginLeft: '30%',
			marginTop: '5%',
		}
	}

	const handleScan = data => {
		if (data !== null) {
			const ids = data.split(' ');
			props.onInitializeData(ids[0], ids[1]);
			props.onFetchFood(ids[0]);
			props.closeQRScanner();
		}
	};

	const handleError = err => {
		setError(err);
	};

	return (
		<div onClick={props.closeQRScanner} className='Scanner' style={{
			display: props.display
		}}>
		{
			error ? <div className='Error'>
				{error.message}
			</div> : null
		}
			<QrReader 
				delay={300}
				onError={handleError}
				onScan={handleScan}
				style={{
					...style,
					height: '100%',
				}}
			/>
		</div>
	)
};

const mapStateToProps = state => {
	return {
		restaurantId: state.food.restaurantId,
		tableId: state.food.tableId,
	}
}

const mapDispatchToProps = dispatch => {
	return {
		onInitializeData: (restaurantId, tableId) => dispatch(initializeRestaurantTable(restaurantId, tableId)),
		onFetchFood: (restaurantId) => dispatch(fetchFood(restaurantId))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Scanner);