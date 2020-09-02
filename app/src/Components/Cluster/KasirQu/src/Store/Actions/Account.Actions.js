import { tokenConfig } from './Auth.Actions'

import {
    ACCOUNT_LOADING,
    ACCOUNT_LOADED,
    RELOADE_PAGE,
    GET_ACCOUNT_ID_FOR_DETAIL,
    ACCOUNT_DETAIL,
    GET_ACCOUNT_ID_FOR_UPDATE,
    ACCOUNT_DELETED,
    LIST_ACCOUNT,
    TOKO_DETAIL,
    LIST_HISTORY,
    GET_HISTORY_ID_FOR_DETAIL,
    HISTORY_DETAIL,
    // LIST_QUERY_HISTORY_EXPORT,
} from '../Actions/Type.Actions'

import {
    Create_Error_Messages,
    // Create_Success_Messages,
    Create_Info_Messages,
} from './Messages.Actions'

import {
    Action_Denied,
    Database_Load_Account_Detail,
    Database_Load_Account_List,
    Database_Load_Toko_Detail,
    Database_Load_History_List,
    Database_Load_History_Detail,
} from './Database.Actions'

export const get_AccountId_Detail = (UserID) => (dispatch) => {
    dispatch({
        type: GET_ACCOUNT_ID_FOR_DETAIL,
        payload: UserID
    })
}

export const get_AccountDetail = (UserID) => async (dispatch, getState) => {
    dispatch({ type: ACCOUNT_LOADING })
    try {

        const Responses = await Database_Load_Account_Detail(tokenConfig(getState), UserID)////// FIXME bug when clik twice on edit button data didnt appear
        if (Responses) {
            dispatch({
                type: ACCOUNT_DETAIL,
                payload: Responses,
            })
            dispatch({ type: ACCOUNT_LOADED })
        }
    } catch (err) {
        console.log('Log: get_AccountDetail -> err', err)
        dispatch(
            Create_Error_Messages(
                err.response ? (
                    err.response.status ? err.response.status
                        : null) : null,
                err.response ? (
                    err.response.data.msg ? err.response.data.msg
                        : null) : 'anda tidak terhubung dengan server'
            ))
        dispatch({ type: ACCOUNT_LOADED })
    }
}

export const Add_Account = (AddAccountData, Auth) => async (dispatch, getState) => {
    dispatch({ type: ACCOUNT_LOADING })
    try {
        if (!Auth) {
            const newerr = {
                response: {
                    data: {
                        msg: 'anda harus login untuk melakukan ini'
                    }
                }
            }
            throw newerr
        }

        const isSuperUser = Auth.isSuperUser
        if (!isSuperUser) {
            const newerr = {
                response: {
                    data: {
                        msg: 'maaf anda tidak diperkenankan melakukan ini'
                    }
                }
            }
            throw newerr
        }

        const Responses = Action_Denied()
        if (Responses) {
            // dispatch(Create_Success_Messages(Responses.status ? Responses.status : null, Responses.data.msg ? Responses.data.msg : null))
            dispatch(Create_Info_Messages(Responses.status ? Responses.status : null, Responses.data.msg ? Responses.data.msg : null))
            dispatch({ type: ACCOUNT_LOADED })
            dispatch({ type: RELOADE_PAGE })
        }
    } catch (err) {
        console.log('Log: Add_Account -> err', err)
        dispatch(
            Create_Error_Messages(
                err.response ? (
                    err.response.status ? err.response.status
                        : null) : null,
                err.response ? (
                    err.response.data.msg ? err.response.data.msg
                        : null) : 'anda tidak terhubung dengan server'
            ))
        dispatch({ type: ACCOUNT_LOADED })
    }
}

export const get_AccountId_Update = (UserID) => (dispatch) => {
    dispatch({
        type: GET_ACCOUNT_ID_FOR_UPDATE,
        payload: UserID
    })
}

export const Update_Account = (AccountID, UpdateData, Auth) => async (dispatch, getState) => {
    dispatch({ type: ACCOUNT_LOADING })
    try {
        if (!Auth) {
            const newerr = {
                response: {
                    data: {
                        msg: 'anda harus login untuk melakukan ini'
                    }
                }
            }
            throw newerr
        }

        const isSuperUser = Auth.isSuperUser
        if (!isSuperUser) {
            const newerr = {
                response: {
                    data: {
                        msg: 'maaf anda tidak diperkenankan melakukan ini'
                    }
                }
            }
            throw newerr
        }

        // const Responses = await axios.patch(`${IpAddres}/api/users/user/${AccountID}/update`, bodydata, tokenConfigmultipleform(getState))
        const Responses = Action_Denied()
        if (Responses) {
            // dispatch(Create_Success_Messages(Responses.status ? Responses.status : null, Responses.data.msg ? Responses.data.msg : null))
            dispatch(Create_Info_Messages(Responses.status ? Responses.status : null, Responses.data.msg ? Responses.data.msg : null))
            dispatch({ type: ACCOUNT_LOADED })
            dispatch({ type: RELOADE_PAGE })
        }
    } catch (err) {
        console.log('Log: Update_Account -> err', err)
        dispatch(
            Create_Error_Messages(
                err.response ? (
                    err.response.status ? err.response.status
                        : null) : null,
                err.response ? (
                    err.response.data.msg ? err.response.data.msg
                        : null) : 'anda tidak terhubung dengan server'
            ))
        dispatch({ type: ACCOUNT_LOADED })
    }
}

