import {
    ////// POINT-LOADING
    PELANGGARAN_LOADING,
    PELANGGARAN_NOT_LOADING,
    ////// POINT-PELANGGARAN
    ////// POINT-PELANGGARAN-LIST_LOADED
    PELANGGARAN_LIST_DATA_LOADED,
    ////// POINT-PELANGGARAN-VIEW
    _BUTTON_PELANGGARAN_DETAIL_VIEW_,
    PELANGGARAN_DETAIL_LOADED,
    ////// POINT-PELANGGARAN-CREATE
    // PELANGGARAN_CREATED,
    ////// POINT-PELANGGARAN-UPDATE
    _BUTTON_PELANGGARAN_UPDATE_,
    PELANGGARAN_UPDATE_DATA_LOADED,
    // PELANGGARAN_UPDATED,
    ////// POINT-PELANGGARAN-DELETE
    // PELANGGARAN_DELETED,
    ////// POINT.POINT
    ////// POINT.POINT-LOAD
    POINT_LIST_POINT_LOADED,
    POINT_SCORE_LOADED,
    ////// POINT.POINTUNCONFIRM
    ////// POINT.POINTUNCONFIRM-LOAD
    POINT_POINTUNCONFIRM_LOADED,
    ////// POINT.POINTCONFIRM
    ////// POINT.POINTCONFIRM-LOAD
    POINT_POINTCONFIRM_LOADED,
    ////// POINT.SUBMISSION
    ////// POINT.SUBMISSION-LOAD-DETAIL
    _BUTTON_POINT_DETAIL_VIEW_,
    POINT_POINTSUBMISSION_DETAIL_LOADED,
    ////// POINT.SUBMISSION-CREATE
    // POINT_POINTSUBMISSION_CREATED,
} from './Type.Actions'

import { tokenConfig } from './Auth.Actions'

import {
    SuccessMassages,
} from './Messages.Actions'

import {
    Action_Denied,
    Database_Load_List_of_Pelanggaran,
    Database_Load_Pelanggaran_Detail,
    Database_Load_Point_List_of_Point,
    Database_Load_Biodata,
    Database_Load_List_of_Unconfirm_Point,
    Database_Load_List_of_Confirm_Point,
    Database_Load_Point_Submission_Detail,
} from './Database.Actions'

