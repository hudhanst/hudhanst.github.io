import {
    SuccessMassages
} from './Messages.Actions'

import {
    ////// PRESTASI
    ////// PRESTASI-LOADING
    PRESTASI_LOADING,
    PRESTASI_NOT_LOADING,
    ////// PRESTASI.INSTANSI
    ////// PRESTASI.INSTANSI-LIST_LOADED
    INSTANSI_LIST_DATA_LOADED,
    ////// PRESTASI.INSTANSI-VIEW
    _BUTTON_INSTANSI_DETAIL_VIEW_,
    INSTANSI_DETAIL_LOADED,
    ////// PRESTASI.INSTANSI-CREATE
    // INSTANSI_CREATED,
    ////// PRESTASI.INSTANSI-UPDATE
    _BUTTON_INSTANSI_UPDATE_,
    INSTANSI_UPDATE_DATA_LOADED,
    // INSTANSI_UPDATED,
    ////// PRESTASI.INSTANSI-DELETE
    // INSTANSI_DELETED,
    ////// PRESTASI.PRESTASI
    ////// PRESTASI.PRESTASI-LOAD
    PRESTASI_LIST_PRESTASI_LOADED,
    PRESTASI_SCORE_LOADED,
    ////// PRESTASI.PRESTASIUNCONFIRM
    ////// PRESTASI.PRESTASIUNCONFIRM-LOAD
    PRESTASI_PRESTASIUNCONFIRM_LOADED,
    ////// PRESTASI.PRESTASICONFIRM
    ////// PRESTASI.PRESTASICONFIRM-LOAD
    PRESTASI_PRESTASICONFIRM_LOADED,
    ////// PRESTASI.SUBMISSION
    ////// PRESTASI.SUBMISSION-LOAD-DETAIL
    _BUTTON_PRESTASI_DETAIL_VIEW_,
    PRESTASI_PRESTASISUBMISSION_DETAIL_LOADED,
    ////// PRESTASI.SUBMISSION-CREATE
    // PRESTASI_PRESTASISUBMISSION_CREATED,
} from './Type.Actions'

import { tokenConfig } from './Auth.Actions'

import {
    Action_Denied,
    Database_Load_List_of_Instansi,
    Database_Load_Instansi_Detail,
    Database_Load_Prestasi_List_of_Prestasi,
    Database_Load_Biodata,
    Database_Load_List_of_Unconfirm_Prestasi,
    Database_Load_List_of_Confirm_Prestasi,
    Database_Load_Prestasi_Submission_Detail,
} from './Database.Actions'

