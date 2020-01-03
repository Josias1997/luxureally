import React from 'react';

const Form = props => {
    return (
    <div className="modal fade" id="form" role="dialog">
    <div className="modal-dialog" role="document">
        <div className="modal-content">
            <div className="modal-header modal-header-lg dark bg-dark">
                <div className="bg-image"><img src="/img/photos/modal-add.jpg" alt="" /></div>
                <h4 className="modal-title">Enter your Informations</h4>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close"><i className="ti-close"></i></button>
            </div>
            <div className="col-md-12">
                <div className="bg-white p-4 p-md-5 mb-4">
                    <h4 className="border-bottom pb-4"><i className="ti ti-user mr-3 text-primary"></i>Basic informations</h4>
                    <div className="row mb-5">
                        <div className="form-group col-sm-6">
                            <label>First Name:</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="form-group col-sm-6">
                            <label>Last Name:</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="form-group col-sm-6">
                            <label>Phone number:</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="form-group col-sm-6">
                            <label>E-mail address:</label>
                            <input type="email" className="form-control" />
                        </div>
                        <div className="form-group col-sm-12">
                            <label>Address:</label>
                            <input type="text" className="form-control" />
                        </div>
                    </div>
                 </div>
            </div>
  
            <button type="button" className="modal-btn btn btn-secondary btn-block btn-lg" data-dismiss="modal">
            	<span>Menu</span>
            </button>
        </div>
    </div>
</div>

    );
};

export default Form;