export const Delete_an_Account = (AccountID, Auth) => async (dispatch, getState) => {
    dispatch({ type: ACCOUNT_LOADING })
    try {
        if (!Auth) {
            const newerr = {
                response: {
                    data: {
                        msg: 'anda harus login untuk melakukan ini'
                    }
                }
            }
            throw newerr
        }

        const isSuperUser = Auth.isSuperUser
        if (!isSuperUser) {
            const newerr = {
                response: {
                    data: {
                        msg: 'maaf anda tidak diperkenankan melakukan ini'
                    }
                }
            }
            throw newerr
        }

        const Responses = Action_Denied()
        if (Responses) {
            dispatch({
                type: ACCOUNT_DELETED,
                payload: AccountID
            })
            dispatch(Create_Info_Messages(Responses.status ? Responses.status : null, Responses.data.msg ? Responses.data.msg : null))
            dispatch({ type: ACCOUNT_LOADED })
            dispatch({ type: RELOADE_PAGE })
        }
    } catch (err) {
        console.log('Log: Delete_an_Account -> err', err)
        dispatch(
            Create_Error_Messages(
                err.response ? (
                    err.response.status ? err.response.status
                        : null) : null,
                err.response ? (
                    err.response.data.msg ? err.response.data.msg
                        : null) : 'anda tidak terhubung dengan server'
            ))
        dispatch({ type: ACCOUNT_LOADED })
    }
}

export const Load_Account_List = () => async (dispatch, getState) => {
    dispatch({ type: ACCOUNT_LOADING })
    try {
        const Responses = await Database_Load_Account_List(tokenConfig(getState))
        if (Responses) {
            dispatch({
                type: LIST_ACCOUNT,
                payload: Responses
            })
            dispatch({ type: ACCOUNT_LOADED })
        }
    } catch (err) {
        console.log('Log: Load_Account_List -> err', err)
        dispatch(
            Create_Error_Messages(
                err.response ? (
                    err.response.status ? err.response.status
                        : null) : null,
                err.response ? (
                    err.response.data.msg ? err.response.data.msg
                        : null) : 'anda tidak terhubung dengan server'
            ))
        dispatch({ type: ACCOUNT_LOADED })
    }
}

export const get_TokoDetail = () => async (dispatch, getState) => {
    dispatch({ type: ACCOUNT_LOADING })
    try {
        const Responses = await Database_Load_Toko_Detail(tokenConfig(getState))
        if (Responses) {
            dispatch({
                type: TOKO_DETAIL,
                payload: Responses
            })
            dispatch({ type: ACCOUNT_LOADED })
        }
    } catch (err) {
        console.log('Log: get_TokoDetail -> err', err)
        dispatch(
            Create_Error_Messages(
                err.response ? (
                    err.response.status ? err.response.status
                        : null) : null,
                err.response ? (
                    err.response.data.msg ? err.response.data.msg
                        : null) : 'anda tidak terhubung dengan server'
            ))
        dispatch({ type: ACCOUNT_LOADED })
    }
}

export const Update_Toko = (UpdateData, Auth) => async (dispatch, getState) => {
    dispatch({ type: ACCOUNT_LOADING })
    try {
        if (!Auth) {
            const newerr = {
                response: {
                    data: {
                        msg: 'anda harus login untuk melakukan ini'
                    }
                }
            }
            throw newerr
        }

        const isSuperUser = Auth.isSuperUser
        if (!isSuperUser) {
            const newerr = {
                response: {
                    data: {
                        msg: 'maaf anda tidak diperkenankan melakukan ini'
                    }
                }
            }
            throw newerr
        }

        const Responses = Action_Denied()
        if (Responses) {
            dispatch(Create_Info_Messages(Responses.status ? Responses.status : null, Responses.data.msg ? Responses.data.msg : null))
            dispatch({ type: ACCOUNT_LOADED })
            dispatch({ type: RELOADE_PAGE })
        }
    } catch (err) {
        console.log('Log: Update_Toko -> err', err)
        dispatch(
            Create_Error_Messages(
                err.response ? (
                    err.response.status ? err.response.status
                        : null) : null,
                err.response ? (
                    err.response.data.msg ? err.response.data.msg
                        : null) : 'anda tidak terhubung dengan server'
            ))
        dispatch({ type: ACCOUNT_LOADED })
    }
}

