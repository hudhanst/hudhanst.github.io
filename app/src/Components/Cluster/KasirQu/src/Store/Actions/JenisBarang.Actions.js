import { tokenConfig } from './Auth.Actions'

import {
    JENISBARANG_LOADING,
    JENISBARANG_LOADED,
    RELOADE_PAGE,
    GET_JENISBARANG_ID_FOR_DETAIL,
    JENISBARANG_DETAIL,
    GET_JENISBARANG_ID_FOR_UPDATE,
    JENISBARANG_DELETED,
    LIST_JENISBARANG,
    CEK_IMPORT_KATAGORIBARANG,
    // LIST_QUERY_JENISBARANG_EXPORT,
} from './Type.Actions'

import {
    Create_Error_Messages,
    // Create_Success_Messages,
    Create_Info_Messages,
} from './Messages.Actions'

import {
    Action_Denied,
    Database_Load_JenisBarang_List,
    Database_Load_JenisBarang_Detail,
} from './Database.Actions'

export const get_JenisBarangId_Detail = (JenisBarangID) => (dispatch) => {
    dispatch({
        type: GET_JENISBARANG_ID_FOR_DETAIL,
        payload: JenisBarangID
    })
}

export const get_JenisBarangDetail = (JenisBarangID) => async (dispatch, getState) => {
    dispatch({ type: JENISBARANG_LOADING })
    try {
        const Responses = await Database_Load_JenisBarang_Detail(tokenConfig(getState), JenisBarangID)
        if (Responses) {
            dispatch({
                type: JENISBARANG_DETAIL,
                payload: Responses
            })
            dispatch({ type: JENISBARANG_LOADED })
        }
    } catch (err) {
        console.log('Log: get_JenisBarangDetail -> err', err)
        dispatch(
            Create_Error_Messages(
                err.response ? (
                    err.response.status ? err.response.status
                        : null) : null,
                err.response ? (
                    err.response.data.msg ? err.response.data.msg
                        : null) : 'anda tidak terhubung dengan server'
            ))
        dispatch({ type: JENISBARANG_LOADED })
    }
}

export const Add_JenisBarang = (JenisBarang, Auth) => async (dispatch, getState) => {
    dispatch({ type: JENISBARANG_LOADING })
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
            dispatch({ type: JENISBARANG_LOADED })
            dispatch({ type: RELOADE_PAGE })
        }
    } catch (err) {
        console.log('Log: Add_JenisBarang -> err', err)
        dispatch(
            Create_Error_Messages(
                err.response ? (
                    err.response.status ? err.response.status
                        : null) : null,
                err.response ? (
                    err.response.data.msg ? err.response.data.msg
                        : null) : 'anda tidak terhubung dengan server'
            ))
        dispatch({ type: JENISBARANG_LOADED })
    }
}

export const get_JenisBarangId_Update = (JenisBarangID) => (dispatch) => {
    dispatch({
        type: GET_JENISBARANG_ID_FOR_UPDATE,
        payload: JenisBarangID
    })
}

export const Update_JenisBarang = (JenisBarangID, UpdateData, Auth) => async (dispatch, getState) => {
    dispatch({ type: JENISBARANG_LOADING })
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
            dispatch({ type: JENISBARANG_LOADED })
            dispatch({ type: RELOADE_PAGE })
        }
    } catch (err) {
        console.log('Log: Update_JenisBarang -> err', err)
        dispatch(
            Create_Error_Messages(
                err.response ? (
                    err.response.status ? err.response.status
                        : null) : null,
                err.response ? (
                    err.response.data.msg ? err.response.data.msg
                        : null) : 'anda tidak terhubung dengan server'
            ))
        dispatch({ type: JENISBARANG_LOADED })
    }
}

export const Delete_a_JenisBarang = (JenisBarangID, Auth) => async (dispatch, getState) => {
    dispatch({ type: JENISBARANG_LOADING })
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
                type: JENISBARANG_DELETED,
                payload: JenisBarangID
            })
            dispatch(Create_Info_Messages(Responses.status ? Responses.status : null, Responses.data.msg ? Responses.data.msg : null))
            dispatch({ type: JENISBARANG_LOADED })
            dispatch({ type: RELOADE_PAGE })
        }
    } catch (err) {
        console.log('Log: Delete_a_JenisBarang -> err', err)
        dispatch(
            Create_Error_Messages(
                err.response ? (
                    err.response.status ? err.response.status
                        : null) : null,
                err.response ? (
                    err.response.data.msg ? err.response.data.msg
                        : null) : 'anda tidak terhubung dengan server'
            ))
        dispatch({ type: JENISBARANG_LOADED })
    }
}

export const Load_JenisBarang_List = () => async (dispatch, getState) => {
    dispatch({ type: JENISBARANG_LOADING })
    try {
        const Responses = await Database_Load_JenisBarang_List(tokenConfig(getState))
        if (Responses) {
            dispatch({
                type: LIST_JENISBARANG,
                payload: Responses
            })
            dispatch({ type: JENISBARANG_LOADED })
        }
    } catch (err) {
        console.log('Log: Load_JenisBarang_List -> err', err)
        dispatch(
            Create_Error_Messages(
                err.response ? (
                    err.response.status ? err.response.status
                        : null) : null,
                err.response ? (
                    err.response.data.msg ? err.response.data.msg
                        : null) : 'anda tidak terhubung dengan server'
            ))
        dispatch({ type: JENISBARANG_LOADED })
    }
}

