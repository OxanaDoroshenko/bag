import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import demo from './demo';
import companies from './companies';

const Reducers = combineReducers({
    demo,
    companies,
    routing: routerReducer
});

export default Reducers;
