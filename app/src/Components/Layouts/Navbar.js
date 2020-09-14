import React, { Fragment, useState, useEffect } from 'react'

import { Link as GoTo } from 'react-router-dom'

// import { useMediaQuery, useTheme, AppBar, Typography, Link, Toolbar, IconButton, Drawer, Modal, Paper } from '@material-ui/core'
import { useMediaQuery, useTheme, AppBar, Typography, Toolbar, IconButton, Drawer, Modal, Paper } from '@material-ui/core'

import { MUI_Initial_State } from '../../MUI_Theme_Style'

import Logo from '../../IMG/logo_2.png'

import MenuIcon from '@material-ui/icons/Menu'
import CloseRoundedIcon from '@material-ui/icons/CloseRounded'

import ChangeTheme from '../Containers/ChangeTheme'

const Navbar = () => {
    const theme = useTheme()
    const NavbarColor = theme.custom.navbar
    const PrimaryColor = theme.palette.primary.main
    const SecondaryColor = theme.palette.secondary.main
    const ContrastTextColor = theme.palette.primary.contrastText

    const [scrollPosition, setSrollPosition] = useState(0)
    const handleScroll = () => {
        const position = window.pageYOffset
        setSrollPosition(position)
    }

    const [isModalOpen, setOpen] = React.useState(false)

    const handleOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true })

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    const MouseHover = (e) => {
        try {
            const Id = e.target.id
            document.getElementById(Id).style.color = SecondaryColor
        } catch (err) {
            console.log('Log: MouseHover -> err', err)
        }
    }
    const MouseOut = (e) => {
        try {
            const Id = e.target.id
            document.getElementById(Id).style.color = ContrastTextColor
        } catch (err) {
            console.log('Log: MouseOut -> err', err)
        }
    }
    const minScreenWidth = MUI_Initial_State.units.minWidth_first
    const isFullNavbar = useMediaQuery(`(min-width:${minScreenWidth}px)`)
    const Toolbar_Menu = { textDecoration: 'none', color: ContrastTextColor, minWidth: '10%', textAlign: 'center', fontSize: '2vw', padding: '10px' }
    const Logo_Style = { border: '6px solid #900d0d', borderRadius: '15px', width: '20%', height: '100%', padding: '10px', margin: '5px', marginLeft: '5%' }
    const Logo_Image_Style = { width: '100%', height: '100%', marginLeft: '0px' }

    const FullNavbar = () => {
        return (
            <Fragment>
                <GoTo
                    to='/blog'
                    id='FullNavbar_Blog'
                    onMouseOver={(e) => MouseHover(e)}
                    onMouseOut={(e) => MouseOut(e)}
                    style={{ ...Toolbar_Menu, marginLeft: '40%' }}
                >
                    Blog
                </GoTo>
                <GoTo
                    to='/about'
                    id='FullNavbar_About'
                    onMouseOver={(e) => MouseHover(e)}
                    onMouseOut={(e) => MouseOut(e)}
                    style={{ ...Toolbar_Menu }}
                >
                    About
                </GoTo>
                {/* <Link
                    href='/about'
                    id='FullNavbar_About'
                    onMouseOver={(e) => MouseHover(e)}
                    onMouseOut={(e) => MouseOut(e)}
                    style={{ ...Toolbar_Menu }}
                >
                    About
                </Link> */}
                <Typography
                    id='FullNavbar_ChangeTheme'
                    onMouseOver={(e) => MouseHover(e)}
                    onMouseOut={(e) => MouseOut(e)}
                    onClick={() => handleOpen()}
                    style={{ ...Toolbar_Menu, minWidth: 'auto', marginRight: '5%', cursor: 'pointer' }}
                >
                    Change a Theme?
                </Typography>
            </Fragment>
        )
    }

    const PartialNavbar = () => {
        const [state, setState] = React.useState({
            isDrawerOpen: false,
        })

        const toggleDrawer = (open) => (event) => {
            if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
                return
            }
            setState({ ...state, isDrawerOpen: open })
        }

        const drawerlist = (
            <Fragment>
                <AppBar position="fixed" style={{ minHeight: '100vh', backgroundColor: NavbarColor, position: 'fixed' }} >
                    <Toolbar style={{ padding: 0, margin: 0 }}>
                        <GoTo
                            to='/'
                            onClick={toggleDrawer(false)}
                            style={{ ...Logo_Style }}
                        >
                            <img src={Logo} alt='logo' style={{ ...Logo_Image_Style }} />
                        </GoTo>
                        <IconButton
                            edge="start"
                            color="inherit"
                            onClick={toggleDrawer(false)}
                            style={{ marginLeft: '75%' }}
                        >
                            <CloseRoundedIcon style={{ fontSize: '5vw', marginRight: '5%' }} />
                        </IconButton>
                    </Toolbar>
                    <GoTo
                        to='/about'
                        id='PartialNavbar_drawerlist_About'
                        onMouseOver={(e) => MouseHover(e)}
                        onMouseOut={(e) => MouseOut(e)}
                        onClick={toggleDrawer(false)}
                        style={{ ...Toolbar_Menu, textAlign: 'left', fontSize: '5vw' }}
                    >
                        About
                </GoTo>
                    <GoTo
                        to='/blog'
                        id='PartialNavbar_drawerlist_Blog'
                        onMouseOver={(e) => MouseHover(e)}
                        onMouseOut={(e) => MouseOut(e)}
                        onClick={toggleDrawer(false)}
                        style={{ ...Toolbar_Menu, textAlign: 'left', fontSize: '5vw' }}
                    >
                        Blog
                </GoTo>
                </AppBar>
            </Fragment>
        )

        return (
            <Fragment>
                <Typography
                    id='PartialNavbar_ChangeTheme'
                    onMouseOver={(e) => MouseHover(e)}
                    onMouseOut={(e) => MouseOut(e)}
                    onClick={() => handleOpen()}
                    style={{ ...Toolbar_Menu, marginLeft: '60%', minWidth: 'auto', cursor: 'pointer' }}
                >
                    Change a Theme?
                </Typography>
                <IconButton edge="start" color="inherit" aria-label="menu" style={{ marginLeft: '1%' }} onClick={toggleDrawer(true)}>
                    <MenuIcon
                        id='PartialNavbar_MenuIcon'
                        style={{ fontSize: '5vw', marginRight: '5%' }}
                    />
                </IconButton>
                <Fragment >
                    <Drawer
                        anchor='top'
                        open={state.isDrawerOpen}
                        onClose={toggleDrawer(false)}
                    >
                        {state.isDrawerOpen ? drawerlist : null}
                    </Drawer>
                </Fragment>
            </Fragment>
        )
    }
    return (
        <Fragment>
            <AppBar id='NAVBAR' position="fixed" style={{ Height: '15%', boxShadow: scrollPosition ? '0 2px 4px -1px #010101' : 'none', backgroundColor: NavbarColor }} >
                <Toolbar style={{ padding: 0, margin: 0 }}>
                    <GoTo
                        to='/'
                        style={{ ...Logo_Style }}
                    >
                        <img src={Logo} alt='logo' style={{ width: '100%', height: '100%', minWidth: '100%', maxWidth: '100%', minHeight: '100%', maxHeight: '100%', marginLeft: '0px' }} />
                    </GoTo>
                    {isFullNavbar ?
                        <FullNavbar /> :
                        <PartialNavbar />
                    }
                </Toolbar>
            </AppBar>
            <Modal
                open={isModalOpen}
                onClose={handleClose}
                style={{
                    overflow: 'auto',
                    display: 'block',
                }}
            >
                <Paper
                    variant='outlined'
                    style={{
                        position: 'absolute',
                        minHeight: '40%',
                        minWidth: '80%',
                        maxWidth: '80%',
                        border: 'none',
                        padding: 0,
                        marginTop: '10%',
                        marginLeft: '10%',
                        marginBottom: "10%",
                        borderRadius: '15px',
                        backgroundColor: PrimaryColor,
                    }}
                >
                    <ChangeTheme CloseFuntcion={handleClose} />
                </Paper>
            </Modal>
        </Fragment >
    )
}

export default Navbar