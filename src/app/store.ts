import { applyMiddleware, configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import goodsReducer from './goodsSlice';
import { combineReducers } from "@reduxjs/toolkit";
import logger from 'redux-logger';

const store = configureStore({
    reducer: combineReducers({ goodsReducer }),
    middleware:(getDefaultMiddleware) => [...getDefaultMiddleware(), logger],
});

export default store;