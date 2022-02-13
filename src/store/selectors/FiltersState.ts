/* eslint-disable no-multi-spaces */
import { RootState }        from '../store';
/* eslint-enable no-multi-spaces */

export const getActiveSortByFilter = (state: RootState) => state.filterState.sortBy;

export const hasActiveFilters = (state: RootState) => (
    !!(state.filterState.rateBy || state.filterState.sortBy)
);
export const getActiveRateFilter = (state: RootState) => state.filterState.rateBy;
