import { SET_LOADING, STOP_LOADING } from '../types';

const initialState = {
    loading: false,
};

export default function uiReducer(state = initialState, action) {
    switch (action.type) {
        case SET_LOADING:
            return { ...state, loading: true };
        case STOP_LOADING:
            return { ...state, loading: false };
        default:
            return state;
    }
}