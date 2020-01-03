import * as actionTypes from './../actions/actionTypes';
import {updateObject} from "../../utils/Methods/updateObject";

const initialState =  {
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    phoneNumber: '',
};

const changeInputValue = (state, action) => {
    switch(action.data.id) {
        case 'firstName':
            return updateObject(state, {
                firstName: action.data.value
            });
        case 'lastName':
            return updateObject(state, {
                lastName: action.data.value
            });
            case 'email':
            return updateObject(state, {
                email: action.data.value
            });
            case 'address':
            return updateObject(state, {
                address: action.data.value
            });
            case 'phoneNumber':
            return updateObject(state, {
                phoneNumber: action.data.value
            });
        default:
            return state;
    }
};
const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.CHANGE_INPUT:
            return changeInputValue(state, action);
        default:
            return state;
    }
};

export default reducer;