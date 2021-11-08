import { actionTypes } from '../actions/notify.action';
import initialState from './initialState'

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState.notify, { type, payload }) => {
    switch (type) {

        case actionTypes.CHANGE_NOTIFY:
            return { ...state, ...payload }

        default:
            return state
    }
}
