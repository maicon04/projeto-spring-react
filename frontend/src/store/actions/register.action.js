import { API_URL } from 'Utils/requests';
import { Http } from '../../config/globalConfig';
import { changeLoading } from './loading.action';
import { changeNotify } from './notify.action';
import { setUserToken } from './auth.action';

export const actionTypes = {
    CHANGE: 'CHANGE',
    SUCCESS: 'SUCESS',
    ERROR: 'ERROR'
}

export const changeValue = (payload) => ({
    type: actionTypes.CHANGE,
    payload
})

export const registerError = (payload) => ({
    type: actionTypes.ERROR,
    payload
})

export const registerSuccess = (payload) => ({
    type: actionTypes.SUCCESS,
    payload
})

export const registerUser = (data) => {
    return dispatch => {
        dispatch(changeLoading({
            open: true,
            message: 'Authenticating...'
        }))
        return Http.post(`${API_URL}/user/register`, data)
            .then(res => {
                dispatch(changeLoading({
                    open: false
                }))
                if (typeof res !== 'undefined') {
                    if (res.data.apierror) {
                        dispatch(registerError(res.data.apierror.message))
                    }
                    if (res.data.success) {
                        dispatch(changeNotify({
                            open: true,
                            class: 'success',
                            msg: 'Usuário cadastrado com sucesso'
                        }))
                        dispatch(setUserToken(res.data.token))
                        dispatch(registerSuccess(true))
                    }
                }
            })
            .catch(() => {
                dispatch(changeLoading({
                    open: false
                }))
            })
    }
}

