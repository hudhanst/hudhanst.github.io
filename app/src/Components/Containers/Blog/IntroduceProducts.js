import React, { Fragment, useEffect } from 'react'

import { Link as GoTo, Redirect } from 'react-router-dom'

import Store from '../../../Store/Store'

import { connect } from 'react-redux'
import { Get_Newest_Blog_List, Redirect_to_Blog_Preview } from '../../../Store/Actions/Blog.Actions'

import { useTheme, useMediaQuery, Grid, Paper, Typography, Button, Link } from '@material-ui/core'
import { MUI_Initial_State } from '../../../MUI_Theme_Style'


import { gsap } from 'gsap'

import NavigateBeforeRoundedIcon from '@material-ui/icons/NavigateBeforeRounded'
import NavigateNextRoundedIcon from '@material-ui/icons/NavigateNextRounded'

const IntroduceProducts = (props) => {
    useEffect(() => {
        Store.dispatch(Get_Newest_Blog_List())
    }, [])
    const [state, setState] = React.useState({
        MyLatestWorkListNumber: 0,
        RedirectTo: false,
    })
    const ChangeLatestWorkList = (Increament) => {
        try {
            if (state.MyLatestWorkListNumber + Increament > ListBlog.length - 1) {
                setState({ ...state, MyLatestWorkListNumber: 0 })
            } else if (state.MyLatestWorkListNumber + Increament < 0) {
                setState({ ...state, MyLatestWorkListNumber: ListBlog.length - 1 })
            } else {
                setState({ ...state, MyLatestWorkListNumber: state.MyLatestWorkListNumber + Increament })
            }
        } catch (err) {
            console.log('Log: ChangeLatestWorkList -> err', err)
        }
    }
    const PreviousList = () => {
        gsap.to('.My_latest_work_Detail', {
            duration: 0,
            opacity: 0,
            ease: "power3.out",
            x: 100,
            onComplete: (() => gsap.to('.My_latest_work_Detail', {
                duration: 0.3,
                opacity: 1,
                ease: "power3.in",
                x: 0,
            }))
        })
        ChangeLatestWorkList(-1)
    }
    const NextList = () => {
        gsap.to('.My_latest_work_Detail', {
            duration: 0,
            opacity: 0,
            ease: "power3.out",
            x: -100,
            onComplete: (() => gsap.to('.My_latest_work_Detail', {
                duration: 0.3,
                opacity: 1,
                ease: "power3.in",
                x: 0,
            }))
        })
        ChangeLatestWorkList(1)
    }

    const RedirectingToBlogPreview = (inputUrl) => {
        Store.dispatch(Redirect_to_Blog_Preview(inputUrl))
        setState({ RedirectTo: true })
    }

    const theme = useTheme()
    // const NavbarColor = theme.custom.navbar
    // const PrimaryColor = theme.palette.primary.main
    // const SecondaryColor = theme.palette.secondary.main
    // const ContrastTextColor = theme.palette.primary.contrastText
    const PrimaryTextColor = theme.palette.text.primary
    const SecondaryTextColor = theme.palette.text.secondary

    const minScreenWidth = MUI_Initial_State.units.minWidth_first
    const isFullNavbar = useMediaQuery(`(min-width:${minScreenWidth}px)`)
    const ListBlog = props.Blog_List
    return (
        <Fragment>
            <Grid
                container
                direction={isFullNavbar ? 'row' : 'column'}
                justify="space-between"
                alignItems="center"
            >
                <Paper
                    variant='outlined'
                    style={{ border: 'none', minHeight: isFullNavbar ? '50vh' : '0', maxHeight: '50vh', width: isFullNavbar ? '25%' : '90%', padding: '10px' }}
                >
                    <Typography
                        variant='h1'
                        align='center'
                        style={{ fontSize: '4vw', paddingTop: isFullNavbar ? '30%' : '5%', color: PrimaryTextColor }}
                    >
                        <GoTo
                            to='/blog'
                            style={{ textDecoration: 'none', color: PrimaryTextColor }}
                        >
                            My latest work
                        </GoTo>
                    </Typography>
                </Paper>
                <Paper
                    variant='outlined'
                    className='My_latest_work_Detail'
                    style={{ border: 'none', height: '50vh', minHeight: '50vh', maxHeight: '50vh', width: isFullNavbar ? '70%' : '90%', padding: '10px' }
                    }>
                    <Typography
                        variant='h1'
                        align='center'
                        color='textPrimary'
                        style={{ fontSize: '3vw', color: PrimaryTextColor }}
                    >
                        {ListBlog[state.MyLatestWorkListNumber]?.GithubLink ? (
                            // BlogLink
                            <GoTo
                                to={`${ListBlog[state.MyLatestWorkListNumber].BlogLink}`}
                                style={{ textDecoration: 'none', color: PrimaryTextColor }}
                            >
                                {ListBlog ? ListBlog[state.MyLatestWorkListNumber]?.Title : ''}
                            </GoTo>)
                            : ListBlog ? ListBlog[state.MyLatestWorkListNumber]?.Title : ''}
                    </Typography>
                    <Typography
                        variant='subtitle1'
                        align='center'
                        style={{ fontSize: '1.5vw', minHeight: '30vh', color: SecondaryTextColor }}
                    >
                        {ListBlog ? ListBlog[state.MyLatestWorkListNumber]?.Description : ''}
                    </Typography>
                    <Typography
                        align='center'

                    >
                        {ListBlog[state.MyLatestWorkListNumber]?.GithubLink ? (
                            <Link
                                target="_blank"
                                rel="noreferrer"
                                href={`${ListBlog[state.MyLatestWorkListNumber].GithubLink}`}
                                color='primary'
                                style={{ fontSize: '2vw', margin: '2%', }}
                            >
                                <b>Goto Github Page</b>
                            </Link>)
                            : ''}
                        {ListBlog[state.MyLatestWorkListNumber]?.PrototypeLink ? (
                            // <Link
                            //     target="_blank"
                            //     rel="noreferrer"
                            //     href={`${ListBlog[state.MyLatestWorkListNumber].PrototypeLink}`}
                            //     color='primary'
                            //     style={{ fontSize: '2vw', marginRight: '5px', marginLeft: '5px' }}
                            // >
                            //     <b>Goto Priview Page</b>
                            // </Link>
                            <Button
                                variant='contained'
                                color='primary'
                                onClick={() => RedirectingToBlogPreview(ListBlog[state.MyLatestWorkListNumber].PrototypeLink)}
                                style={{ padding: '1%', margin: '2%', fontSize: '1.3vw', }}
                            >
                                <b>Goto Priview Page</b>
                            </Button>
                        ) : ''}
                    </Typography>
                    {state.RedirectTo ? <Redirect to='/blog/preview' /> : null}
                </Paper>
            </Grid>
            <Typography>
                <Button
                    variant='contained'
                    color='primary'
                    style={{ padding: '5px', margin: '5px', marginLeft: '20%' }}
                    onClick={() => PreviousList()}
                >
                    <NavigateBeforeRoundedIcon />
                </Button>
                <Button
                    variant='contained'
                    color='primary'
                    style={{ padding: '5px', margin: '5px' }}
                    onClick={() => NextList()}
                >
                    <NavigateNextRoundedIcon />
                </Button>
            </Typography>
        </Fragment>
    )
}

const mapStateToProps = state => ({
    Blog_List: state.Generic_Blog.Blog_List
})

export default connect(mapStateToProps)(IntroduceProducts)