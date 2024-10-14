'use client';

import { combineReducers, configureStore } from "@reduxjs/toolkit"
import loginReducer from "./Slice/loginSlice"
import registerReducer from "./Slice/registerSlice"
import { persistReducer, persistStore } from "redux-persist";
import storage from 'redux-persist/lib/storage'
import reducer from "./Slice/loginSlice";

const rootReducer = combineReducers({
    login : loginReducer,
    register : registerReducer
})

const persistConfig = {
    key:"root",
    storage
}

const persistedReducer = persistReducer(persistConfig,rootReducer)

export const store = configureStore({reducer : persistedReducer});
export const persistor = persistStore(store);

export type AppStore = ReturnType<typeof store.getState>
// export type RootState = ReturnType<AppStore["getState"]>
export type AppDispatch = typeof store.dispatch;