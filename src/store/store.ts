/* eslint-disable no-multi-spaces */
import {
    applyMiddleware,
    createStore,
}                             from '@reduxjs/toolkit';
import AsyncStorage           from '@react-native-async-storage/async-storage';
import { persistReducer, persistStore }     from 'redux-persist';
import thunk                  from 'redux-thunk';

import rootReducer            from './reducers';
/* eslint-enable no-multi-spaces */

export const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer, applyMiddleware(thunk));

export default () => {

    // const store = createStore(persistedReducer);
    const persistor = persistStore(store);

    return { store, persistor };
};

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
