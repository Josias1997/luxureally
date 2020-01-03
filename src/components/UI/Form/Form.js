import React from 'react';
import { changeInput } from "../../../store/actions/user";
import { connect } from 'react-redux';

const Form = props => {
    const {firstName, lastName, email, phoneNumber, address, onChangeInput} = props;
    const handleChange = event => {
        onChangeInput(event.target.id, event.target.value);
    };
    return (
    <div className="modal fade" id="form" role="dialog">
    <div className="modal-dialog" role="document">
        <div className="modal-content">
            <div className="modal-header modal-header-lg dark bg-dark">
                <div className="bg-image"><img src="/img/photos/modal-add.jpg" alt="" /></div>
                <h4 className="modal-title">Enter your Information</h4>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close"><i className="ti-close">

                </i></button>
            </div>
            <div className="col-md-12">
                <div className="bg-white p-4 p-md-5 mb-4">
                    <h4 className="border-bottom pb-4"><i className="ti ti-user mr-3 text-primary">

                    </i>Basic Informations</h4>
                    <div className="row mb-5">
                        <div className="form-group col-sm-6">
                            <label>First Name:</label>
                            <input onChange={handleChange} value={firstName} type="text" className="form-control" id={"firstName"} />
                        </div>
                        <div className="form-group col-sm-6">
                            <label>Last Name:</label>
                            <input onChange={handleChange} value={lastName} type="text" className="form-control" id={"lastName"} />
                        </div>
                        <div className="form-group col-sm-6">
                            <label>Phone number:</label>
                            <input onChange={handleChange} value={phoneNumber} type="text" className="form-control" id={"phoneNumber"} />
                        </div>
                        <div className="form-group col-sm-6">
                            <label>E-mail address:</label>
                            <input onChange={handleChange} value={email} type="email" className="form-control" id={"email"} />
                        </div>
                        <div className="form-group col-sm-12">
                            <label>Address:</label>
                            <input onChange={handleChange} value={address} type="text" className="form-control" id={"address"} />
                        </div>
                    </div>
                 </div>
            </div>
  
            <button type="button" className="modal-btn btn btn-secondary btn-block btn-lg" data-dismiss="modal">
            	<span>See Menu</span>
            </button>
        </div>
    </div>
</div>

    );
};

const mapStateToProps = state => {
    return  {
        firstName: state.user.firstName,
        lastName: state.user.lastName,
        email: state.user.email,
        address: state.user.address,
        phoneNumber: state.user.phoneNumber,
    }
};

const mapDispatchToProps = dispatch => {
    return  {
        onChangeInput: (id, value) => dispatch(changeInput(id, value)),
    }
};

export default  connect(mapStateToProps, mapDispatchToProps)(Form);