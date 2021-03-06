import {actionTypes} from '../actions/loading.action';
import initialState from './initialState'

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState.loading, { type, payload }) => {
    switch (type) {

        case actionTypes.CHANGE_LOADING:
        return { ...state, ...payload }

    default:
        return state
    }
}
