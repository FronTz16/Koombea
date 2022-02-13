/* eslint-disable no-multi-spaces */
export const WIPE_FILTERS = 'WIPE_FILTERS';
export const SET_SORT_BY = 'SET_SORT_BY';
export const SET_RATE_FILTER = 'SET_RATE_FILTER';
/* eslint-enable no-multi-spaces */

export const wipeFilters = () => ({
    type: WIPE_FILTERS,
});

export const setSortBy = ({ sortBy }: { sortBy: string }) => ({
    type: SET_SORT_BY,
    sortBy,
});

export const setRateFilter = ({ rate }: { rate: string }) => ({
    type: SET_RATE_FILTER,
    rate,
});
