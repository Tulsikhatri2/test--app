'use client';

import { combineReducers, configureStore } from "@reduxjs/toolkit"
import {persistReducer, persistStore} from "redux-persist";
import storage from 'redux-persist/lib/storage'
import graphReducer from "./Slice/graphSlice"

const rootReducer = combineReducers({
    graph : graphReducer
})

const persistConfig = {
    key:"root",
    storage
}

const persistedReducer = persistReducer(persistConfig,rootReducer)

export const store = configureStore({
    reducer : persistedReducer,
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
          serializableCheck: false,
        }),
});
export const persistor = persistStore(store);

export type AppStore = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;