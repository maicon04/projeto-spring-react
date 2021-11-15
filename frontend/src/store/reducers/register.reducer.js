import { actionTypes } from '../actions/register.action'
import initialState from './initialState'


// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState.register, { type, payload }) => {
    switch (type) {

        case actionTypes.CHANGE:
            return {
                ...state,
                data: {
                    ...state.data,
                    ...payload
                }
            }
        case actionTypes.SUCCESS:
            return {
                 ...state,
                 success: payload }
        case actionTypes.ERROR:
            return {
                ...state,
                error: payload
            }

        default:
            return state
    }
}
