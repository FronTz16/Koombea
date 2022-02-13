/* eslint-disable no-multi-spaces */
import { AnyAction }       from '@reduxjs/toolkit';
import { FighterModel }    from 'models/FighterModel';
import { UniverseModel }   from 'models/UniverseModel';
import {
    SET_UNIVERSES,
    SET_ACTIVE_UNIVERSE,
    SET_FIGHTERS,
}                          from 'store/actions/UniverseState';
/* eslint-enable no-multi-spaces */

export type UniversesStateProps ={
    activeUniverse: UniverseModel;
    allUniverses: UniverseModel[];
    fighters: FighterModel[];
}

const initialState: UniversesStateProps = {
    activeUniverse: {
        objectID: 'ALL-ID',
        name: 'All',
    },
    allUniverses: [],
    fighters: [],
};


export const universeState = (state = initialState, action: AnyAction) => {
    switch (action.type) {
        case SET_UNIVERSES:
            return {
                ...state,
                allUniverses: action.universes,
            };
        case SET_ACTIVE_UNIVERSE:
            return {
                ...state,
                activeUniverse: action.universe,
            };
        case SET_FIGHTERS:
            return {
                ...state,
                fighters: action.fighters,
            };
        default:
            return state;
    }
};
