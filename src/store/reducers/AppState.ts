/* eslint-disable no-multi-spaces */
import { AnyAction }        from '@reduxjs/toolkit';
import {
    SET_INITIALIZING,
    SET_INITIALIZED,
    SET_LOGGING_IN,
    SET_LOGGED_IN,
}                           from 'store/actions/AppState';
/* eslint-enable no-multi-spaces */

type AppStateProps ={
    initialized: boolean;
    initializing: boolean;
    loggedIn: boolean;
    loggingIn: boolean;
}

const initialState: AppStateProps = {
    initialized: false,
    initializing: false,
    loggedIn: false,
    loggingIn: false,
};


export const appState = (state = initialState, action: AnyAction) => {
    switch (action.type) {
        case SET_INITIALIZING:
            return {
                ...state,
                initializing: true,
            };
        case SET_INITIALIZED:
            return {
                ...state,
                initialized: true,
                initializing: false,
            };
        case SET_LOGGED_IN:
            return {
                ...state,
                loggingIn: false,
                loggedIn: action.loggedIn,
            };
        case SET_LOGGING_IN:
            return {
                ...state,
                loggingIn: true,
            };
        default:
            return state;
    }
};
