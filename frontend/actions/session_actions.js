import * as APIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';

export const receiveCurrentUser = currentUser => {
    return ({
    type: RECEIVE_CURRENT_USER,
    currentUser
    });
};

export const logoutCurrentUser = () => {
    debugger;
    return ({
        type: LOGOUT_CURRENT_USER
    });
};

export const receiveErrors = errors => {
    return({
        type: RECEIVE_SESSION_ERRORS,
        errors
    });
};

export const clearErrors = () => {
    return({
        type: CLEAR_ERRORS,
        errors: []
    });
};


export const signup = user => dispatch => {
    return (
        APIUtil.signup(user)
            .then(user => dispatch(receiveCurrentUser(user)), promise => dispatch(receiveErrors(promise.responseJSON)))
    );
};

export const login = user => dispatch => {
    debugger;
    return (
        APIUtil.login(user)
        .then(user => { debugger; return (dispatch(receiveCurrentUser(user)))}, promise => dispatch(receiveErrors(promise.responseJSON)))
    );
};

export const logout = () => dispatch => {
    debugger;
    return (
        APIUtil.logout().then(() => dispatch(logoutCurrentUser()))
    );
};