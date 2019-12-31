import React from 'react';

const BackgroundImage = (props) => {

	return (
		<aside id="colorlib-hero">
			<div className="flexslider">
				<ul className="slides">
				   	<li style={{ backgroundImage: 'url(images/img_bg_1.jpg)' }}>
				   		<div className="overlay"></div>
				   		<div className="container-fluid">
				   			<div className="row">
					   			<div className="col-md-6 col-sm-12 col-xs-12 col-md-offset-3 slider-text">
					   				<div className="slider-text-inner text-center">
					   					<div className="desc">
					   						<span className="icon"><i className="flaticon-cutlery"></i></span>
						   					<h1>Special &amp; Fresh Food</h1>
						   					<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
						   					<p><button href="#" className="btn btn-primary btn-lg btn-learn" onClick={() => props.openQRScanner()}>
						   						Scan QR Code
						   					</button></p>
						   					<div className="desc2"></div>
					   					</div>
					   				</div>
					   			</div>
					   		</div>
				   		</div>
				   	</li>
			  	</ul>
		  	</div>
		</aside>
	);
};

export default BackgroundImage;
