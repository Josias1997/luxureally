import React from 'react';

const BackgroundImage = (props) => {

	return (
			<div id="content">
                <section className="section section-main bg-dark dark">

                    <div className="bg-image bg-fixed"><img src="/img/photos/hero-burger.jpg" alt="" /></div>

                    <div className="container v-center">
                        <div className="row">
                            <div className="col-md-7 push-md-3">
                                <h1 className="display-2">We do <strong>The Best Burgers</strong> in London</h1>
                                <h4 className="text-muted mb-5">Taste it now with our online order!</h4>
                                <button onClick={() => props.openQRScanner()}
                                   className="btn btn-outline-primary btn-lg"><span>Order now</span></button>
                            </div>
                        </div>
                    </div>

                </section>
            </div>
	);
};

export default BackgroundImage;
