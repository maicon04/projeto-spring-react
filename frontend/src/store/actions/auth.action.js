import { BASE_URL } from 'Utils/requests';
import { Http } from '../../config/globalConfig';
import {changeLoading} from './loading.action';
import { changeNotify } from './notify.action';

export const actionTypes = {
    GET_TOKEN: 'GET_TOKEN',
    LOGOUT: 'LOGOUT',
    LOADING: 'LOADING',
    SUCCESS: 'SUCCESS',
    ERROR: 'ERROR',
    CHANGE: 'CHANGE'
}

export const getToken = (token) => ({
    type: actionTypes.GET_TOKEN,
    token
})

export const removeToken = () => ({
    type: actionTypes.LOGOUT
})

export const loginSuccess = bool => ({
    type: actionTypes.SUCCESS
})

export const loginError = (error) => ({
    type: actionTypes.ERROR,
    error
})

export const changeValue = (payload) => ({
    type: actionTypes.CHANGE,
    payload
})

export const loading = (bool, message = null) => ({
    type: actionTypes.LOADING,
    isLoading: {
        active: bool,
        message: message
    }
})

export const getUserToken = () => dispatch => {

    localStorage.getItem('token')
        .then(response => {
            dispatch(loading(false))
            if (typeof response !== 'undefined') {
                dispatch(getToken(response))
            }
        })
}

export const setUserToken = (token) => dispatch => {
    localStorage.setItem('token', token)
    dispatch(loading(false))
    dispatch(loginSuccess(true))
}

export const login = (credential) => {
    return dispatch => {
        dispatch(changeLoading({
            open:true,
            message:'Authenticating...'
        }))
        return Http.post(`${BASE_URL}/authenticate`, {
            // gran_type: 'password',
            // client_id: '',
            // client_secret: '',
            username: credential.username,
            password: credential.password
        })
            .then(response => {
                dispatch(changeLoading({
                    open: false,
                    message: ''
                }))
                if (typeof response !== 'undefined') {
                    dispatch(setUserToken(response.data.access_token))
                }
            })
            .catch(error=>{
                dispatch(changeLoading({
                    open: false,
                    message: ''
                }))
                if(error.response){
                    if(error.response.status === 401 || error.response.status === 400){
                         dispatch(changeNotify({
                             open:true,
                             message:'E-mail ou Senha inválidos!',
                             class:'error'
                         }))   
                    }else{
                        dispatch(changeNotify({
                            open: true,
                            message: 'Erro ao efetuar login!',
                            class: 'error'
                        }))
                    }
                }else{
                    dispatch(changeNotify({
                        open: true,
                        message: 'Servidor inacessível',
                        class: 'error'
                    }))
                }
            })
    }
}
