import React, { Fragment } from 'react'

import { BrowserRouter as Router } from 'react-router-dom'

import { connect } from 'react-redux'

import { ThemeProvider, createMuiTheme, Paper } from '@material-ui/core'

import Navbar from './Components/Layouts/Navbar'
import BaseRouter from './Router'

const App = (props) => {
  const Defatult_BackgroundDefault_Lg = '#eeeeee'
  const Defatult_BackgroundDefault_Dr = '#313131'
  // const Defatult_BackgroundDefault_Dr = '#2d2d2d'

  const LightTheme = createMuiTheme({
    palette: {
      type: 'light',

      background: {
        paper: props.PaperTheme ? props.PaperTheme : '#ffffff',
        default: props.DefaultTheme ? props.DefaultTheme : Defatult_BackgroundDefault_Lg
      },

      primary: {
        main: props.PrimaryMainTheme ? props.PrimaryMainTheme : '#3b5249',
        contrastText: props.ContrastTextTheme ? props.ContrastTextTheme : '#ffffff',
      },

      secondary: {
        main: props.SecondaryMainTheme ? props.SecondaryMainTheme : '#f50057',
        contrastText: props.ContrastTextTheme ? props.ContrastTextTheme : '#ffffff',
      },

      text: {
        primary: props.TextPrimaryTheme ? props.TextPrimaryTheme : 'rgba(0, 0, 0, 0.87)',
        secondary: props.TextSecondaryTheme ? props.TextSecondaryTheme : 'rgba(0, 0, 0, 0.54)',
      },
    },

    custom: {
      navbar: props.NavbarTheme ? props.NavbarTheme : '#382933',
    },
  })

  const DarkTheme = createMuiTheme({
    palette: {
      type: 'dark',

      background: {
        paper: props.PaperTheme ? props.PaperTheme : '#424242',
        default: props.DefaultTheme ? props.DefaultTheme : Defatult_BackgroundDefault_Dr
      },

      primary: {
        main: props.PrimaryMainTheme ? props.PrimaryMainTheme : '#382933',
        contrastText: props.ContrastTextTheme ? props.ContrastTextTheme : '#ffffff',
      },

      secondary: {
        main: props.SecondaryMainTheme ? props.SecondaryMainTheme : '#c51162',
        contrastText: props.ContrastTextTheme ? props.ContrastTextTheme : '#ffffff',
      },

      text: {
        primary: props.TextPrimaryTheme ? props.TextPrimaryTheme : '#ffffff',
        secondary: props.TextSecondaryTheme ? props.TextSecondaryTheme : 'rgba(255, 255, 255, 0.7)',
      },
    },
    custom: {
      navbar: props.NavbarTheme ? props.NavbarTheme : '#000000',
    },
  })
  const isDarkMode = props.isDarkMode ? props.isDarkMode : false
  const isNavbarHide = props.isNavbarHide ? true : false
  const PaperAsDefault = props.DefaultTheme ? props.DefaultTheme : isDarkMode ? Defatult_BackgroundDefault_Dr : Defatult_BackgroundDefault_Lg


  return (
    <Fragment>
      <ThemeProvider
        theme={
          isDarkMode ?
            DarkTheme
            : LightTheme
        }
      >

        <Paper
          variant="outlined"
          style={{ margin: 0, padding: 0, backgroundColor: PaperAsDefault, border: 'none' }}
        >
          <Router>
            {!isNavbarHide ?
              <Navbar />
              : null
            }
            <BaseRouter />
          </Router>
        </Paper>
      </ThemeProvider>
    </Fragment >
  )
}

const mapStateToProps = state => ({
  isDarkMode: state.Display.isDarkMode,
  isNavbarHide: state.Display.isNavbarHide,
  NavbarTheme: state.Display.NavbarTheme,
  PaperTheme: state.Display.PaperTheme,
  DefaultTheme: state.Display.DefaultTheme,
  PrimaryMainTheme: state.Display.PrimaryMainTheme,
  SecondaryMainTheme: state.Display.SecondaryMainTheme,
  ContrastTextTheme: state.Display.ContrastTextTheme,
  TextPrimaryTheme: state.Display.TextPrimaryTheme,
  TextSecondaryTheme: state.Display.TextSecondaryTheme,
})

export default connect(mapStateToProps)(App)