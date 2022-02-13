/* eslint-disable no-multi-spaces */
import { AnyAction }        from '@reduxjs/toolkit';
import {
    WELCOME_SCREEN_SEEN,
}                           from 'store/actions/PersistedState';
/* eslint-enable no-multi-spaces */

export type PersistedStateProps ={
    onboardingSeen: boolean;
}

const initialState: PersistedStateProps = {
    onboardingSeen: false,
};


export const persistedState = (state = initialState, action: AnyAction) => {
    switch (action.type) {
        case WELCOME_SCREEN_SEEN:
            return {
                ...state,
                onboardingSeen: true,
            };
        default:
            return state;
    }
};
