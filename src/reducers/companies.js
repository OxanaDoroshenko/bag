import { COMPANIES_ERROR, COMPANIES_RESULTS, COMPANIES_TEST_START, VIEW_COMPANIES } from '../actions';

const initialState = {
    companies: []
};

const companiesReducer = (state = initialState, action) => {
    switch (action.type) {
        case COMPANIES_RESULTS:
            return { ...state, companies: action.data };
        // case DB_TEST_RESULTS:
        //     return { ...state, results: "Test Succeeded!  " + action.data }
        // case EXPRESS_TEST_ERROR:
        //     return { ...state, results: "Test Failed!  " + action.data }
        // case DB_TEST_ERROR:
        //     return { ...state, results: "Test Failed!  " + action.data }
        default:
            return state
    }
}

export default companiesReducer;