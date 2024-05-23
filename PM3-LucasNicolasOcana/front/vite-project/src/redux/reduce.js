import { LOGIN_USER, SET_USER_APPOINTMENTS } from './actions';

const initialState = {
    user: null,
    userAppointments: [],
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_USER:
            return {
                ...state,
                user: action.payload,
            };
        case SET_USER_APPOINTMENTS:
            return {
                ...state,
                userAppointments: action.payload,
            };
        default:
            return state;
    }
};

export default rootReducer;
