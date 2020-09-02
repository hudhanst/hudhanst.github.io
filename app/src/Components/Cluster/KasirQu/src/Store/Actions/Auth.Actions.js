import {
    // CREATE_SUPER_USER_SUCCESS,
    DARKMODE_CONFIG,
    AUTH_LOADING,
    AUTH_LOADED,
    SET_NEW_IP,
    LOGIN_SUCCESS,
    USER_LOADED,
    USER_EXPIRED,
    LOGOUT_SUCCESS,
} from '../Actions/Type.Actions'

import {
    Create_Error_Messages,
} from './Messages.Actions'

import { Database_Log_In, Database_Load_User } from './Database.Actions'

// export const Get_IpAddres = () => {
//     try {
//         const IpAddres = localStorage.getItem('KasirQU_Server_IpAddres')
//         const Port = localStorage.getItem('KasirQU_Server_Port')
//         const WebSite = localStorage.getItem('KasirQU_Server_WebSite')
//         const Default_IpAddress = '127.0.0.1'
//         const Default_ServerPort = '5000'
//         if (WebSite) {
//             return `http://${WebSite}`
//         } else if (IpAddres || Port) {
//             return `http://${IpAddres ? IpAddres : Default_IpAddress}:${Port ? Port : Default_ServerPort}`
//         } else {
//             return `http://${Default_IpAddress}:${Default_ServerPort}`
//         }
//     } catch (err) {
//         console.log(err)
//     }
// }

// export const defaultheader = () => {
//     const config = {
//         headers: {
//             'Content-Type': 'application/json'
//         }
//     }
//     return config
// }

export const tokenConfig = (getState) => {
    // GET TOKEN FROM STATE
    const token = getState().KasirQu_Auth.token

    // // HEADERS
    // const config = {
    //     headers: {
    //         'Content-Type': 'application/json'
    //     }
    // }
    // // if token, add header
    // if (token) {
    //     config.headers['x-auth-token'] = token
    // }

    return token
}

// export const tokenConfigmultipleform = (getState) => {
//     const token = getState().Auth.token
//     const config = {
//         headers: {
//             'Content-Type': 'multipart/form-data'
//             // 'Content-Type':'multipart/form-data;boundary=----WebKitFormBoundaryyrV7KO0BoCBuDbTL'
//         }
//     }
//     if (token) {
//         config.headers['x-auth-token'] = `${token}`
//     }
//     return config
// }

export const Config_DarkMode = (isDarkMode) => (dispatch) => {
    dispatch({
        type: DARKMODE_CONFIG,
        payload: !isDarkMode,
    })
}

export const First_Time_Use = (UserData, TokoData) => async (dispatch, getState) => {
    dispatch({ type: AUTH_LOADING })
    try {
        const ErrorResponse = {
            response: {
                status: 400,
                data: {
                    msg: 'Cant Use On This Preview'
                }
            }
        }
        throw ErrorResponse
    } catch (err) {
        console.log('Log: First_Time_Use -> err', err)
        dispatch(
            Create_Error_Messages(
                err.response ? (
                    err.response.status ? err.response.status
                        : null) : null,
                err.response ? (
                    err.response.data.msg ? err.response.data.msg
                        : null) : 'anda tidak terhubung dengan server'
            ))
        dispatch({ type: AUTH_LOADED })
    }
}

export const LogIn = (UserName, Password, newIp, newPort, newWebSite) => async (dispatch) => {
    // console.log('Log: LogIn -> UserName', UserName)
    // console.log('Log: LogIn -> Password', Password)
    // console.log('Log: LogIn -> NewIp', NewIp)
    dispatch({ type: AUTH_LOADING })
    if (newIp || newPort || newWebSite) {
        dispatch({
            type: SET_NEW_IP,
            payload: { newIp, newPort, newWebSite }
        })
    }
    try {
        const Responses = await Database_Log_In(UserName, Password)
        if (Responses) {
            dispatch({
                type: LOGIN_SUCCESS,
                payload: Responses
            })
        }

    } catch (err) {
        console.log('Log: LogIn -> err', err)
        if (err.message === 'Network Error') {
            dispatch(Create_Error_Messages(null, 'ada kesalahan pada jaringan yang anda coba akses, silakan isi ip adress yang benar jika di client'))
        } else {
            dispatch(
                Create_Error_Messages(
                    err.response ? (
                        err.response.status ? err.response.status
                            : null) : null,
                    err.response ? (
                        err.response.data.msg ? err.response.data.msg
                            : null) : 'anda tidak terhubung dengan server'
                ))
        }
    }
    dispatch({ type: AUTH_LOADED })
}

export const Load_User = () => async (dispatch, getState) => {
    dispatch({ type: AUTH_LOADING })
    try {
        // const Token = tokenConfig(getState)
        const Responses = await Database_Load_User(tokenConfig(getState))
        if (Responses) {
            dispatch({
                type: USER_LOADED,
                payload: Responses
            })
            dispatch({ type: AUTH_LOADED })
        }

    } catch (err) {
        console.log('Log: Load_User -> err', err)
        try {
            if (err.message === 'Network Error') {
                dispatch(Create_Error_Messages(null, 'gagal mendapatkan userdetail, anda tidak terhubung dengan server'))
                dispatch({ type: AUTH_LOADED })
            } else if (err.response.status === 400) {
                dispatch({ type: USER_EXPIRED })
                dispatch({ type: AUTH_LOADED })
            } else {
                dispatch(
                    Create_Error_Messages(
                        err.response ? (
                            err.response.status ? err.response.status
                                : null) : null,
                        err.response ? (
                            err.response.data.msg ? err.response.data.msg
                                : null) : 'anda tidak terhubung dengan server'
                    ))
                dispatch({ type: AUTH_LOADED })
            }
        } catch (err_err) {
            console.log(err_err.response)
            dispatch({ type: AUTH_LOADED })
        }
    }
}

export const LogOut = () => (dispatch) => {
    dispatch({
        type: LOGOUT_SUCCESS,
    })
}