/* eslint-disable no-multi-spaces */
import Config              from 'constants/Config';
import {
    filterFighters,
    sortFighters,
}                          from 'lib/Helpers';
import ServerRequest       from 'lib/ServerRequest';
import { FighterModel }    from 'models/FighterModel';
import { UniverseModel }   from 'models/UniverseModel';
import {
    AppDispatch,
    RootState,
}                          from 'store/store';
/* eslint-enable no-multi-spaces */

export const SET_ACTIVE_UNIVERSE = 'SET_ACTIVE_UNIVERSE';
export const SET_UNIVERSES = 'SET_UNIVERSES';
export const SET_FIGHTERS = 'SET_FIGHTERS';

export const setUniverses = ({ universes }: { universes: UniverseModel[] }) => ({
    type: SET_UNIVERSES,
    universes,
});

export const setActiveUniverse = ({ universe }: { universe: UniverseModel }) => ({
    type: SET_ACTIVE_UNIVERSE,
    universe,
});

export const setFighters = ({ fighters }: { fighters: FighterModel[] }) => ({
    type: SET_FIGHTERS,
    fighters,
});

export const fetchUniverses = () => async (dispatch: AppDispatch) => {

    const universes: UniverseModel[] = await ServerRequest({
        endpoint: Config.backend.endpoints.universes,
        method: 'GET',
    });

    // Setting first Option
    universes.unshift({
        objectID: 'ALL-ID',
        name: 'All',
    });

    dispatch(setUniverses({ universes }));
    dispatch(setActiveUniverse({ universe: universes[0] }));
};

export const fetchFighters = () =>
    async (dispatch: AppDispatch, getState: () => RootState) => {

        const {
            universeState,
            filterState,
        } = getState();

        const selectedUniverse = universeState.activeUniverse.name;

        const sortBy = filterState.sortBy;

        const filterRate = filterState.rateBy;

        let endpoint = Config.backend.endpoints.fighters;

        if (selectedUniverse !== 'All') {

            // Encode the URL Parameters
            endpoint = `${endpoint}?universe=${encodeURIComponent(selectedUniverse)}`;

        }

        const fighters: FighterModel[] = await ServerRequest({
            endpoint,
            method: 'GET',
        });

        const sortedFighters = sortFighters({ fighters, sortBy });

        const filteredFighters = filterFighters({ fighters: sortedFighters, rate: filterRate });

        dispatch(setFighters({ fighters: filteredFighters }));
    };
