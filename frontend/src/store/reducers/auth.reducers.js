import { actionTypes } from '../actions/auth.action';
import initialState from './initialState';

// eslint-disable-next-line no-undef
const authReducer = (state = initialState.auth, action) => {
    switch (action.type) {
        case actionTypes.CHANGE:
            return {
                ...state,
                credentials: {
                    ...state.credentials,
                    ...action.payload
                }
            }
        case actionTypes.GET_TOKEN:
            return {
                ...state,
                ...action.token
            }
        default:
            return {
                ...state
            }
    }
}

export default authReducer;