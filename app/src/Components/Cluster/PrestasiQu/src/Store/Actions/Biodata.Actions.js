// import axios from 'axios'
import {
    // ErrorMassages,
    SuccessMassages,
    // createMassages,
} from './Messages.Actions'

import {
    ////// LOADING
    BIODATA_LOADING,
    BIODATA_NOT_LOADING,
    ////// LOAD DETAIL
    _BUTTON_DETAIL_VIEW_,
    BIODATA_DETAIL_LOADED,
    BIODATA_ACCOUNT_DETAIL_LOADED,
    ////// BIODATA-UPDATE
    _BUTTON_UPDATE_BIODATA_,
    BIODATA_UPDATE_DATA_LOADED,
    // BIODATA_UPDATED,
    ////// BIODATA-DELETE
    // BIODATA_DELETED,
    ////// BIODATA ACCOUNT-UPDATE
    _BUTTON_UPDATE_BIODATA_ACCOUNT_,
    BIODATA_ACCOUNT_UPDATE_DATA_LOADED,
    // BIODATA_ACCOUNT_UPDATED,
    ////// BIODATA SISWA
    SISWA_DATA_LOADED,
    ////// BIODATA SISWA-CREATE
    // SISWA_BIODATA_CREATED,
    // SISWA_BIODATA_FAILED_CREATE,
    // SISWA_ACCOUNT_CREATED,
    // SISWA_ACCOUNT_FAILED_CREATE,
    // SISWA_FULLY_CREATED,
    ////// BIODATA STAFF
    STAFF_DATA_LOADED,
    ////// BIODATA STAFF-CREATE
    // STAFF_BIODATA_CREATED,
    // STAFF_BIODATA_FAILED_CREATE,
    // STAFF_ACCOUNT_CREATED,
    // STAFF_ACCOUNT_FAILED_CREATE,
    // STAFF_FULLY_CREATED,
    ////// BIODATA ADMIN
    ADMIN_DATA_LOADED,
    ////// BIODATA ADMIN-CREATE
    // ADMIN_BIODATA_CREATED,
    // ADMIN_BIODATA_FAILED_CREATE,
    // ADMIN_ACCOUNT_CREATED,
    // ADMIN_ACCOUNT_FAILED_CREATE,
    // ADMIN_FULLY_CREATED,
    ////// BIODATA ALL
    ALL_DATA_LOADED,

} from './Type.Actions'

import { tokenConfig } from './Auth.Actions'

import {
    Action_Denied,
    Database_Load_Biodata,
    Database_Load_Biodata_Account,
    Database_Load_List_of_Siswa,
    Database_Load_List_of_Staff,
    Database_Load_List_of_Admin,
    Database_Load_List_of_All,
} from './Database.Actions'

