import React from 'react';
import { Link } from 'react-router-dom';

const Header = (props) => {
	return (
		<header>
			<div className="container">
				<div className="row">
					<div className="col-md-12">
						<div className="colorlib-navbar-brand">
							<Link className="colorlib-logo" to="/"><i className="flaticon-cutlery"></i><span>Lu</span><span>to</span></Link>
						</div>
					</div>
				</div>
			</div>
		</header>
	)
};

export default Header;