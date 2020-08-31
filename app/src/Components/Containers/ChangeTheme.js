import React, { Fragment } from 'react'

import { connect } from 'react-redux'

import Store from '../../Store/Store'

import { Config_Dark_Mode, Config_Default_Theme, Config_Theme } from '../../Store/Actions/Display.Action'

import RGBColorBackground from './RGBColorBackground'
import { useTheme, Typography, Container, Paper, TextField, Button } from '@material-ui/core'

// import { Inverting_Color } from './GeneralFuntion'

import CloseRoundedIcon from '@material-ui/icons/CloseRounded'
import NightsStayRoundedIcon from '@material-ui/icons/NightsStayRounded'
import WbSunnyRoundedIcon from '@material-ui/icons/WbSunnyRounded'

const ChangeTheme = (props) => {
    const theme = useTheme()
    const Navbar = theme.custom.navbar
    const BackgroundPaperColor = theme.palette.background.paper
    const BackgroundDefaultColor = theme.palette.background.default
    const PrimaryColor = theme.palette.primary.main
    const SecondaryColor = theme.palette.secondary.main
    const TextContrastColor = theme.palette.primary.contrastText
    const TextPrimaryColor = theme.palette.text.primary
    const TextSecondaryColor = theme.palette.text.secondary

    const initialState = {
        Color_Navbar: Navbar,
        Color_BackgroundPaper: BackgroundPaperColor,
        Color_BackgroundDefault: BackgroundDefaultColor,
        Color_PrimaryColor: PrimaryColor,
        Color_SecondaryColor: SecondaryColor,
        Color_TextContrastColor: TextContrastColor,
        Color_TextPrimaryColor: TextPrimaryColor, //FIXME
        Color_TextSecondaryColor: TextSecondaryColor, //FIXME
    }

    const [state, setState] = React.useState({
        ...initialState,
        isNightModeChange: false,
    })

    if (state.isNightModeChange) {
        setState({
            ...initialState,
            isNightModeChange: false,
        })
    }

    const FormOnChange = (E) => {
        setState({ ...state, [E.target.name]: E.target.value })
    }

    const CloseModal = () => {
        if (props.CloseFuntcion !== null) {
            props.CloseFuntcion()
        } else {
            console.error('CloseFuntcion null')
        }
    }

    const Change_Dark_Mode = (isDarkMode) => {
        Store.dispatch(
            Config_Dark_Mode(isDarkMode)
        )
        setState({ ...state, isNightModeChange: true })
    }

    const Set_Theme_to_Default = () => {
        Store.dispatch(
            Config_Default_Theme()
        )
    }

    const Change_Theme = (e) => {
        e.preventDefault()
        const newTheme = {
            NavbarTheme: state.Color_Navbar !== Navbar ? state.Color_Navbar : null,
            PaperTheme: state.Color_BackgroundPaper !== BackgroundPaperColor ? state.Color_BackgroundPaper : null,
            DefaultTheme: state.Color_BackgroundDefault !== BackgroundDefaultColor ? state.Color_BackgroundDefault : null,
            PrimaryMainTheme: state.Color_PrimaryColor !== PrimaryColor ? state.Color_PrimaryColor : null,
            SecondaryMainTheme: state.Color_SecondaryColor !== SecondaryColor ? state.Color_SecondaryColor : null,
            ContrastTextTheme: state.Color_TextContrastColor !== TextContrastColor ? state.Color_TextContrastColor : null,
            TextPrimaryTheme: state.Color_TextPrimaryColor !== TextPrimaryColor ? state.Color_TextPrimaryColor : null,
            TextSecondaryTheme: state.Color_TextSecondaryColor !== TextSecondaryColor ? state.Color_TextSecondaryColor : null,
        }
        Store.dispatch(
            Config_Theme(newTheme)
        )
    }

    // const MouseHover = (id) => {
    //     try {
    //         document.getElementById(id).style.backgroundColor = Inverting_Color(SecondaryColor)
    //         document.getElementById(id).style.color = SecondaryColor
    //     } catch (err) {
    //         console.log('Log: MouseHover -> err', err)
    //     }
    // }
    // const MouseOut = (id) => {
    //     try {
    //         document.getElementById(id).style.backgroundColor = SecondaryColor
    //         document.getElementById(id).style.color = TextContrastColor
    //     } catch (err) {
    //         console.log('Log: MouseHover -> err', err)
    //     }
    // }

    const isNight = props.isDarkMode
    const DayNightStyle = { marginRight: '88%', marginTop: '1%', fontSize: '4vw', cursor: 'pointer' }
    const FormStyle = { width: '100%', padding: '1%', margin: '1%' }
    // console.log(state)

    return (
        <Fragment>
            <Typography
                align='right'

            >
                {isNight ?
                    <NightsStayRoundedIcon
                        onClick={() => Change_Dark_Mode(false)}
                        style={{ ...DayNightStyle, color: TextContrastColor }}
                    /> :
                    <WbSunnyRoundedIcon
                        onClick={() => Change_Dark_Mode(true)}
                        style={{ ...DayNightStyle, color: TextContrastColor }}
                    />
                }
                <CloseRoundedIcon
                    onClick={() => CloseModal()}
                    style={{ marginRight: '1%', marginTop: '1%', fontSize: '4vw', cursor: 'pointer', color: TextContrastColor }}
                />
            </Typography>
            <Paper
                variant='outlined'
                style={{ position: 'relative', zIndex: '1', border: 'none', backgroundColor: PrimaryColor, padding: 0, margin: 0 }}
            >
                <RGBColorBackground BackgroundColor={PrimaryColor} />
            </Paper>
            <Container
                style={{ position: 'relative', zIndex: '10', marginTop: '-75%', marginBottom: '5%' }}
            >
                <Paper
                    variant='elevation'
                    style={{ minHeight: '100vh', padding: '3%' }}
                >
                    <form>
                        <TextField type='color' label='Navbar Color' variant='outlined' name='Color_Navbar' value={state.Color_Navbar} onChange={(e) => FormOnChange(e)} style={{ ...FormStyle }} />
                        <TextField type='color' label='Paper Color' variant='outlined' name='Color_BackgroundPaper' value={state.Color_BackgroundPaper} onChange={(e) => FormOnChange(e)} style={{ ...FormStyle }} />
                        <TextField type='color' label='Default Background Color' variant='outlined' name='Color_BackgroundDefault' value={state.Color_BackgroundDefault} onChange={(e) => FormOnChange(e)} style={{ ...FormStyle }} />
                        <TextField type='color' label='Primary Color' variant='outlined' name='Color_PrimaryColor' value={state.Color_PrimaryColor} onChange={(e) => FormOnChange(e)} style={{ ...FormStyle }} />
                        <TextField type='color' label='Secondary Color' variant='outlined' name='Color_SecondaryColor' value={state.Color_SecondaryColor} onChange={(e) => FormOnChange(e)} style={{ ...FormStyle }} />
                        <TextField type='color' label='Contrast Text Color' variant='outlined' name='Color_TextContrastColor' value={state.Color_TextContrastColor} onChange={(e) => FormOnChange(e)} style={{ ...FormStyle }} />
                        <TextField type='color' label='Primary Text Color' variant='outlined' name='Color_TextPrimaryColor' value={state.Color_TextPrimaryColor} onChange={(e) => FormOnChange(e)} style={{ ...FormStyle }} />
                        <TextField type='color' label='Secondary Text Color' variant='outlined' name='Color_TextSecondaryColor' value={state.Color_TextSecondaryColor} onChange={(e) => FormOnChange(e)} style={{ ...FormStyle }} />
                        <Button
                            // id='Default_Button'
                            // onMouseOver={() => MouseHover('Default_Button')}
                            // onMouseOut={() => MouseOut('Default_Button')}
                            color='secondary'
                            variant='contained'
                            style={{ ...FormStyle }}
                            onClick={() => Set_Theme_to_Default()}
                        >
                            Set Back to Default
                                </Button>
                        <Button type='submit' color='primary' variant='contained' style={{ ...FormStyle }} onClick={(e) => Change_Theme(e)} >Change Themes</Button>
                    </form>
                </Paper>
            </Container>
        </Fragment >
    )
}

const mapStateToProps = state => ({
    isDarkMode: state.Display.isDarkMode
})

export default connect(mapStateToProps)(ChangeTheme)