////// POINT-PELANGGARAN
////// POINT-PELANGGARAN-LIST_LOADED
export const LoadListofPelanggaran = () => async (dispatch, getState) => {
    try {
        dispatch({ type: PELANGGARAN_LOADING })
        const Responses = await Database_Load_List_of_Pelanggaran(tokenConfig(getState))
        if (Responses) {
            dispatch({
                type: PELANGGARAN_LIST_DATA_LOADED,
                payload: Responses
            })
        }
    } catch (err) {
        console.log('Log: LoadListofPelanggaran -> err', err)
        dispatch({ type: PELANGGARAN_NOT_LOADING })
    }
}
////// POINT-PELANGGARAN-VIEW
export const Button_Pelanggaran_DetailView = (PelanggaranID) => (dispatch) => {
    dispatch({
        type: _BUTTON_PELANGGARAN_DETAIL_VIEW_,
        payload: PelanggaranID,
    })
}
export const LoadPelanggaranDetail = (PelanggaranID) => async (dispatch, getState) => {
    try {
        dispatch({ type: PELANGGARAN_LOADING })
        const Responses = await Database_Load_Pelanggaran_Detail(tokenConfig(getState), PelanggaranID)
        if (Responses) {
            dispatch({
                type: PELANGGARAN_DETAIL_LOADED,
                payload: Responses
            })
        }
    } catch (err) {
        console.log('Log: LoadPelanggaranDetail -> err', err)
        dispatch({ type: PELANGGARAN_NOT_LOADING })
    }
}
////// POINT-PELANGGARAN-CREATE
export const CreatePelanggaran = (Data, authdata) => async (dispatch, getState) => {
    try {
        const Responses = Action_Denied()
        dispatch(SuccessMassages(Responses.data.msg))
    } catch (err) {
        console.log('Log: CreatePelanggaran -> err', err)
    }
}
////// POINT-PELANGGARAN-UPDATE
export const Button_UpdatePelanggaran = (PelanggaranID) => (dispatch) => {
    dispatch({
        type: _BUTTON_PELANGGARAN_UPDATE_,
        payload: PelanggaranID,
    })
}
export const LoadPelanggaranUpdate = (PelanggaranID) => async (dispatch, getState) => {
    try {
        dispatch({ type: PELANGGARAN_LOADING })
        const Responses = await Database_Load_Pelanggaran_Detail(tokenConfig(getState), PelanggaranID)
        if (Responses) {
            dispatch({
                type: PELANGGARAN_UPDATE_DATA_LOADED,
                payload: Responses
            })
        }
    } catch (err) {
        console.log('Log: LoadPelanggaranUpdate -> err', err)
        dispatch({ type: PELANGGARAN_NOT_LOADING })
    }
}
export const UpdatePelanggaran = (data, authdata) => async (dispatch, getState) => {
    try {
        const Responses = Action_Denied()
        dispatch(SuccessMassages(Responses.data.msg))
    } catch (err) {
        console.log('Log: UpdatePelanggaran -> err', err)
    }
}
////// POINT-PELANGGARAN-DELETE
export const DeletePelanggaran = (PelanggaranID) => async (dispatch, getState) => {
    try {
        const Responses = Action_Denied()
        dispatch(SuccessMassages(Responses.data.msg))
    } catch (err) {
        console.log('Log: DeletePelanggaran -> err', err)
    }
}
////// POINT-POINT
////// POINT-POINT-LOAD
export const LoadPointListofPoint = (NomerIndukDituju) => async (dispatch, getState) => {
    try {
        dispatch({ type: PELANGGARAN_LOADING })
        const Responses = await Database_Load_Point_List_of_Point(tokenConfig(getState), NomerIndukDituju)
        if (Responses) {
            dispatch({
                type: POINT_LIST_POINT_LOADED,
                payload: Responses
            })
            dispatch({ type: PELANGGARAN_NOT_LOADING })
        }
    } catch (err) {
        console.log('Log: LoadPointListofPoint -> err', err)
        dispatch({ type: PELANGGARAN_NOT_LOADING })
    }
}
export const GetPointDetail = (BiodataID) => async (dispatch, getState) => {
    try {
        dispatch({ type: PELANGGARAN_LOADING })
        const Responses = await Database_Load_Biodata(tokenConfig(getState), BiodataID)
        if (Responses) {
            dispatch({
                type: POINT_SCORE_LOADED,
                payload: Responses.Point
            })
        }

    } catch (err) {
        console.log('Log: GetPointDetail -> err', err)
        dispatch({ type: PELANGGARAN_NOT_LOADING })
    }
}
////// POINT-POINTUNCONFIRM
////// POINT-POINTUNCONFIRM-LOAD
export const LoadListofUnconfirmPoint = () => async (dispatch, getState) => {
    try {
        dispatch({ type: PELANGGARAN_LOADING })
        const Responses = await Database_Load_List_of_Unconfirm_Point(tokenConfig(getState))
        if (Responses) {
            dispatch({
                type: POINT_POINTUNCONFIRM_LOADED,
                payload: Responses
            })
        }
    } catch (err) {
        dispatch({ type: PELANGGARAN_NOT_LOADING })

    }
}
////// POINT.POINTCONFIRM
////// POINT.POINTCONFIRM-LOAD
export const LoadListofConfirmPoint = () => async (dispatch, getState) => {
    try {
        dispatch({ type: PELANGGARAN_LOADING })
        const Responses = await Database_Load_List_of_Confirm_Point(tokenConfig(getState))
        if (Responses) {
            dispatch({
                type: POINT_POINTCONFIRM_LOADED,
                payload: Responses
            })
        }
    } catch (err) {
        console.log('Log: LoadListofConfirmPoint -> err', err)
        dispatch({ type: PELANGGARAN_NOT_LOADING })
    }
}
////// POINT.SUBMISSION
////// POINT.SUBMISSION-LOAD-DETAIL
export const Button_PointDetailView = (PointID) => (dispatch) => {
    dispatch({
        type: _BUTTON_POINT_DETAIL_VIEW_,
        payload: PointID,
    })
}
export const LoadPointSubmissionDetail = (PointSubmissionID) => async (dispatch, getState) => {
    try {
        dispatch({ type: PELANGGARAN_LOADING })
        const Responses = await Database_Load_Point_Submission_Detail(tokenConfig(getState), PointSubmissionID)
        if (Responses) {
            dispatch({
                type: POINT_POINTSUBMISSION_DETAIL_LOADED,
                payload: Responses
            })
        }
    } catch (err) {
        console.log('Log: LoadPointSubmissionDetail -> err', err)
        dispatch({ type: PELANGGARAN_NOT_LOADING })
    }
}
////// POINT.SUBMISSION-CREATE
export const PointSubmit = (UserNomerInduk, TargetBiodataID, ket, authdata) => async (dispatch, getState) => {
    try {
        const Responses = Action_Denied()
        dispatch(SuccessMassages(Responses.data.msg))
    } catch (err) {
        console.log('Log: PointSubmit -> err', err)
    }
}
////// POINT.POINTACCEPTION
export const PointAcception = (PointID, UserNI, AcceptionAction, authdata) => async (dispatch, getState) => {
    const bodydata = new FormData();

    bodydata.append('Nomer_Induk_Assessor', UserNI)
    if (AcceptionAction === 'Accepted') {
        try {
            const Responses = Action_Denied()
            dispatch(SuccessMassages(Responses.data.msg))
        } catch (err) {
            console.log('Log: PointAcception -> err', err)
        }
    } else {
        try {
            const Responses = Action_Denied()
            dispatch(SuccessMassages(Responses.data.msg))
        } catch (err) {
            console.log('Log: PointAcception -> err', err)
        }
    }
}