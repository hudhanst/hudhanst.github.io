import React, { Fragment, useEffect } from 'react'

import { Redirect } from 'react-router-dom'

import Store from '../../../Store/Store'
import { Redirect_to_Blog_Preview } from '../../../Store/Actions/Blog.Actions'

import { useTheme, useMediaQuery, Container, Grid, Paper, Typography, Link } from '@material-ui/core'
import { MUI_Initial_State } from '../../../MUI_Theme_Style'

import { gsap } from 'gsap'
// import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"

import GitHubIcon from '@material-ui/icons/GitHub'
import LanguageIcon from '@material-ui/icons/Language'

const FooterPanel = (props) => {
    const [state, setState] = React.useState({
        RedirectTo: false,
    })
    gsap.registerPlugin(ScrollTrigger)
    useEffect(() => {
        const IdforGSAP = props.id ? `.${props.id}` : '.FooterPanel'
        if (document.querySelector(IdforGSAP)) {
            gsap.fromTo(IdforGSAP, {
                opacity: 0,
                y: 50,
            }, {
                scrollTrigger: {
                    trigger: IdforGSAP,
                    start: 'top 110%',
                    toggleActions: 'restart none none none',
                    // markers: true,
                },
                opacity: 1,
                y: 0,
                duration: 1,
            })
        }
    })

    const theme = useTheme()
    // const NavbarColor = theme.custom.navbar
    const PrimaryColor = theme.palette.primary.main
    // const SecondaryColor = theme.palette.secondary.main
    // const ContrastTextColor = theme.palette.primary.contrastText
    // const PrimaryTextColor = theme.palette.text.primary
    // const SecondaryTextColor = theme.palette.text.secondary

    const minScreenWidth = MUI_Initial_State.units.minWidth_first
    const isFullNavbar = useMediaQuery(`(min-width:${minScreenWidth}px)`)

    const RedirectingToBlogPreview = (inputUrl) => {
        Store.dispatch(Redirect_to_Blog_Preview(inputUrl))
        setState({ RedirectTo: true })
    }

    return (
        <Fragment>
            <Container
                id={props.id ? props.id : 'FooterPanel'}
                className={props.id ? props.id : 'FooterPanel'}
                style={props.ContainerStyle ?
                    props.ContainerStyle
                    : {
                        ...{ border: 'none', position: 'relative', zIndex: 5 },
                        ...props.AditionalContainerStyle ? props.AditionalContainerStyle : {}
                    }
                }
            >
                <Paper
                    variant='elevation'
                    style={
                        props.PaperStyle ?
                            props.PaperStyle
                            : {
                                ...{ border: 'none', minHeight: '40vh', padding: '20px', borderRadius: '20px', boxShadow: '0 2px 4px -1px #010101', marginTop: '10vh', marginBottom: '10vh' },
                                ...props.AditionalPaperStyle ? props.AditionalPaperStyle : {}
                            }
                    }
                >
                    {props.UnUsualContent ?
                        props.UnUsualContent
                        : (
                            <Grid
                                container
                                direction={isFullNavbar ? "row" : "column"}
                                // justify={isFullNavbar ? "space-between" : "center"}
                                justify={isFullNavbar ? "space-around" : "center"}
                                alignItems="center"
                                style={{ border: 'none', paddingTop: '2vh', paddingBottom: '2vh' }}
                            >
                                {props.GithubLink ? (
                                    <Paper
                                        variant='outlined'
                                        style={{ border: 'none', width: isFullNavbar ? '40vw' : '90vw', height: '25vh' }}
                                    >
                                        <Link
                                            target="_blank"
                                            rel="noreferrer"
                                            href={props.GithubLink}
                                            color='textPrimary'
                                        // style={{ border: '1px solid black' }}
                                        >
                                            <center>
                                                <GitHubIcon
                                                    style={{ fontSize: '5vw' }}
                                                />
                                                <Typography
                                                    style={{ fontSize: '2.5vw' }}
                                                >
                                                    Go to Github Page
                                                </Typography>
                                            </center>
                                        </Link>

                                    </Paper>)
                                    : null}

                                {props.PrototypeLink ? (
                                    <Paper
                                        variant='outlined'
                                        style={{ border: 'none', width: isFullNavbar ? '40vw' : '90vw', height: '25vh' }}
                                    >
                                        <Typography
                                            align='center'
                                            color='primary'
                                            onClick={() => RedirectingToBlogPreview(props.PrototypeLink)}
                                            style={{ fontSize: '2.5vw', cursor: 'pointer' }}
                                        >
                                            <LanguageIcon
                                                style={{ fontSize: '5vw', cursor: 'pointer' }}
                                            />
                                            <br />Go to Preview
                                            </Typography>
                                        {state.RedirectTo ? <Redirect to='/blog/preview' /> : null}
                                    </Paper>)
                                    : null}
                            </Grid>
                        )
                    }
                </Paper>
            </Container >
            {
                props.SVG ?
                    props.SVG
                    : (props.SVG !== 'none' ?
                        <svg
                            viewBox={props.SVGViewBox ?
                                props.SVGViewBox
                                : "0 0 1440 320"}
                            style={props.SVGStyle ?
                                props.SVGStyle
                                : {
                                    ...{ marginBottom: '-1%', marginTop: '-30vh', position: 'relative', zIndex: 0 },
                                    ...props.AditionalSVGStyle ? props.AditionalSVGStyle : {}
                                }
                            }
                        >
                            <path
                                fill={props.SVGColor ?
                                    props.SVGColor
                                    : PrimaryColor
                                }
                                fillOpacity={props.SVGFill ?
                                    props.SVGFill
                                    : "1"
                                }
                                d={props.SVGd ?
                                    props.SVGd
                                    : "M0,288L0,64L288,64L288,32L576,32L576,96L864,96L864,160L1152,160L1152,32L1440,32L1440,320L1152,320L1152,320L864,320L864,320L576,320L576,320L288,320L288,320L0,320L0,320Z"
                                }
                            >
                            </path>
                        </svg>
                        : null
                    )
            }
        </Fragment >
    )
}

export default FooterPanel