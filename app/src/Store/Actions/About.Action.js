import {
    ABOUT_LOADING,
    ABOUT_LOADED,
    GET_ABOUT_LIFEPATH_LIST,
    GET_ABOUT_SKILL_LIST,
} from './Type.Actions'

export const Get_LifePath_List = () => (dispatch) => {
    dispatch({ type: ABOUT_LOADING })
    dispatch({ type: GET_ABOUT_LIFEPATH_LIST })
    dispatch({ type: ABOUT_LOADED })
}

export const Get_Skill_List = () => (dispatch) => {
    dispatch({ type: ABOUT_LOADING })
    dispatch({ type: GET_ABOUT_SKILL_LIST })
    dispatch({ type: ABOUT_LOADED })
}
