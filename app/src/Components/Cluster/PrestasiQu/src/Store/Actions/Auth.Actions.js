import { ErrorMassages } from './Messages.Actions'
import {
    USER_LOADING,
    USER_NOT_LOADING,
    USER_LOADED,
    LOGIN_SUCCESS,
    LOGOUT_SUCCESS,
    USER_EXPIRED,
} from './Type.Actions'

import {
    Database_Log_In,
    Database_Load_User,
} from './Database.Actions'

export const tokenConfig = (getState) => {
    const token = getState().PrestasiQu_Auth.token
    return token
}

export const PrestasiQuLoadUser = () => async (dispatch, getState) => {
    try {
        dispatch({ type: USER_LOADING })
        const Responses = await Database_Load_User(tokenConfig(getState))
        if (Responses) {
            dispatch({
                type: USER_LOADED,
                payload: Responses
            })
        }
    } catch (err) {
        console.log('Log: PrestasiQuLoadUser -> err', err)
        if (err.response) {
            if (err.response.status === 400) {
                dispatch({ type: USER_EXPIRED })
            } else {
                console.log(err)
            }
        }
        dispatch({ type: USER_NOT_LOADING })
    }
}

export const LogIn = (nomerinduk, password) => async (dispatch) => {
    try {
        const Responses = await Database_Log_In(nomerinduk, password)
        if (Responses) {
            dispatch({
                type: LOGIN_SUCCESS,
                payload: Responses
            })
        }
    } catch (err) {
        console.log('Log: LogIn -> err', err)
        dispatch(ErrorMassages(err.response.data))
    }
}

export const LogOut = () => (dispatch) => {
    dispatch({ type: LOGOUT_SUCCESS })
}