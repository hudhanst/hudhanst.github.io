import {
    BLOG_LOADING,
    BLOG_LOADED,
    GET_NEWEST_BLOG_LIST,
    Go_To_Blog_Preview,
    GET_BLOG_LIST,
    GET_FILTERED_BLOG_LIST,
} from './Type.Actions'

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