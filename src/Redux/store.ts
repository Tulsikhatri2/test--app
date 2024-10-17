'use client';

import { combineReducers, configureStore } from "@reduxjs/toolkit"
import loginReducer from "./Slice/loginSlice"
import registerReducer from "./Slice/registerSlice"
import { FLUSH, PAUSE, PERSIST, persistReducer, persistStore, PURGE, REGISTER, REHYDRATE } from "redux-persist";
import storage from 'redux-persist/lib/storage'
import graphReducer from "./Slice/graphSlice"

const rootReducer = combineReducers({
    login : loginReducer,
    register : registerReducer,
    graph : graphReducer
})

const persistConfig = {
    key:"root",
    storage
}

// const middleWare = 

// const customizedMiddleware = getDefaultMiddleware({
//     serializableCheck: false
//   })

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
// export type RootState = ReturnType<AppStore["getState"]>
export type AppDispatch = typeof store.dispatch;