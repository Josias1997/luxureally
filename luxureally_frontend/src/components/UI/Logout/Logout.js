import React from 'react';
import './Logout.css';
import { connect } from 'react-redux';
import { reset } from './../../../store/actions/food';

const Logout = props => {
	return (
		<div className='Logout' onClick={() => props.onReset()}>
			<div style={{color: 'white', fontSize: '12px'}}>
				<i className="ti ti-power-off mr-1"></i>
				<span className="clipboard-label">Réinitialize</span>
			</div>
		</div>
	)
};


const mapDispatchToProps = dispatch => {
	return {
		onReset: () => dispatch(reset())
	}
}
export default connect(null, mapDispatchToProps)(Logout);