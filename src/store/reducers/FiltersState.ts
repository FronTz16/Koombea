/* eslint-disable no-multi-spaces */
import { AnyAction }        from '@reduxjs/toolkit';
import {
    WIPE_FILTERS,
    SET_SORT_BY,
    SET_RATE_FILTER,
}                           from 'store/actions/FiltersState';
/* eslint-enable no-multi-spaces */

export type FilterStateProps ={
    sortBy: string | undefined;
    rateBy: string | undefined;
}

const initialState: FilterStateProps = {
    sortBy: undefined,
    rateBy: undefined,
};

export const filterState = (state = initialState, action: AnyAction) => {
    switch (action.type) {
        case SET_SORT_BY:
            return {
                ...state,
                sortBy: action.sortBy,
            };
        case WIPE_FILTERS:
            return {
                sortBy: undefined,
                rateBy: undefined,
            };
        case SET_RATE_FILTER:
            return {
                ...state,
                rateBy: action.rate,
            };
        default:
            return state;
    }
};
