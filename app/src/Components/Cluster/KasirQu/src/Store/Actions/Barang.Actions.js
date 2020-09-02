import {
    BARANG_LOADING,
    BARANG_LOADED,
    RELOADE_PAGE,
    GET_BARANG_ID_FOR_DETAIL,
    BARANG_DETAIL,
    GET_BARANG_ID_FOR_UPDATE,
    BARANG_DELETED,
    LIST_BARANG,
    // LIST_QUERY_BARANG_EXPORT,
    CEK_IMPORT_BARANG,
} from './Type.Actions'

import { tokenConfig } from './Auth.Actions'

import {
    Create_Error_Messages,
    // Create_Success_Messages,
    Create_Info_Messages,
} from './Messages.Actions'

import {
    Action_Denied,
    Database_Load_Barang_List,
    Database_Load_Barang_Detail,
    Database_Load_Barang_Base_on_JenisBarang,
} from './Database.Actions'

export const get_BarangId_Detail = (BarangID) => (dispatch) => {
    dispatch({
        type: GET_BARANG_ID_FOR_DETAIL,
        payload: BarangID
    })
}

export const get_BarangDetail = (BarangID) => async (dispatch, getState) => {
    dispatch({ type: BARANG_LOADING })
    try {
        const Responses = await Database_Load_Barang_Detail(tokenConfig(getState), BarangID)////// FIXME bug when clik twice on edit button data didnt appear
        if (Responses) {
            dispatch({
                type: BARANG_DETAIL,
                payload: Responses
            })
            dispatch({ type: BARANG_LOADED })
        }
    } catch (err) {
        console.log('Log: get_BarangDetail -> err', err)
        dispatch(
            Create_Error_Messages(
                err.response ? (
                    err.response.status ? err.response.status
                        : null) : null,
                err.response ? (
                    err.response.data.msg ? err.response.data.msg
                        : null) : 'anda tidak terhubung dengan server'
            ))
        dispatch({ type: BARANG_LOADED })
    }
}

export const Add_Barang = (Barang, Auth) => async (dispatch, getState) => {
    dispatch({ type: BARANG_LOADING })
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
        const isAdmin = Auth.isAdmin
        if (!isSuperUser || !isAdmin) {
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
            console.log('Log: Add_Barang -> Responses', Responses)
            dispatch(Create_Info_Messages(Responses.status ? Responses.status : null, Responses.data.msg ? Responses.data.msg : null))
            dispatch({ type: BARANG_LOADED })
            dispatch({ type: RELOADE_PAGE })
        }
    } catch (err) {
        console.log('Log: Add_Barang -> err', err)
        dispatch(
            Create_Error_Messages(
                err.response ? (
                    err.response.status ? err.response.status
                        : null) : null,
                err.response ? (
                    err.response.data.msg ? err.response.data.msg
                        : null) : 'anda tidak terhubung dengan server'
            ))
        dispatch({ type: BARANG_LOADED })
    }
}

export const get_BarangId_Update = (BarangID) => (dispatch) => {
    dispatch({
        type: GET_BARANG_ID_FOR_UPDATE,
        payload: BarangID
    })
}

export const Update_Barang = (BarangID, UpdateData, Auth) => async (dispatch, getState) => {
    dispatch({ type: BARANG_LOADING })
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
        const isAdmin = Auth.isAdmin
        if (!isSuperUser || !isAdmin) {
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
            dispatch({ type: BARANG_LOADED })
            dispatch({ type: RELOADE_PAGE })
        }
    } catch (err) {
        console.log('Log: Update_Barang -> err', err)
        dispatch(
            Create_Error_Messages(
                err.response ? (
                    err.response.status ? err.response.status
                        : null) : null,
                err.response ? (
                    err.response.data.msg ? err.response.data.msg
                        : null) : 'anda tidak terhubung dengan server'
            ))
        dispatch({ type: BARANG_LOADED })
    }
}

export const Delete_a_Barang = (BarangID, Auth) => async (dispatch, getState) => {
    dispatch({ type: BARANG_LOADING })
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
        const isAdmin = Auth.isAdmin
        if (!isSuperUser || !isAdmin) {
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
                type: BARANG_DELETED,
                payload: null
            })
            dispatch(Create_Info_Messages(Responses.status ? Responses.status : null, Responses.data.msg ? Responses.data.msg : null))
            dispatch({ type: BARANG_LOADED })
            dispatch({ type: RELOADE_PAGE })
        }
    } catch (err) {
        console.log('Log: Delete_a_Barang -> err', err)
        dispatch(
            Create_Error_Messages(
                err.response ? (
                    err.response.status ? err.response.status
                        : null) : null,
                err.response ? (
                    err.response.data.msg ? err.response.data.msg
                        : null) : 'anda tidak terhubung dengan server'
            ))
        dispatch({ type: BARANG_LOADED })
    }
}

