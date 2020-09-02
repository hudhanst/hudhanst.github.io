import { tokenConfig } from './Auth.Actions'

import {
    TRANSAKSI_LOADING,
    TRANSAKSI_LOADED,
    RELOADE_PAGE,
    CEK_IMPORT_TRANSAKSI,
    ////// TRANSAKSI
    ADD_BARANG_TO_TRANSAKSI,
    CHANGE_TRANSAKSI_DETAIL,
    CLEAR_A_BARANG_FROM_TRANSAKSI,
    CLEAR_BARANG_IN_TRANSAKSI,
    ////// BELANJA
    ADD_BARANG_TO_BELANJA,
    CHANGE_BELANJA_DETAIL,
    CLEAR_A_BARANG_FROM_BELANJA,
    CLEAR_BARANG_IN_BELANJA,
    //////
    LIST_TRANSAKSI,
    // QUERY_LIST_TRANSAKSI,
    GET_TRANSAKSI_ID_FOR_DETAIL,
    TRANSAKSI_DETAIL,
} from './Type.Actions'

import {
    Create_Error_Messages,
    // Create_Success_Messages,
    Create_Info_Messages,
} from './Messages.Actions'

import {
    Action_Denied,
    Database_Load_Transaksi_List,
    Database_Load_Transaksi_Detail,
} from './Database.Actions'

////// TRANSAKSI
export const Add_Barang_To_Transaksi = (Barang) => (dispatch) => {
    dispatch({ type: TRANSAKSI_LOADING })
    dispatch({
        type: ADD_BARANG_TO_TRANSAKSI,
        payload: Barang,
    })
    dispatch({ type: TRANSAKSI_LOADED })
}
export const Change_Transaksi_Detail = (Index, Jumlah, NamaSatuan, MinBarang, HargaSatuan) => (dispatch) => {
    dispatch({ type: TRANSAKSI_LOADING })
    const TotalBarang = Jumlah * MinBarang
    const HargaTotal = TotalBarang * HargaSatuan
    dispatch({
        type: CHANGE_TRANSAKSI_DETAIL,
        payload: { Index, NamaSatuan, Jumlah, HargaSatuan, TotalBarang, HargaTotal }
    })
    dispatch({ type: TRANSAKSI_LOADED })
}
export const Clear_A_Barang_From_Transaksi = (Index) => (dispatch) => {
    dispatch({ type: TRANSAKSI_LOADING })
    dispatch({
        type: CLEAR_A_BARANG_FROM_TRANSAKSI,
        payload: Index,
    })
    dispatch({ type: TRANSAKSI_LOADED })
}
export const Clear_Barang_In_Transaksi = () => (dispatch) => {
    dispatch({ type: TRANSAKSI_LOADING })
    dispatch({ type: CLEAR_BARANG_IN_TRANSAKSI })
    dispatch({ type: TRANSAKSI_LOADED })
}

export const Transaksi_Transaksi = (Data, Diskon, PotonganHarga, Ket, Auth) => async (dispatch, getState) => {
    dispatch({ type: TRANSAKSI_LOADING })
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

        // const NamaKasir = Auth.UserName
        const DetailTransaksi = Data.map(({ SatuanOptions, isDecimal, isEditAble, ...item }) => item)
        const Total = DetailTransaksi.reduce((prev, cur) => {
            return prev + cur.HargaTotal
        }, 0)
        let TotalPembayaran = Total ? Total : 0
        if ((Diskon >= 1) && (Diskon <= 100)) {
            TotalPembayaran = TotalPembayaran - ((TotalPembayaran * Diskon) / 100)
            if ((PotonganHarga >= 0) && (PotonganHarga <= TotalPembayaran)) {
                TotalPembayaran = TotalPembayaran - PotonganHarga
            }
        } else {
            if ((PotonganHarga >= 0) && (PotonganHarga <= TotalPembayaran)) {
                TotalPembayaran = TotalPembayaran - PotonganHarga
            }
        }

        // const body = JSON.stringify({ NamaKasir, DetailTransaksi, Diskon, PotonganHarga, TotalPembayaran, Ket })
        const Responses = Action_Denied()
        // console.log('Log: Transaksi_Transaksi -> Responses', Responses)
        if (Responses) {
            dispatch(Create_Info_Messages(Responses.status ? Responses.status : null, Responses.data.msg ? Responses.data.msg : null))
            dispatch({ type: TRANSAKSI_LOADED })
            dispatch({ type: RELOADE_PAGE })
        }
    } catch (err) {
        console.log('Log: Transaksi_Transaksi -> err', err)
        dispatch(
            Create_Error_Messages(
                err.response ? (
                    err.response.status ? err.response.status
                        : null) : null,
                err.response ? (
                    err.response.data.msg ? err.response.data.msg
                        : null) : 'anda tidak terhubung dengan server'
            ))
        dispatch({ type: TRANSAKSI_LOADED })
    }
}

