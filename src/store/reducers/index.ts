/* eslint-disable no-multi-spaces */
import { combineReducers } from 'redux';
import {
    universeState,
    UniversesStateProps,
}                         from './UniverseState';
import {
    persistedState,
    PersistedStateProps,
}                         from './PersistedState';
import {
    FilterStateProps,
    filterState,
}                         from './FiltersState';

/* eslint-enable no-multi-spaces */

export interface RootReducerProps {
    persistedState: PersistedStateProps,
    universeState: UniversesStateProps,
    filterState: FilterStateProps,
}

export default combineReducers<RootReducerProps>({
    persistedState,
    universeState,
    filterState,
});