export const Load_Barang_List = () => async (dispatch, getState) => {
    dispatch({ type: BARANG_LOADING })
    try {
        const Responses = await Database_Load_Barang_List(tokenConfig(getState))
        if (Responses) {
            dispatch({
                type: LIST_BARANG,
                payload: Responses
            })
            dispatch({ type: BARANG_LOADED })
        }
    } catch (err) {
        console.log('Log: Load_Barang_List -> err', err)
        dispatch(
            Create_Error_Messages(
                err.response ? (
                    err.response.status ? err.response.status
                        : null) : null,
                err.response ? (
                    err.response.data.msg ? err.response.data.msg
                        : null) : 'anda tidak terhubung dengan server'
            ))
        dispatch({ type: BARANG_LOADED })
    }
}

export const Load_Barang_List_Base_On_Jenis = (JenisID) => async (dispatch, getState) => {
    dispatch({ type: BARANG_LOADING })
    try {
        const Responses = await Database_Load_Barang_Base_on_JenisBarang(tokenConfig(getState), JenisID)
        if (Responses) {
            dispatch({
                type: LIST_BARANG,
                payload: Responses
            })
            dispatch({ type: BARANG_LOADED })
        }
    } catch (err) {
        console.log('Log: Load_Barang_List_Base_On_Jenis -> err', err)
        dispatch(
            Create_Error_Messages(
                err.response ? (
                    err.response.status ? err.response.status
                        : null) : null,
                err.response ? (
                    err.response.data.msg ? err.response.data.msg
                        : null) : 'anda tidak terhubung dengan server'
            ))
        dispatch({ type: BARANG_LOADED })
    }
}

export const Load_Export_Query_Barang = (Query) => async (dispatch, getState) => {
    dispatch({ type: BARANG_LOADING })
    try {
        const Responses = Action_Denied()
        if (Responses) {
            dispatch(Create_Info_Messages(Responses.status ? Responses.status : null, Responses.data.msg ? Responses.data.msg : null))
            dispatch({ type: BARANG_LOADED })
        }
    } catch (err) {
        console.log('Log: Load_Export_Query_Barang -> err', err)
        dispatch(
            Create_Error_Messages(
                err.response ? (
                    err.response.status ? err.response.status
                        : null) : null,
                err.response ? (
                    err.response.data.msg ? err.response.data.msg
                        : null) : 'anda tidak terhubung dengan server'
            ))
        dispatch({ type: BARANG_LOADED })
    }
}

export const Export_Barang = (Data, Auth) => async (dispatch, getState) => {
    dispatch({ type: BARANG_LOADING })
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

        // const Responses = await axios.post(`${IpAddres}/api/barang/export`, body, {
        //     responseType: 'blob',
        //     ...tokenConfig(getState)
        // })
        // // console.log('Log: Export_Barang -> Responses', Responses)
        // if (Responses) {
        //     const url = window.URL.createObjectURL(new Blob([Responses.data]))
        //     const link = document.createElement('a')
        //     link.href = url
        //     link.setAttribute('download', 'Export.Barang.xlsx')
        //     document.body.appendChild(link)
        //     link.click()
        //     dispatch(Create_Success_Messages(null, 'Proses Export Barang Berhasil'))
        //     dispatch({ type: BARANG_LOADED })
        // }
        const Responses = Action_Denied()
        if (Responses) {
            dispatch(Create_Info_Messages(Responses.status ? Responses.status : null, Responses.data.msg ? Responses.data.msg : null))
            dispatch({ type: BARANG_LOADED })
        }
    } catch (err) {
        console.log('Log: Export_Barang -> err', err)
        dispatch(Create_Error_Messages(null, 'Ada Kesalahan Pada Proses Export History'))
        dispatch({ type: BARANG_LOADED })
    }
}

export const Cek_Import_Barang = (Data) => async (dispatch, getState) => {
    // console.log('Log: Cek_Import_Barang -> Data', Data)
    dispatch({ type: BARANG_LOADING })
    dispatch({
        type: CEK_IMPORT_BARANG,
        payload: Data
    })
    dispatch({ type: BARANG_LOADED })
}

export const Import_Barang = (Data, Auth) => async (dispatch, getState) => {
    // console.log('Log: Import_Barang -> Data', Data)
    // console.log('Log: Import_Barang -> Auth', Auth)
    dispatch({ type: BARANG_LOADING })
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

        // const Responses = await axios.post(`${IpAddres}/api/barang/import`, body, tokenConfig(getState))
        // // console.log('Log: Import_Barang -> Responses', Responses)
        // if (Responses) {
        //     dispatch(Create_Success_Messages(Responses.status ? Responses.status : null, Responses.data.msg ? Responses.data.msg : null))
        //     dispatch({ type: BARANG_LOADED })
        //     dispatch({ type: RELOADE_PAGE })
        // }
        const Responses = Action_Denied()
        if (Responses) {
            dispatch(Create_Info_Messages(Responses.status ? Responses.status : null, Responses.data.msg ? Responses.data.msg : null))
            dispatch({ type: BARANG_LOADED })
        }
    } catch (err) {
        console.log('Log: Import_Barang -> err', err)
        dispatch(
            Create_Error_Messages(
                err.response ? (
                    err.response.status ? err.response.status
                        : null) : null,
                err.response ? (
                    err.response.data.msg ? err.response.data.msg
                        : null) : 'anda tidak terhubung dengan server'
            ))
        dispatch({ type: BARANG_LOADED })
    }
}