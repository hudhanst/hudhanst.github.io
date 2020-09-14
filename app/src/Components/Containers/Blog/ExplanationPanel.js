import React, { useEffect } from 'react'

import { useTheme, useMediaQuery, Paper, Grid, Typography } from '@material-ui/core'
import { MUI_Initial_State } from '../../../MUI_Theme_Style'

import { gsap } from 'gsap'
// import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"

const ExplanationPanel = (props) => {
    gsap.registerPlugin(ScrollTrigger)
    useEffect(() => {
        const IdforGSAP = props.id ? `.${props.id}` : '.ExplanationPanel'
        if (document.querySelector(IdforGSAP)) {
            gsap.fromTo(IdforGSAP, {
                opacity: 0,
                scale: 0,
            }, {
                scrollTrigger: {
                    trigger: IdforGSAP,
                    start: 'top 110%',
                    toggleActions: 'restart none none none',
                    // markers: true,
                },
                opacity: 1,
                scale: 1,
                duration: 1
            })
        }
        ScrollTrigger.refresh()
    })

    const theme = useTheme()
    // const NavbarColor = theme.custom.navbar
    // const PrimaryColor = theme.palette.primary.main
    // const SecondaryColor = theme.palette.secondary.main
    // const ContrastTextColor = theme.palette.primary.contrastText
    // const PrimaryTextColor = theme.palette.text.primary
    const SecondaryTextColor = theme.palette.text.secondary

    const minScreenWidth = MUI_Initial_State.units.minWidth_first
    const isFullNavbar = useMediaQuery(`(min-width:${minScreenWidth}px)`)

    return (
        <Paper
            variant='outlined'
            id={props.id ? props.id : 'ExplanationPanel'}
            className={props.id ? props.id : 'ExplanationPanel'}
            style={props.ContainerStyle ?
                props.ContainerStyle
                : {
                    ...{ border: 'none', position: 'relative', zIndex: 5, minHeight: '40vh', marginTop: '5vh', marginBottom: '5vh' },
                    ...props.AditionalContainerStyle ? props.AditionalContainerStyle : {}
                }
            }
        >
            {props.UnUsualContent ? props.UnUsualContent : (
                <Grid
                    container
                    direction={isFullNavbar ? props.ReverstRow ? "row-reverse" : "row" : props.ReverstColumn ? "column-reverse" : "column"}
                    justify={isFullNavbar ? props.ContentImage || props.ContentICO ? "space-between" : "center" : "center"}
                    alignItems="center"
                    style={{ border: 'none', paddingTop: '2vh', paddingBottom: '2vh' }}
                >
                    <Paper
                        variant='outlined'
                        style={{ border: 'none', width: isFullNavbar ? '60vw' : "90vw", marginTop: isFullNavbar ? 0 : '2vh', marginBottom: isFullNavbar ? 0 : '2vh' }}
                    >
                        {props.Title ? (
                            <Typography
                                variant='h1'
                                align={props.TitleAlign ? props.TitleAlign : 'center'}
                                style={
                                    props.TitleStyle ?
                                        props.TitleStyle
                                        : {
                                            ...{ fontSize: '3vw' },
                                            ...props.AditionalTitleStyle ? props.AditionalTitleStyle : {}
                                        }
                                }
                            >
                                {props.Title}
                            </Typography>)
                            : null}

                        {props.Description ? (
                            <Typography
                                variant='subtitle1'
                                align={props.DescriptionAlign ? props.DescriptionAlign : 'center'}
                                style={
                                    props.DescriptionStyle ?
                                        props.DescriptionStyle
                                        : {
                                            ...{ fontSize: '1.5vw', color: SecondaryTextColor },
                                            ...props.AditionalDescriptionStyle ? props.AditionalDescriptionStyle : {}
                                        }
                                }
                            >
                                {props.Description}
                            </Typography>)
                            : null}
                    </Paper>

                    {props.ContentImage || props.ContentICO ? (
                        <Paper
                            variant='outlined'
                            style={{ border: 'none', width: '35vw', marginTop: isFullNavbar ? 0 : '2vh', marginBottom: isFullNavbar ? 0 : '2vh' }}
                        >
                            {props.ContentImage ?
                                <img
                                    src={props.ContentImage}
                                    alt={props.Title ?
                                        `${props.Title}Image`
                                        : 'ExplanationPanelImage'}
                                    style={{ height: '100vh', width: '100vw', maxHeight: '30vh', maxWidth: '35vw' }}
                                />
                                : <props.ContentICO style={{ border: 'none', height: '100vh', width: '100vw', maxHeight: '30vh', maxWidth: '35vw' }} />
                            }
                        </Paper>
                    ) : null}
                </Grid>
            )}
        </Paper>
    )
}

export default ExplanationPanel