import {
    DARK_MODE,
    HIDE_NAVBAR,
    CHANGE_THEME,
    DEFAULT_THEME,
} from './Type.Actions'

export const Config_Dark_Mode = (isDarkMode) => (dispatch) => {
    dispatch({
        type: DARK_MODE,
        payload: isDarkMode
    })
}

export const Hide_Nabar = () => (dispatch) => {
    dispatch({ type: HIDE_NAVBAR })
}

export const Config_Theme = (ThemeColor) => (dispatch) => {
    dispatch({
        type: CHANGE_THEME,
        payload: {
            NavbarTheme: ThemeColor.NavbarTheme ? ThemeColor.NavbarTheme : '',
            PaperTheme: ThemeColor.PaperTheme ? ThemeColor.PaperTheme : '',
            DefaultTheme: ThemeColor.DefaultTheme ? ThemeColor.DefaultTheme : '',
            PrimaryMainTheme: ThemeColor.PrimaryMainTheme ? ThemeColor.PrimaryMainTheme : '',
            SecondaryMainTheme: ThemeColor.SecondaryMainTheme ? ThemeColor.SecondaryMainTheme : '',
            ContrastTextTheme: ThemeColor.ContrastTextTheme ? ThemeColor.ContrastTextTheme : '',
            TextPrimaryTheme: ThemeColor.TextPrimaryTheme ? ThemeColor.TextPrimaryTheme : '',
            TextSecondaryTheme: ThemeColor.TextSecondaryTheme ? ThemeColor.TextSecondaryTheme : '',
        }
    })
}

export const Config_Default_Theme = () => (dispatch) => {
    dispatch({
        type: DEFAULT_THEME,
    })
}