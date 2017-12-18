import axios from 'axios';

export const EXPRESS_TEST_START = "EXPRESS_TEST_START";
export const expressTestStart = () => {
    return { type: EXPRESS_TEST_START }
}
/*-------------------------*/


export const EXPRESS_TEST_RESULTS = "EXPRESS_TEST_RESULTS";
export const expressTestResults = (data) => {
    return { type: EXPRESS_TEST_RESULTS, data }
}

export const EXPRESS_TEST_ERROR = "EXPRESS_TEST_ERROR";
export const expressTestError = (data) => {
    return { type: EXPRESS_TEST_ERROR, data }
}

export const EXPRESS_TEST = "EXPRESS_TEST";
export const expressTest = () => {
    return dispatch => {
        dispatch(expressTestStart());
        axios.get(`/api/express-test`)
            .then(res => dispatch(expressTestResults(JSON.stringify(res.data))))
            .catch(err => dispatch(expressTestError(err)))

    }
}

export const DB_TEST_START = "DB_TEST_START";
export const dbTestStart = () => {
    return { type: DB_TEST_START }
}
export const DB_TEST_RESULTS = "DB_TEST_RESULTS";
export const dbTestResults = (data) => {
    return { type: DB_TEST_RESULTS, data }
}
export const DB_TEST_ERROR = "DB_TEST_ERROR";
export const dbTestError = (data) => {
    return { type: DB_TEST_ERROR, data }
}

export const DB_TEST = "DB_TEST"
export const dbTest = () => {
    return dispatch => {
        dispatch(dbTestStart());
        axios.get(`/api/products`)
            .then(res => dispatch(dbTestResults(JSON.stringify(res.data))))
            .catch(err => dispatch(dbTestError(err)))

    }
}

/*----------------------*/
export const COMPANIES_ERROR = "COMPANIES_ERROR";
export const COMPANIES_RESULTS = "COMPANIES_RESULTS";
export const COMPANIES_TEST_START = "COMPANIES_TEST_START";
export const VIEW_COMPANIES = "VIEW_COMPANIES";
export const companiesFetchStart = () => {
    return { type: COMPANIES_TEST_START }
}
export const companiesResult = (data) => {
    return { type: COMPANIES_RESULTS, data }
}
export const companiesError = (data) => {
    return { type: COMPANIES_ERROR, data }
}
export const viewCompanies = () => {
    return dispatch => {
        dispatch(companiesFetchStart());
        axios.get(`/api/companies`)
            .then(res => dispatch(companiesResult(res.data)))
            .catch(err => dispatch(companiesError(err)))

    }
}