////// LOAD DETAIL
export const Button_DetailView = (BiodataID) => (dispatch) => {
    dispatch({
        type: _BUTTON_DETAIL_VIEW_,
        payload: BiodataID
    })
}
export const LoadBiodata = (BiodataID) => async (dispatch, getState) => {
    try {
        dispatch({ type: BIODATA_LOADING })
        const Responses = await Database_Load_Biodata(tokenConfig(getState), BiodataID)
        if (Responses) {
            dispatch({
                type: BIODATA_DETAIL_LOADED,
                payload: Responses
            })
        }
    } catch (err) {
        console.log('Log: LoadBiodata -> err', err)
        dispatch({ type: BIODATA_NOT_LOADING })
    }

}
export const LoadBiodataAccount = (BiodataID) => async (dispatch, getState) => {
    try {
        dispatch({ type: BIODATA_LOADING })
        const Responses = await Database_Load_Biodata_Account(tokenConfig(getState), BiodataID)
        if (Responses) {
            dispatch({
                type: BIODATA_ACCOUNT_DETAIL_LOADED,
                payload: Responses
            })
        }
    } catch (err) {
        console.log('Log: LoadBiodataAccount -> err', err)
        dispatch({ type: BIODATA_NOT_LOADING })
    }
}
////// BIODATA-UPDATE
export const Button_UpdateBiodata = (BiodataID) => (dispatch) => {
    dispatch({
        type: _BUTTON_UPDATE_BIODATA_,
        payload: BiodataID
    })
}
export const LoadBiodataUpdate = (BiodataID) => async (dispatch, getState) => {
    try {
        dispatch({ type: BIODATA_LOADING })
        const Responses = await Database_Load_Biodata(tokenConfig(getState), BiodataID)
        if (Responses) {
            dispatch({
                type: BIODATA_UPDATE_DATA_LOADED,
                payload: Responses
            })
        }
    } catch (err) {
        console.log('Log: LoadBiodataUpdate -> err', err)
        dispatch({ type: BIODATA_NOT_LOADING })
    }
}
export const UpdateBiodata = (data, authdata) => async (dispatch, getState) => {
    try {
        const Responses = Action_Denied()
        dispatch(SuccessMassages(Responses.data.msg))
    } catch (err) {
        console.log('Log: UpdateBiodata -> err', err)
    }
}
////// BIODATA-DELETE
export const DeleteBiodata = (BiodataID, authdata) => async (dispatch, getState) => {
    try {
        const Responses = Action_Denied()
        dispatch(SuccessMassages(Responses.data.msg))
    } catch (err) {
        console.log('Log: DeleteBiodata -> err', err)
    }
}
////// BIODATA ACCOUNT-UPDATE
export const Button_UpdateBiodataAccount = (BiodataID) => (dispatch) => {
    dispatch({
        type: _BUTTON_UPDATE_BIODATA_ACCOUNT_,
        payload: BiodataID
    })
}
export const LoadBiodataAccountUpdate = (BiodataID) => async (dispatch, getState) => {
    try {
        dispatch({ type: BIODATA_LOADING })

        const Responses = await Database_Load_Biodata_Account(tokenConfig(getState), BiodataID)
        if (Responses) {
            dispatch({
                type: BIODATA_ACCOUNT_UPDATE_DATA_LOADED,
                payload: Responses
            })
        }

    } catch (err) {
        console.log('Log: LoadBiodataAccountUpdate -> err', err)
        dispatch({ type: BIODATA_NOT_LOADING })
    }
}
export const UpdateBiodataAccount = (BiodataID, data, authdata) => async (dispatch, getState) => {
    try {
        const Responses = Action_Denied()
        dispatch(SuccessMassages(Responses.data.msg))
    } catch (err) {
        console.log('Log: UpdateBiodataAccount -> err', err)
    }
}
////// BIODATA SISWA
export const LoadListofSiswa = () => async (dispatch, getState) => {
    try {
        dispatch({ type: BIODATA_LOADING })
        const Responses = await Database_Load_List_of_Siswa(tokenConfig(getState))
        if (Responses) {
            dispatch({
                type: SISWA_DATA_LOADED,
                payload: Responses
            })
        }
    } catch (err) {
        console.log('Log: LoadListofSiswa -> err', err)
        dispatch({ type: BIODATA_NOT_LOADING })
    }
}
////// BIODATA SISWA-CREATE
export const CreateBiodataasSiswa = (Data, authdata) => async (dispatch, getState) => {
    try {
        const Responses = Action_Denied()
        dispatch(SuccessMassages(Responses.data.msg))
    } catch (err) {
        console.log('Log: CreateBiodataasSiswa -> err', err)
    }
}
////// BIODATA STAFF
export const LoadListofStaff = () => async (dispatch, getState) => {
    try {
        dispatch({ type: BIODATA_LOADING })
        const Responses = await Database_Load_List_of_Staff(tokenConfig(getState))
        if (Responses) {
            dispatch({
                type: STAFF_DATA_LOADED,
                payload: Responses
            })
        }
    } catch (err) {
        console.log('Log: LoadListofStaff -> err', err)
        dispatch({ type: BIODATA_NOT_LOADING })
    }
}
////// BIODATA STAFF-CREATE
export const CreateBiodataasStaff = (Data, authdata) => (dispatch, getState) => {
    try {
        const Responses = Action_Denied()
        dispatch(SuccessMassages(Responses.data.msg))
    } catch (err) {
        console.log('Log: CreateBiodataasStaff -> err', err)
    }
}
////// BIODATA ADMIN
export const LoadListofAdmin = () => async (dispatch, getState) => {
    try {
        dispatch({ type: BIODATA_LOADING })
        const Responses = await Database_Load_List_of_Admin(tokenConfig(getState))
        if (Responses) {
            dispatch({
                type: ADMIN_DATA_LOADED,
                payload: Responses
            })
        }
    } catch (err) {
        console.log('Log: LoadListofAdmin -> err', err)
        dispatch({ type: BIODATA_NOT_LOADING })
    }
}
////// BIODATA ADMIN-CREATE
export const CreateBiodataasAdmin = (Data, authdata) => (dispatch, getState) => {
    try {
        const Responses = Action_Denied()
        dispatch(SuccessMassages(Responses.data.msg))
    } catch (err) {
        console.log('Log: CreateBiodataasAdmin -> err', err)
    }
}
////// BIODATA ALL
export const LoadListofAll = () => async (dispatch, getState) => {
    try {
        dispatch({ type: BIODATA_LOADING })
        const Responses = await Database_Load_List_of_All(tokenConfig(getState))
        if (Responses) {
            dispatch({
                type: ALL_DATA_LOADED,
                payload: Responses
            })
        }
    } catch (err) {
        console.log('Log: LoadListofAll -> err', err)
        dispatch({ type: BIODATA_NOT_LOADING })
    }
}