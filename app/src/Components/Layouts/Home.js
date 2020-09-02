import React, { Fragment, useEffect } from 'react'

import { Link as GoTo, Redirect } from 'react-router-dom'

import Store from '../../Store/Store'

import { connect } from 'react-redux'
import { Get_Newest_Blog_List, Redirect_to_Blog_Preview } from '../../Store/Actions/Blog.Actions'

import { useTheme, useMediaQuery, Paper, Container, Typography, Grid, Button, Link } from '@material-ui/core'
import { MUI_Initial_State } from '../../MUI_Theme_Style'

import { gsap } from 'gsap'
// import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"

import NavigateBeforeRoundedIcon from '@material-ui/icons/NavigateBeforeRounded'
import NavigateNextRoundedIcon from '@material-ui/icons/NavigateNextRounded'

import Introduce from '../Containers/Blog/Introduce'

const Home = ({ Blog_List }) => {
    // Store.dispatch(Get_Newest_Blog_List())

    gsap.registerPlugin(ScrollTrigger)
    useEffect(() => {
        if (ListBlog.length === 0 || (JSON.stringify(Blog_List) !== JSON.stringify(ListBlog))) {
            Store.dispatch(Get_Newest_Blog_List())
        }
        if (document.querySelector('.IntroduceAbout')) {
            gsap.from('.IntroduceAbout', {
                scrollTrigger: {
                    trigger: '.IntroduceAbout',
                    toggleActions: 'restart none none none'
                },
                opacity: 0,
                y: 50,
                duration: 1
            })
        }
        if (document.querySelector('.IntroduceProduct')) {
            gsap.from('.IntroduceProduct', {
                scrollTrigger: {
                    trigger: '.IntroduceProduct',
                    toggleActions: 'restart none none none'
                },
                opacity: 0,
                y: 50,
                duration: 1
            })
        }
    })
    const theme = useTheme()
    // const NavbarColor = theme.custom.navbar
    const PrimaryColor = theme.palette.primary.main
    // const SecondaryColor = theme.palette.secondary.main
    // const ContrastTextColor = theme.palette.primary.contrastText
    const PrimaryTextColor = theme.palette.text.primary
    const SecondaryTextColor = theme.palette.text.secondary

    const minScreenWidth = MUI_Initial_State.units.minWidth_first
    const isFullNavbar = useMediaQuery(`(min-width:${minScreenWidth}px)`)
    const ListBlog = Blog_List

    const IntroduceAbout = () => {
        return (
            <Fragment>
                <Container
                    className='IntroduceAbout'
                    style={{ marginTop: '-18%', position: 'relative', zIndex: 5 }}
                >
                    <Paper style={{ minHeight: '50vh', padding: '20px', borderRadius: '20px', boxShadow: '0 2px 4px -1px #010101' }}>
                        <Typography
                            variant='h1'
                            align='center'
                            style={{ fontSize: '4vw' }}
                        >
                            <GoTo
                                to='/about'
                                style={{ textDecoration: 'none', color: PrimaryTextColor }}
                            >
                                About
                            </GoTo>
                        </Typography>
                        <Typography
                            variant='subtitle1'
                            align='center'
                            style={{ fontSize: '1.5vw', color: SecondaryTextColor }}
                        >
                            {/* you can see "About" page to see more infotmation. */}
                            {/* I dont know what to write here, please cek "About" page if you interesting to know more */}
                            {/* idk what should i write here. i dont like other to see my personal information, but i need to write so people who come visit know me. i think its like a bullshit you know frameing your self so other think you are a good, you must be writen so goodly as you can to convinc other right? it just not me, i cant do this kind of thing, if you wanna know me that socialize with me not by reading this "About" i wrote */}
                        </Typography>
                    </Paper>
                </Container>
            </Fragment>
        )
    }
    const IntroduceProduct = () => {
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
                x: "400",
                onComplete: (() => gsap.to('.My_latest_work_Detail', {
                    duration: 0.3,
                    opacity: 1,
                    ease: "power3.in",
                    x: "0"
                }))
            })
            ChangeLatestWorkList(-1)
        }
        const NextList = () => {
            gsap.to('.My_latest_work_Detail', {
                duration: 0,
                opacity: 0,
                ease: "power3.out",
                x: "-400",
                onComplete: (() => gsap.to('.My_latest_work_Detail', {
                    duration: 0.3,
                    opacity: 1,
                    ease: "power3.in",
                    x: "0"
                }))
            })
            ChangeLatestWorkList(1)
        }

        const RedirectingToBlogPreview = (inputUrl) => {
            Store.dispatch(Redirect_to_Blog_Preview(inputUrl))
            setState({ RedirectTo: true })
        }
        return (
            <Fragment>
                <Container
                    className='IntroduceProduct'
                    style={{ position: 'relative', zIndex: 5, marginTop: '10%' }}
                >
                    <Paper
                        style={{ padding: 0, borderRadius: '20px', minHeight: '50vh', boxShadow: '0 2px 4px -1px #010101' }}
                    >
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
                    </Paper>
                </Container>
                <svg
                    viewBox="0 0 1440 320"
                    style={{ marginBottom: '-1%', marginTop: '-10%', position: 'relative', zIndex: 0 }}
                >
                    <path
                        fill={PrimaryColor}
                        fillOpacity="1"
                        d="M0,288L0,64L288,64L288,32L576,32L576,96L864,96L864,160L1152,160L1152,32L1440,32L1440,320L1152,320L1152,320L864,320L864,320L576,320L576,320L288,320L288,320L0,320L0,320Z"
                    >
                    </path>
                </svg>
            </Fragment >
        )
    }
    return (
        <Fragment>
            <Introduce
                Description='A Portfolio Page, Contain Personal Information and Portfolio'
            />
            <IntroduceAbout />
            <IntroduceProduct />
        </Fragment>
    )
}
const mapStateToProps = state => ({
    Blog_List: state.Generic_Blog.Blog_List
})

export default connect(mapStateToProps)(Home)