////// BELANJA

export const Add_Barang_To_Belanja = (Barang) => (dispatch) => {
    dispatch({ type: TRANSAKSI_LOADING })
    dispatch({
        type: ADD_BARANG_TO_BELANJA,
        payload: Barang,
    })
    dispatch({ type: TRANSAKSI_LOADED })
}
export const Change_Belanja_Detail = (Index, Jumlah, HargaModal, HargaJual) => (dispatch) => {
    dispatch({ type: TRANSAKSI_LOADING })
    const TotalModal = Jumlah * HargaModal
    dispatch({
        type: CHANGE_BELANJA_DETAIL,
        payload: { Index, Jumlah, HargaModal, HargaJual, TotalModal }
    })
    dispatch({ type: TRANSAKSI_LOADED })
}
export const Clear_A_Barang_From_Belanja = (Index) => (dispatch) => {
    dispatch({ type: TRANSAKSI_LOADING })
    dispatch({
        type: CLEAR_A_BARANG_FROM_BELANJA,
        payload: Index,
    })
    dispatch({ type: TRANSAKSI_LOADED })
}
export const Clear_Barang_In_Belanja = () => (dispatch) => {
    dispatch({ type: TRANSAKSI_LOADING })
    dispatch({ type: CLEAR_BARANG_IN_BELANJA })
    dispatch({ type: TRANSAKSI_LOADED })
}

export const Transaksi_Belanja = (Data, Ket, Auth) => async (dispatch, getState) => {
    dispatch({ type: TRANSAKSI_LOADING })
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
        // const NamaKasir = Auth.UserName
        // const DetailTransaksi = Data.map(({ isEditAble, ...item }) => item)
        // const TotalPembayaran = DetailTransaksi.reduce((prev, cur) => {
        //     return prev + cur.TotalModal
        // }, 0)

        // const body = JSON.stringify({ NamaKasir, DetailTransaksi, TotalPembayaran, Ket })

        const Responses = Action_Denied()
        if (Responses) {
            dispatch(Create_Info_Messages(Responses.status ? Responses.status : null, Responses.data.msg ? Responses.data.msg : null))
            dispatch({ type: TRANSAKSI_LOADED })
            dispatch({ type: RELOADE_PAGE })
        }
    } catch (err) {
        console.log('Log: Transaksi_Belanja -> err', err)
        dispatch(
            Create_Error_Messages(
                err.response ? (
                    err.response.status ? err.response.status
                        : null) : null,
                err.response ? (
                    err.response.data.msg ? err.response.data.msg
                        : null) : 'anda tidak terhubung dengan server'
            ))
        dispatch({ type: TRANSAKSI_LOADED })
    }
}

