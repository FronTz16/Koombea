/* eslint-disable no-multi-spaces */
import { RootState }        from '../store';
/* eslint-enable no-multi-spaces */

export const getUniverses = (state: RootState) => state.universeState.allUniverses;

export const getActiveUniverse = (state: RootState) => state.universeState.activeUniverse;

export const getFighters = (state: RootState) => state.universeState.fighters;

