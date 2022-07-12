import {
    SET_LOADING,
    STOP_LOADING,
} from '../types';

// loading actions
const setLoading = () => (dispatch) => { dispatch({ type: SET_LOADING }); }
const stopLoading = () => (dispatch) => { dispatch({ type: STOP_LOADING }); }

export {
    setLoading,
    stopLoading,
};