import {createStore, combineReducers, applyMiddleware } from 'redux';
import { Departments } from './departments';
import { Staffs } from './staffs';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
export const ConfigureStore = () => {
    const store = createStore(
       combineReducers ({
        staffs: Staffs,
        departments : Departments
       }),
       applyMiddleware(thunk, logger)
    );

    return store;
}