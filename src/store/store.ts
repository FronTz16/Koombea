/* eslint-disable no-multi-spaces */
import { configureStore }     from '@reduxjs/toolkit';
import { appState }           from './reducers/AppState';
/* eslint-enable no-multi-spaces */

export const store = configureStore({
    reducer: {
        appState,
    },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
