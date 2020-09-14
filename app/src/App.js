import React, { Fragment, useEffect } from 'react'

import { BrowserRouter as Router } from 'react-router-dom'

import Store from './Store/Store'
import { connect } from 'react-redux'
import { Hide_Nabar } from './Store/Actions/Display.Action'
import { Load_User } from './Components/Cluster/KasirQu/src/Store/Actions/Auth.Actions'
import { PrestasiQuLoadUser } from './Components/Cluster/PrestasiQu/src/Store/Actions/Auth.Actions'

import { ThemeProvider, createMuiTheme, CssBaseline, useMediaQuery, Container } from '@material-ui/core'
import { MUI_theme_auth_dark, MUI_theme_auth_light, MUI_theme_unauth_dark, MUI_theme_unauth_light, MUI_st__Container_SideNav, MUI_st__Container_FlatNav } from './Components/Cluster/KasirQu/src/MUI_theme'
import { MUI_Initial_State } from './MUI_Theme_Style'

import Navbar from './Components/Layouts/Navbar'
import KasirQuNavbar from './Components/Cluster/KasirQu/src/Components/Containers/Navbar'
import PrestasiQuNavbar from './Components/Cluster/PrestasiQu/src/Components/Container/navbar'
import KasirQuMessages from './Components/Cluster/KasirQu/src/Components/Containers/Messages'
import PrestasiQuMassages from './Components/Cluster/PrestasiQu/src/Components/Container/Massages'
import BaseRouter from './Router'