export const Load_Transaksi_List = () => async (dispatch, getState) => {
    dispatch({ type: TRANSAKSI_LOADING })
    try {
        const Responses = await Database_Load_Transaksi_List(tokenConfig(getState))
        if (Responses) {
            dispatch({
                type: LIST_TRANSAKSI,
                payload: Responses
            })
            dispatch({ type: TRANSAKSI_LOADED })
        }
    } catch (err) {
        console.log('Log: Load_Transaksi_List -> err', err)
        dispatch(
            Create_Error_Messages(
                err.response ? (
                    err.response.status ? err.response.status
                        : null) : null,
                err.response ? (
                    err.response.data.msg ? err.response.data.msg
                        : null) : 'anda tidak terhubung dengan server'
            ))
        dispatch({ type: TRANSAKSI_LOADED })
    }
}
export const Load_Query_Transaksi_List = (data) => async (dispatch, getState) => {
    dispatch({ type: TRANSAKSI_LOADING })
    try {
        // const TransaksiID = data.TransaksiID
        // const UserName = data.UserName
        // const Jenis = data.Jenis
        // const DateMin = data.DateMin
        // const DateMax = data.DateMax
        // const DiskonMin = data.DiskonMin
        // const DiskonMax = data.DiskonMax
        // const PotonganHargaMin = data.PotonganHargaMin
        // const PotonganHargaMax = data.PotonganHargaMax
        // const TotalTransaksiMin = data.TotalTransaksiMin
        // const TotalTransaksiMax = data.TotalTransaksiMax
        // const Ket = data.Ket

        // const body = JSON.stringify({ TransaksiID, UserName, Jenis, DateMin, DateMax, DiskonMin, DiskonMax, PotonganHargaMin, PotonganHargaMax, TotalTransaksiMin, TotalTransaksiMax, Ket })
        // const Responses = await axios.post(`${IpAddres}/api/transaksi/querylist`, body, tokenConfig(getState))
        // // console.log('Log: Load_Query_Transaksi_List -> Responses', Responses)
        // if (Responses) {
        //     dispatch({
        //         type: QUERY_LIST_TRANSAKSI,
        //         payload: Responses.data.ListTransaksi
        //     })
        //     if (Responses.data.ListTransaksi) {
        //         const ListTransaksi = Responses.data.ListTransaksi
        //         if (ListTransaksi.length >= 1) {
        //             dispatch(Create_Success_Messages(Responses.status ? Responses.status : null, Responses.data.msg ? Responses.data.msg : null))
        //         } else {
        //             dispatch(Create_Error_Messages(null, 'data tidak ditemukan'))
        //         }
        //     }
        //     dispatch({ type: TRANSAKSI_LOADED })
        // }
        const Responses = Action_Denied()
        if (Responses) {
            dispatch(Create_Info_Messages(Responses.status ? Responses.status : null, Responses.data.msg ? Responses.data.msg : null))
            dispatch({ type: TRANSAKSI_LOADED })
        }
    } catch (err) {
        console.log('Log: Load_Query_Transaksi_List -> err', err)
        dispatch(
            Create_Error_Messages(
                err.response ? (
                    err.response.status ? err.response.status
                        : null) : null,
                err.response ? (
                    err.response.data.msg ? err.response.data.msg
                        : null) : 'anda tidak terhubung dengan server'
            ))
        dispatch({ type: TRANSAKSI_LOADED })
    }
}
export const get_TransaksiId_Detail = (TransaksiID) => (dispatch) => {
    dispatch({
        type: GET_TRANSAKSI_ID_FOR_DETAIL,
        payload: TransaksiID
    })
}
export const get_TransaksiDetail = (TransaksiID) => async (dispatch, getState) => {
    dispatch({ type: TRANSAKSI_LOADING })
    try {
        const Responses = await Database_Load_Transaksi_Detail(tokenConfig(getState), TransaksiID)
        if (Responses) {
            dispatch({
                type: TRANSAKSI_DETAIL,
                payload: Responses
            })
            dispatch({ type: TRANSAKSI_LOADED })
        }
    } catch (err) {
        console.log('Log: get_TransaksiDetail -> err', err)
        dispatch(
            Create_Error_Messages(
                err.response ? (
                    err.response.status ? err.response.status
                        : null) : null,
                err.response ? (
                    err.response.data.msg ? err.response.data.msg
                        : null) : 'anda tidak terhubung dengan server'
            ))
        dispatch({ type: TRANSAKSI_LOADED })
    }
}

