import { TOGGLE_NAVIGATION } from '../actions/appActions';

const initialState = {
    activeNav: false
};

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_NAVIGATION:
            return { ...state, activeNav: !state.activeNav };
        default:
            return state
    }
}

export default appReducer;