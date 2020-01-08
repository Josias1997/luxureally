import * as actionTypes from './../actions/actionTypes';

export const changeInput = (id, value) => {
    return {
        type: actionTypes.CHANGE_INPUT,
        data: {
            id: id,
            value: value
        }
    }
};

