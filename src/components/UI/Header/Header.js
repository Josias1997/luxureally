import React from 'react';
import { Link } from 'react-router-dom';

const Header = (props) => {
	return (
		<>
			<header id="header" className="absolute transparent">

				<div className="container">
					<div className="row">
						<div className="col-md-3">
							<div className="module module-logo light">
								<a href="/">
									<img src="/img/logo-dark-red.svg" alt="" width="88" />
								</a>
							</div>
						</div>
					</div>
				</div>
			</header>
		<header id="header-mobile" className="light">

			<div className="module module-logo">
				<a href="/">
					<img src="/img/logo-horizontal-dark-red.svg" alt="" />
				</a>
			</div>

		</header>
					</>
	);

};

export default Header;