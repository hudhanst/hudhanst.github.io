import {
    BLOG_LOADING,
    BLOG_LOADED,
    GET_NEWEST_BLOG_LIST,
    Go_To_Blog_Preview,
    GET_BLOG_LIST,
    GET_FILTERED_BLOG_LIST,
    GET_BLOG_DETAIL,
    USEABLE_KASIRQU_USER_LIST,
    USEABLE_PRESTASIQU_USER_LIST,
} from './Type.Actions'

import { KasirQu_Database_Load_Useable_User_List } from '../../Components/Cluster/KasirQu/src/Store/Actions/Database.Actions'
import { PrestasiQu_Database_Load_Useable_User_List } from '../../Components/Cluster/PrestasiQu/src/Store/Actions/Database.Actions'

export const Get_Newest_Blog_List = () => (dispatch) => {
    dispatch({ type: BLOG_LOADING })
    dispatch({ type: GET_NEWEST_BLOG_LIST })
    dispatch({ type: BLOG_LOADED })
}

export const Redirect_to_Blog_Preview = (URL) => (dispatch) => {
    dispatch({ type: BLOG_LOADING })
    dispatch({
        type: Go_To_Blog_Preview,
        payload: URL
    })
    dispatch({ type: BLOG_LOADED })
}


export const Get_Blog_List = () => (dispatch) => {
    dispatch({ type: BLOG_LOADING })
    dispatch({ type: GET_BLOG_LIST })
    dispatch({ type: BLOG_LOADED })
}

export const Filter_Blog_Base_on_Tags = (ListOfTags) => (dispatch) => {
    dispatch({ type: BLOG_LOADING })
    dispatch({
        type: GET_FILTERED_BLOG_LIST,
        payload: ListOfTags,
    })
    dispatch({ type: BLOG_LOADED })
}

export const Get_Blog_Detail = (BlogId) => (dispatch) => {
    dispatch({ type: BLOG_LOADING })
    dispatch({
        type: GET_BLOG_DETAIL,
        payload: BlogId,
    })
    dispatch({ type: BLOG_LOADED })
}

export const Get_Useable_KasirQu_User_List = () => async (dispatch) => {
    dispatch({ type: BLOG_LOADING })
    try {
        const Responses = await KasirQu_Database_Load_Useable_User_List()
        if (Responses) {
            dispatch({
                type: USEABLE_KASIRQU_USER_LIST,
                payload: Responses
            })
            dispatch({ type: BLOG_LOADED })
        }
    } catch (err) {
        console.log('Log: Get_Useable_KasirQu_User_List -> err', err)
        dispatch({ type: BLOG_LOADED })
    }
}

export const Get_Useable_PrestasiQu_User_List = () => async (dispatch) => {
    dispatch({ type: BLOG_LOADING })
    try {
        const Responses = await PrestasiQu_Database_Load_Useable_User_List()
        if (Responses) {
            dispatch({
                type: USEABLE_PRESTASIQU_USER_LIST,
                payload: Responses
            })
            dispatch({ type: BLOG_LOADED })
        }
    } catch (err) {
        console.log('Log: Get_Useable_PrestasiQu_User_List -> err', err)
        dispatch({ type: BLOG_LOADED })
    }
}