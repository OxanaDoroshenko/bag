import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import demo from './demo';
import app from './app';
import companies from './companies';

const Reducers = combineReducers({
    app,
    demo,
    companies,
    routing: routerReducer
});

export default Reducers;