export const Load_History_List = () => async (dispatch, getState) => {
    dispatch({ type: ACCOUNT_LOADING })
    try {
        const Responses = await Database_Load_History_List(tokenConfig(getState))
        if (Responses) {
            dispatch({
                type: LIST_HISTORY,
                payload: Responses
            })
            dispatch({ type: ACCOUNT_LOADED })
        }
    } catch (err) {
        console.log('Log: Load_History_List -> err', err)
        dispatch(
            Create_Error_Messages(
                err.response ? (
                    err.response.status ? err.response.status
                        : null) : null,
                err.response ? (
                    err.response.data.msg ? err.response.data.msg
                        : null) : 'anda tidak terhubung dengan server'
            ))
        dispatch({ type: ACCOUNT_LOADED })
    }
}

export const get_HistoryId_Detail = (HistoryID) => (dispatch) => {
    dispatch({
        type: GET_HISTORY_ID_FOR_DETAIL,
        payload: HistoryID
    })
}

export const get_HistoryDetail = (HistoryID) => async (dispatch, getState) => {
    dispatch({ type: ACCOUNT_LOADING })
    try {
        const Responses = await Database_Load_History_Detail(tokenConfig(getState), HistoryID)
        if (Responses) {
            dispatch({
                type: HISTORY_DETAIL,
                payload: Responses
            })
            dispatch({ type: ACCOUNT_LOADED })
        }
    } catch (err) {
        console.log('Log: get_HistoryDetail -> err', err)
        dispatch(
            Create_Error_Messages(
                err.response ? (
                    err.response.status ? err.response.status
                        : null) : null,
                err.response ? (
                    err.response.data.msg ? err.response.data.msg
                        : null) : 'anda tidak terhubung dengan server'
            ))
        dispatch({ type: ACCOUNT_LOADED })
    }
}

export const Load_Export_Query_History = (Query) => async (dispatch, getState) => {
    dispatch({ type: ACCOUNT_LOADING })
    try {
        // if (Responses) {
        //     dispatch({
        //         type: LIST_QUERY_HISTORY_EXPORT,
        //         payload: Responses.data.QueryHistory
        //     })
        //     if (Responses.data.QueryHistory) {
        //         const QueryHistory = Responses.data.QueryHistory
        //         if (QueryHistory.length >= 1) {
        //             dispatch(Create_Success_Messages(Responses.status ? Responses.status : null, Responses.data.msg ? Responses.data.msg : null))
        //         } else {
        //             dispatch(Create_Error_Messages(null, 'data tidak ditemukan'))
        //         }
        //     }
        //     dispatch({ type: ACCOUNT_LOADED })
        // }
        const Responses = Action_Denied()
        if (Responses) {
            dispatch(Create_Info_Messages(Responses.status ? Responses.status : null, Responses.data.msg ? Responses.data.msg : null))
            dispatch({ type: ACCOUNT_LOADED })
        }
    } catch (err) {
        console.log('Log: Load_Export_Query_History -> err', err)
        dispatch(
            Create_Error_Messages(
                err.response ? (
                    err.response.status ? err.response.status
                        : null) : null,
                err.response ? (
                    err.response.data.msg ? err.response.data.msg
                        : null) : 'anda tidak terhubung dengan server'
            ))
        dispatch({ type: ACCOUNT_LOADED })
    }
}

export const Export_History = (Data, Auth) => async (dispatch, getState) => {
    dispatch({ type: ACCOUNT_LOADING })
    try {
        if (!Auth) {
            const newerr = {
                response: {
                    data: {
                        msg: 'anda harus login untuk melakukan ini'
                    }
                }
            }
            throw newerr
        }

        const isSuperUser = Auth.isSuperUser
        if (!isSuperUser) {
            const newerr = {
                response: {
                    data: {
                        msg: 'maaf anda tidak diperkenankan melakukan ini'
                    }
                }
            }
            throw newerr
        }
        // const Responses = await axios.post(`${IpAddres}/api/history/export`, body, {
        //     responseType: 'blob',
        //     ...tokenConfig(getState)
        // })
        // // console.log('Log: Export_History -> Responses', Responses)
        // if (Responses) {
        //     const url = window.URL.createObjectURL(new Blob([Responses.data]))
        //     const link = document.createElement('a')
        //     link.href = url
        //     link.setAttribute('download', 'Export.History.xlsx')
        //     document.body.appendChild(link)
        //     link.click()

        //     dispatch(Create_Success_Messages(null, 'Proses Export History Berhasil'))
        //     dispatch({ type: ACCOUNT_LOADED })
        // }
        const Responses = Action_Denied()
        if (Responses) {
            dispatch(Create_Info_Messages(Responses.status ? Responses.status : null, Responses.data.msg ? Responses.data.msg : null))
            dispatch({ type: ACCOUNT_LOADED })
        }
    } catch (err) {
        console.log('Log: Export_History -> err', err)
        dispatch(Create_Error_Messages(null, 'Ada Kesalahan Pada Proses Export History'))
        // dispatch(
        //     Create_Error_Messages(
        //         err.response ? (
        //             err.response.status ? err.response.status
        //                 : null) : null,
        //         err.response ? (
        //             err.response.data.msg ? err.response.data.msg
        //                 : null) : 'anda tidak terhubung dengan server'
        //     ))
        dispatch({ type: ACCOUNT_LOADED })
    }
}