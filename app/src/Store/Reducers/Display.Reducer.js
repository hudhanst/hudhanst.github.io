import {
    DARK_MODE,
    HIDE_NAVBAR,
    CHANGE_THEME,
    DEFAULT_THEME,
} from '../Actions/Type.Actions'

const initialState = {
    isDarkMode: localStorage.getItem('HN_Display_isDarkMode'),
    isNavbarHide: false,
    NavbarTheme: localStorage.getItem('HN_Display_NavbarTheme'),
    PaperTheme: localStorage.getItem('HN_Display_PaperTheme'),
    DefaultTheme: localStorage.getItem('HN_Display_DefaultTheme'),
    PrimaryMainTheme: localStorage.getItem('HN_Display_PrimaryMainTheme'),
    SecondaryMainTheme: localStorage.getItem('HN_Display_SecondaryMainTheme'),
    ContrastTextTheme: localStorage.getItem('HN_Display_ContrastTextTheme'),
    TextPrimaryTheme: localStorage.getItem('HN_Display_TextPrimaryTheme'),
    TextSecondaryTheme: localStorage.getItem('HN_Display_TextSecondaryTheme'),
}

export default function (state = initialState, action) {
    switch (action.type) {
        case DARK_MODE:
            if (action.payload === true) {
                localStorage.setItem('HN_Display_isDarkMode', action.payload)
            } else {
                localStorage.removeItem('HN_Display_isDarkMode')
            }
            return {
                ...state,
                isDarkMode: action.payload,
            }
        case HIDE_NAVBAR:
            return {
                ...state,
                isNavbarHide: true
            }
        case CHANGE_THEME:
            localStorage.setItem('HN_Display_NavbarTheme', action.payload.NavbarTheme ? action.payload.NavbarTheme : state.NavbarTheme ? state.NavbarTheme : '')
            localStorage.setItem('HN_Display_PaperTheme', action.payload.PaperTheme ? action.payload.PaperTheme : state.PaperTheme ? state.PaperTheme : '')
            localStorage.setItem('HN_Display_DefaultTheme', action.payload.DefaultTheme ? action.payload.DefaultTheme : state.DefaultTheme ? state.DefaultTheme : '')
            localStorage.setItem('HN_Display_PrimaryMainTheme', action.payload.PrimaryMainTheme ? action.payload.PrimaryMainTheme : state.PrimaryMainTheme ? state.PrimaryMainTheme : '')
            localStorage.setItem('HN_Display_SecondaryMainTheme', action.payload.SecondaryMainTheme ? action.payload.SecondaryMainTheme : state.SecondaryMainTheme ? state.SecondaryMainTheme : '')
            localStorage.setItem('HN_Display_ContrastTextTheme', action.payload.ContrastTextTheme ? action.payload.ContrastTextTheme : state.ContrastTextTheme ? state.ContrastTextTheme : '')
            localStorage.setItem('HN_Display_TextPrimaryTheme', action.payload.TextPrimaryTheme ? action.payload.TextPrimaryTheme : state.TextPrimaryTheme ? state.TextPrimaryTheme : '')
            localStorage.setItem('HN_Display_TextSecondaryTheme', action.payload.TextSecondaryTheme ? action.payload.TextSecondaryTheme : state.TextSecondaryTheme ? state.TextSecondaryTheme : '')
            return {
                ...state,
                NavbarTheme: action.payload.NavbarTheme ? action.payload.NavbarTheme : state.NavbarTheme ? state.NavbarTheme : '',
                PaperTheme: action.payload.PaperTheme ? action.payload.PaperTheme : state.PaperTheme ? state.PaperTheme : '',
                DefaultTheme: action.payload.DefaultTheme ? action.payload.DefaultTheme : state.DefaultTheme ? state.DefaultTheme : '',
                PrimaryMainTheme: action.payload.PrimaryMainTheme ? action.payload.PrimaryMainTheme : state.PrimaryMainTheme ? state.PrimaryMainTheme : '',
                SecondaryMainTheme: action.payload.SecondaryMainTheme ? action.payload.SecondaryMainTheme : state.SecondaryMainTheme ? state.SecondaryMainTheme : '',
                ContrastTextTheme: action.payload.ContrastTextTheme ? action.payload.ContrastTextTheme : state.ContrastTextTheme ? state.ContrastTextTheme : '',
                TextPrimaryTheme: action.payload.TextPrimaryTheme ? action.payload.TextPrimaryTheme : state.TextPrimaryTheme ? state.TextPrimaryTheme : '',
                TextSecondaryTheme: action.payload.TextSecondaryTheme ? action.payload.TextSecondaryTheme : state.TextSecondaryTheme ? state.TextSecondaryTheme : '',
            }
        case DEFAULT_THEME:
            localStorage.removeItem('HN_Display_NavbarTheme')
            localStorage.removeItem('HN_Display_PaperTheme')
            localStorage.removeItem('HN_Display_DefaultTheme')
            localStorage.removeItem('HN_Display_PrimaryMainTheme')
            localStorage.removeItem('HN_Display_SecondaryMainTheme')
            localStorage.removeItem('HN_Display_ContrastTextTheme')
            localStorage.removeItem('HN_Display_TextPrimaryTheme')
            localStorage.removeItem('HN_Display_TextSecondaryTheme')
            return {
                ...state,
                NavbarTheme: '',
                PaperTheme: '',
                DefaultTheme: '',
                PrimaryMainTheme: '',
                SecondaryMainTheme: '',
                ContrastTextTheme: '',
                TextPrimaryTheme: '',
                TextSecondaryTheme: '',
            }
        default:
            return state
    }
}