export const Export_Transaksi = (Data, Auth) => async (dispatch, getState) => {
    // console.log('Log: Export_Transaksi -> Data', Data)
    // console.log('Log: Export_Transaksi -> Auth', Auth)
    dispatch({ type: TRANSAKSI_LOADING })
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

        // const IpAddres = Get_IpAddres()
        // console.log('Log: Export_Transaksi -> IpAddres', IpAddres)

        // const ExportData = Data

        // const body = JSON.stringify({ ExportData })

        // const Responses = await axios.post(`${IpAddres}/api/transaksi/export`, body, {
        //     responseType: 'blob',
        //     ...tokenConfig(getState)
        // })
        // // console.log('Log: Export_Transaksi -> Responses', Responses)
        // if (Responses) {
        //     const url = window.URL.createObjectURL(new Blob([Responses.data]))
        //     const link = document.createElement('a')
        //     link.href = url
        //     link.setAttribute('download', 'Export.Transaksi.xlsx')
        //     document.body.appendChild(link)
        //     link.click()

        //     dispatch(Create_Success_Messages(null, 'Proses Export Transaksi Berhasil'))
        //     dispatch({ type: TRANSAKSI_LOADED })
        // }
        const Responses = Action_Denied()
        if (Responses) {
            dispatch(Create_Info_Messages(Responses.status ? Responses.status : null, Responses.data.msg ? Responses.data.msg : null))
            dispatch({ type: TRANSAKSI_LOADED })
        }
    } catch (err) {
        console.log('Log: Export_Transaksi -> err', err)
        dispatch(Create_Error_Messages(null, 'Ada Kesalahan Pada Proses Export Transaksi'))
        dispatch({ type: TRANSAKSI_LOADED })
    }
}

export const Cek_Import_Transaksi = (Data) => (dispatch, getState) => {
    dispatch({ type: TRANSAKSI_LOADING })
    dispatch({
        type: CEK_IMPORT_TRANSAKSI,
        payload: Data
    })
    dispatch({ type: TRANSAKSI_LOADED })
}

export const Import_Transaksi = (Data, Auth) => async (dispatch, getState) => {
    dispatch({ type: TRANSAKSI_LOADING })
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

        // const IpAddres = Get_IpAddres()
        // console.log('Log: Import_Transaksi -> IpAddres', IpAddres)

        // const ImportData = Data

        // const body = JSON.stringify({ ImportData })

        // const Responses = await axios.post(`${IpAddres}/api/transaksi/import`, body, tokenConfig(getState))
        // // console.log('Log: Import_Transaksi -> Responses', Responses)
        // if (Responses) {
        //     dispatch(Create_Success_Messages(Responses.status ? Responses.status : null, Responses.data.msg ? Responses.data.msg : null))
        //     dispatch({ type: TRANSAKSI_LOADED })
        //     dispatch({ type: RELOADE_PAGE })
        // }
        const Responses = Action_Denied()
        if (Responses) {
            dispatch(Create_Info_Messages(Responses.status ? Responses.status : null, Responses.data.msg ? Responses.data.msg : null))
            dispatch({ type: TRANSAKSI_LOADED })
            dispatch({ type: RELOADE_PAGE })
        }
    } catch (err) {
        console.log('Log: Import_Transaksi -> err', err)
        dispatch(
            Create_Error_Messages(
                err.response ? (
                    err.response.status ? err.response.status
                        : null) : null,
                err.response ? (
                    err.response.data.msg ? err.response.data.msg
                        : null) : 'anda tidak terhubung dengan server'
            ))
        dispatch({ type: TRANSAKSI_LOADED })
    }
}