export const Load_Export_Query_KatagoriBarang = (Query) => async (dispatch, getState) => {
    dispatch({ type: JENISBARANG_LOADING })
    try {
        // const Responses = await axios.post(`${IpAddres}/api/jenisbarang/querylist`, body, tokenConfig(getState))
        // // console.log('Log: Load_Export_Query_KatagoriBarang -> Responses', Responses)
        // if (Responses) {
        //     dispatch({
        //         type: LIST_QUERY_JENISBARANG_EXPORT,
        //         payload: Responses.data.QueryListJenisBarang
        //     })
        //     if (Responses.data.QueryListJenisBarang) {
        //         const QueryListJenisBarang = Responses.data.QueryListJenisBarang
        //         if (QueryListJenisBarang.length >= 1) {
        //             dispatch(Create_Success_Messages(Responses.status ? Responses.status : null, Responses.data.msg ? Responses.data.msg : null))
        //         } else {
        //             dispatch(Create_Error_Messages(null, 'data tidak ditemukan'))
        //         }
        //     }
        //     dispatch({ type: JENISBARANG_LOADED })
        // }
        const Responses = Action_Denied()
        if (Responses) {
            dispatch(Create_Info_Messages(Responses.status ? Responses.status : null, Responses.data.msg ? Responses.data.msg : null))
            dispatch({ type: JENISBARANG_LOADED })
        }
    } catch (err) {
        console.log('Log: Load_Export_Query_KatagoriBarang -> err', err)
        dispatch(
            Create_Error_Messages(
                err.response ? (
                    err.response.status ? err.response.status
                        : null) : null,
                err.response ? (
                    err.response.data.msg ? err.response.data.msg
                        : null) : 'anda tidak terhubung dengan server'
            ))
        dispatch({ type: JENISBARANG_LOADED })
    }
}

export const Cek_Import_KatagoriBarang = (Data) => (dispatch, getState) => {
    dispatch({ type: JENISBARANG_LOADING })
    dispatch({
        type: CEK_IMPORT_KATAGORIBARANG,
        payload: Data
    })
    dispatch({ type: JENISBARANG_LOADED })
}

export const Import_KatagoriBarang = (Data, Auth) => async (dispatch, getState) => {
    dispatch({ type: JENISBARANG_LOADING })
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

        // const Responses = await axios.post(`${IpAddres}/api/jenisbarang/import`, body, tokenConfig(getState))
        // // console.log('Log: Import_KatagoriBarang -> Responses', Responses)
        // if (Responses) {
        //     dispatch(Create_Success_Messages(Responses.status ? Responses.status : null, Responses.data.msg ? Responses.data.msg : null))
        //     dispatch({ type: JENISBARANG_LOADED })
        //     dispatch({ type: RELOADE_PAGE })
        // }
        const Responses = Action_Denied()
        if (Responses) {
            dispatch(Create_Info_Messages(Responses.status ? Responses.status : null, Responses.data.msg ? Responses.data.msg : null))
            dispatch({ type: JENISBARANG_LOADED })
        }
    } catch (err) {
        console.log('Log: Import_KatagoriBarang -> err', err)
        dispatch(
            Create_Error_Messages(
                err.response ? (
                    err.response.status ? err.response.status
                        : null) : null,
                err.response ? (
                    err.response.data.msg ? err.response.data.msg
                        : null) : 'anda tidak terhubung dengan server'
            ))
        dispatch({ type: JENISBARANG_LOADED })
    }
}

export const Export_KatagoriBarang = (Data, Auth) => async (dispatch, getState) => {
    dispatch({ type: JENISBARANG_LOADING })
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

        // const Responses = await axios.post(`${IpAddres}/api/jenisbarang/export`, body, {
        //     responseType: 'blob',
        //     ...tokenConfig(getState)
        // })
        // // console.log('Log: Export_KatagoriBarang -> Responses', Responses)
        // if (Responses) {
        //     const url = window.URL.createObjectURL(new Blob([Responses.data]))
        //     const link = document.createElement('a')
        //     link.href = url
        //     link.setAttribute('download', 'Export.JenisBarang.xlsx')
        //     document.body.appendChild(link)
        //     link.click()
        //     // // 1
        //     // const data = res.data
        //     // const url = window.URL.createObjectURL(
        //     //     new Blob([data], {
        //     //         type: res.headers["content-type"]
        //     //     })
        //     // )
        //     // const response = {
        //     //     file: url
        //     // }
        //     // console.log(response.file)
        //     // window.open(response.file)

        //     dispatch(Create_Success_Messages(null, 'Proses Export JenisBarang Berhasil'))
        //     dispatch({ type: JENISBARANG_LOADED })
        // }
        const Responses = Action_Denied()
        if (Responses) {
            dispatch(Create_Info_Messages(Responses.status ? Responses.status : null, Responses.data.msg ? Responses.data.msg : null))
            dispatch({ type: JENISBARANG_LOADED })
        }
    } catch (err) {
        console.log('Log: Export_KatagoriBarang -> err', err)
        dispatch(Create_Error_Messages(null, 'Ada Kesalahan Pada Proses Export JenisBarang'))
        dispatch({ type: JENISBARANG_LOADED })
    }
}