const App = (props) => {
  const [LocationURL, ChangeLocationURL] = React.useState(null)
  const KasirQuValue = 'KasirQu'
  const PrestasiQuValue = 'PrestasiQu'
  useEffect(() => {
    try {
      const URLLocation = window.location.href
      const KasirQuURLLocation = '/blog/preview/kasirqu'
      const PrestasiQuURLLocation = '/blog/preview/prestasiqu'
      if (URLLocation.includes(KasirQuURLLocation)) {
        console.log('Log: App -> KasirQuValue', KasirQuValue)
        ChangeLocationURL(KasirQuValue)
        Store.dispatch(Hide_Nabar())
        const auth = props.auth

        if (auth.token || auth.isAuth) {
          Store.dispatch(Load_User())
        }

      } else if (URLLocation.includes(PrestasiQuURLLocation)) {
        console.log('Log: App -> PrestasiQuValue', PrestasiQuValue)
        require('bootstrap/dist/css/bootstrap.css')
        require('bootstrap/dist/js/bootstrap')
        require('./Components/Cluster/PrestasiQu/src/index.css')
        ChangeLocationURL(PrestasiQuValue)
        Store.dispatch(Hide_Nabar())

        Store.dispatch(PrestasiQuLoadUser())

      } else {
        console.log('Non Preview URL')
      }
    } catch (err) {
      console.log('Log: App -> err', err)
    }

    // eslint-disable-next-line
  }, [])

  const Defatult_BackgroundDefault_Lg = '#eeeeee'
  const Defatult_BackgroundDefault_Dr = '#313131'

  const LightTheme = createMuiTheme({
    palette: {
      type: 'light',

      background: {
        paper: props.PaperTheme ? props.PaperTheme : '#ffffff',
        default: props.DefaultTheme ? props.DefaultTheme : Defatult_BackgroundDefault_Lg
      },

      primary: {
        // main: props.PrimaryMainTheme ? props.PrimaryMainTheme : '#3f51b5',
        main: props.PrimaryMainTheme ? props.PrimaryMainTheme : '#3b5249',//1
        // main: props.PrimaryMainTheme ? props.PrimaryMainTheme : '#ADC7B5',//2
        // main: props.PrimaryMainTheme ? props.PrimaryMainTheme : '#F9ECDF',//3 x
        // main: props.PrimaryMainTheme ? props.PrimaryMainTheme : '#F5D040',//4 x
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
      navbar: props.NavbarTheme ? props.NavbarTheme : '#382933',//1
      // navbar: props.NavbarTheme ? props.NavbarTheme : '#331B40',//2
      // navbar: props.NavbarTheme ? props.NavbarTheme : '#825855',//3 x
      // navbar: props.NavbarTheme ? props.NavbarTheme : '#0A164e',//4 x
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
        // main: props.PrimaryMainTheme ? props.PrimaryMainTheme : '#3f51b5',
        // main: props.PrimaryMainTheme ? props.PrimaryMainTheme : '#382933',//1
        // main: props.PrimaryMainTheme ? props.PrimaryMainTheme : '#1a1a2e',//1.2
        // main: props.PrimaryMainTheme ? props.PrimaryMainTheme : '#1F2833',//1.5
        // main: props.PrimaryMainTheme ? props.PrimaryMainTheme : '#252525',//v1
        main: props.PrimaryMainTheme ? props.PrimaryMainTheme : '#222222',//v2
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
      navbar: props.NavbarTheme ? props.NavbarTheme : '#000000',//1
    },
  })

  const isDarkMode = props.isDarkMode ? props.isDarkMode : false
  const KasirQuisDarkMode = props.auth.isDarkMode === true || props.auth.isDarkMode === "true" ? true : false
  const isNavbarHide = props.isNavbarHide ? true : false
  // const PaperAsDefault = props.DefaultTheme ? props.DefaultTheme : isDarkMode ? Defatult_BackgroundDefault_Dr : Defatult_BackgroundDefault_Lg
  // const PaperAsDefault = null
  const minScreenWidth = MUI_Initial_State.units.minWidth_first
  const isFullNavbar = useMediaQuery(`(min-width:${minScreenWidth}px)`)


  return (
    <Fragment>

      <ThemeProvider
        theme={
          LocationURL === KasirQuValue ? (
            (props.auth.token && props.auth.isAuth) ?
              (KasirQuisDarkMode ? { ...DarkTheme, ...MUI_theme_auth_dark } : { ...LightTheme, ...MUI_theme_auth_light })
              : (KasirQuisDarkMode ? { ...DarkTheme, ...MUI_theme_unauth_dark } : { ...LightTheme, ...MUI_theme_unauth_light })
          ) : (
              isDarkMode ? { ...DarkTheme } : { ...LightTheme }
            )
        }
      >
        <CssBaseline />
        <Router>
          {/* <Paper
            variant="outlined"
            style={{ margin: 0, padding: 0, backgroundColor: PaperAsDefault, border: 'none' }}
          > */}
          {!isNavbarHide ?
            <Navbar />
            : null
          }
          {
            LocationURL === KasirQuValue ? (
              <Fragment>
                {(props.auth.token && props.auth.isAuth) ?
                  <KasirQuNavbar
                    isDarkMode={KasirQuisDarkMode}
                  />
                  : null}
                <KasirQuMessages />
              </Fragment>
            ) : LocationURL === PrestasiQuValue ? (
              <Fragment>
                <PrestasiQuNavbar />
                <PrestasiQuMassages />
              </Fragment>
            ) : null
          }

          {
            LocationURL === KasirQuValue ? (
              <Container
                style={(props.auth.token && props.auth.isAuth) ? (
                  (isFullNavbar) ?
                    MUI_st__Container_SideNav
                    : MUI_st__Container_FlatNav
                ) : null}
              >
                <BaseRouter />
              </Container>
            ) : LocationURL === PrestasiQuValue ? (
              <div className="container custom-container-setting">
                <BaseRouter />
              </div>
            ) : <BaseRouter />
          }
          {/* </Paper> */}
        </Router>
      </ThemeProvider>
    </Fragment >
  )
}

const mapStateToProps = state => ({
  ////// Generic
  isDarkMode: state.Generic_Display.isDarkMode,
  isNavbarHide: state.Generic_Display.isNavbarHide,
  NavbarTheme: state.Generic_Display.NavbarTheme,
  PaperTheme: state.Generic_Display.PaperTheme,
  DefaultTheme: state.Generic_Display.DefaultTheme,
  PrimaryMainTheme: state.Generic_Display.PrimaryMainTheme,
  SecondaryMainTheme: state.Generic_Display.SecondaryMainTheme,
  ContrastTextTheme: state.Generic_Display.ContrastTextTheme,
  TextPrimaryTheme: state.Generic_Display.TextPrimaryTheme,
  TextSecondaryTheme: state.Generic_Display.TextSecondaryTheme,
  ////// Generic
  auth: state.KasirQu_Auth,

})

export default connect(mapStateToProps)(App)