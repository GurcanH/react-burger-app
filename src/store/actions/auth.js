import * as actionTypes from './actionTypes';

export const authStart = ()=> {
    return {
        type: actionTypes.AUTH_START
    };
}; 

export const authSucces = (authDate)=> {
    return {
        type: actionTypes.AUTH_SUCCES,
        authDate: authDate
    };
}; 

export const authFail = (error)=> {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    };
}; 

export const auth = (email, password) => {
    return  dispatch =>{
        dispatch(authStart());
    }
}