////// PRESTASI
////// PRESTASI.INSTANSI
////// PRESTASI.INSTANSI-GET
export const LoadListofInstansi = () => async (dispatch, getState) => {
    try {
        dispatch({ type: PRESTASI_LOADING })
        const Responses = await Database_Load_List_of_Instansi(tokenConfig(getState))
        if (Responses) {
            dispatch({
                type: INSTANSI_LIST_DATA_LOADED,
                payload: Responses
            })
        }
    } catch (err) {
        dispatch({ type: PRESTASI_NOT_LOADING })
    }
}
export const Button_Instansi_DetailView = (InstansiID) => (dispatch, getState) => {
    dispatch({
        type: _BUTTON_INSTANSI_DETAIL_VIEW_,
        payload: InstansiID,
    })
}
export const LoadInstansiDetail = (InstansiID) => async (dispatch, getState) => {
    try {
        dispatch({ type: PRESTASI_LOADING })
        const Responses = await Database_Load_Instansi_Detail(tokenConfig(getState), InstansiID)
        if (Responses) {
            dispatch({
                type: INSTANSI_DETAIL_LOADED,
                payload: Responses
            })
        }
    } catch (err) {
        dispatch({ type: PRESTASI_NOT_LOADING })
    }
}
////// PRESTASI.INSTANSI-CREATE
export const CreateInstansi = (Data, authdata) => async (dispatch, getState) => {
    try {
        const Responses = Action_Denied()
        dispatch(SuccessMassages(Responses.data.msg))
    } catch (err) {
        console.log('Log: CreateInstansi -> err', err)
    }
}
////// PRESTASI.INSTANSI-UPDATE
export const Button_UpdateInstansi = (InstansiID) => (dispatch, getState) => {
    dispatch({
        type: _BUTTON_INSTANSI_UPDATE_,
        payload: InstansiID,
    })
}
export const LoadInstansiUpdate = (InstansiID) => async (dispatch, getState) => {
    try {
        dispatch({ type: PRESTASI_LOADING })
        const Responses = await Database_Load_Instansi_Detail(tokenConfig(getState), InstansiID)
        if (Responses) {
            dispatch({
                type: INSTANSI_UPDATE_DATA_LOADED,
                payload: Responses
            })
        }
    } catch (err) {
        console.log('Log: LoadInstansiUpdate -> err', err)
        dispatch({ type: PRESTASI_NOT_LOADING })
    }
}
export const UpdateInstansi = (data, authdata) => async (dispatch, getState) => {
    try {
        const Responses = Action_Denied()
        dispatch(SuccessMassages(Responses.data.msg))
    } catch (err) {
        console.log('Log: UpdateInstansi -> err', err)
    }
}
////// PRESTASI.INSTANSI-DELETE
export const DeleteInstansi = (InstansiID) => async (dispatch, getState) => {
    try {
        const Responses = Action_Denied()
        dispatch(SuccessMassages(Responses.data.msg))
    } catch (err) {
        console.log('Log: DeleteInstansi -> err', err)
    }
}
////// PRESTASI-PRESTASI
////// PRESTASI-PRESTASI-LOAD
export const LoadPrestasiListofPrestasi = (BiodataID) => async (dispatch, getState) => {
    try {
        dispatch({ type: PRESTASI_LOADING })
        const Responses = await Database_Load_Prestasi_List_of_Prestasi(tokenConfig(getState), BiodataID)
        if (Responses) {
            dispatch({
                type: PRESTASI_LIST_PRESTASI_LOADED,
                payload: Responses,
            })
            dispatch({ type: PRESTASI_NOT_LOADING })
        }
    } catch (err) {
        console.log('Log: LoadPrestasiListofPrestasi -> err', err)
        dispatch({ type: PRESTASI_NOT_LOADING })
    }
}
export const GetPrestasiDetail = (BiodataID) => async (dispatch, getState) => {
    try {
        dispatch({ type: PRESTASI_LOADING })
        const Responses = await Database_Load_Biodata(tokenConfig(getState), BiodataID)
        if (Responses) {
            dispatch({
                type: PRESTASI_SCORE_LOADED,
                payload: Responses.Point
            })
        }
    } catch (err) {
        dispatch({ type: PRESTASI_NOT_LOADING })
    }
}
////// PRESTASI-PRESTASIUNCONFIRM
////// PRESTASI-PRESTASIUNCONFIRM-LOAD
export const LoadListofUnconfirmPrestasi = () => async (dispatch, getState) => {
    try {
        dispatch({ type: PRESTASI_LOADING })
        const Responses = await Database_Load_List_of_Unconfirm_Prestasi(tokenConfig(getState))
        if (Responses) {
            dispatch({
                type: PRESTASI_PRESTASIUNCONFIRM_LOADED,
                payload: Responses
            })
        }
    } catch (err) {
        console.log('Log: LoadListofUnconfirmPrestasi -> err', err)
        dispatch({ type: PRESTASI_NOT_LOADING })
    }
}
////// PRESTASI.PRESTASICONFIRM
////// PRESTASI.PRESTASICONFIRM-LOAD
export const LoadListofConfirmPrestasi = () => async (dispatch, getState) => {
    try {
        dispatch({ type: PRESTASI_LOADING })
        const Responses = await Database_Load_List_of_Confirm_Prestasi(tokenConfig(getState))
        if (Responses) {
            dispatch({
                type: PRESTASI_PRESTASICONFIRM_LOADED,
                payload: Responses
            })
        }
    } catch (err) {
        console.log('Log: LoadListofConfirmPrestasi -> err', err)
        dispatch({ type: PRESTASI_NOT_LOADING })
    }
}
////// PRESTASI.SUBMISSION
////// PRESTASI.SUBMISSION-LOAD-DETAIL
export const Button_PrestasiDetailView = (PrestasiID) => (dispatch) => {
    dispatch({
        type: _BUTTON_PRESTASI_DETAIL_VIEW_,
        payload: PrestasiID,
    })
}
export const LoadPrestasiSubmissionDetail = (PrestasiSubmissionID) => async (dispatch, getState) => {
    try {
        dispatch({ type: PRESTASI_LOADING })
        const Responses = await Database_Load_Prestasi_Submission_Detail(tokenConfig(getState), PrestasiSubmissionID)
        if (Responses) {
            dispatch({
                type: PRESTASI_PRESTASISUBMISSION_DETAIL_LOADED,
                payload: Responses
            })
        }
    } catch (err) {
        console.log('Log: LoadPrestasiSubmissionDetail -> err', err)
        dispatch({ type: PRESTASI_NOT_LOADING })
    }
}
////// PRESTASI.SUBMISSION-CREATE
export const PrestasiSubmit = (UserNomerInduk, TargetBiodataID, ket, authdata) => async (dispatch, getState) => {
    try {
        const Responses = Action_Denied()
        dispatch(SuccessMassages(Responses.data.msg))
    } catch (err) {
        console.log('Log: PrestasiSubmit -> err', err)
    }
}
////// PRESTASI.PRESTASIACCEPTION
export const PrestasiAcception = (PrestasiID, UserNI, AcceptionAction, authdata) => async (dispatch, getState) => {
    const bodydata = new FormData();

    bodydata.append('Nomer_Induk_Assessor', UserNI)
    if (AcceptionAction === 'Accepted') {
        try {
            const Responses = Action_Denied()
            dispatch(SuccessMassages(Responses.data.msg))
        } catch (err) {
            console.log('Log: PrestasiAcception -> err', err)
        }
    } else {
        try {
            const Responses = Action_Denied()
            dispatch(SuccessMassages(Responses.data.msg))
        } catch (err) {
            console.log('Log: PrestasiAcception -> err', err)
        }
    }
}