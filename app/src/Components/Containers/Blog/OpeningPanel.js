import React, { Fragment, useEffect } from 'react'

import { Link as GoTo } from 'react-router-dom'

import { useTheme, Container, Paper, Typography } from '@material-ui/core'

import { gsap } from 'gsap'
// import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"

const OpeningPanel = (props) => {
    gsap.registerPlugin(ScrollTrigger)
    useEffect(() => {
        const IdforGSAP = props.id ? `.${props.id}` : '.OpeningPanel'
        if (document.querySelector(IdforGSAP)) {
            gsap.fromTo(IdforGSAP, {
                opacity: 0,
                y: 50,
                duration: 1
            }, {
                scrollTrigger: {
                    trigger: IdforGSAP,
                    toggleActions: 'restart none none none'
                },
                opacity: 1,
                y: 0,
            })
        }
    })

    const theme = useTheme()
    // const NavbarColor = theme.custom.navbar
    // const PrimaryColor = theme.palette.primary.main
    // const SecondaryColor = theme.palette.secondary.main
    // const ContrastTextColor = theme.palette.primary.contrastText
    const PrimaryTextColor = theme.palette.text.primary
    const SecondaryTextColor = theme.palette.text.secondary
    return (
        <Container
            id={props.id ? props.id : 'OpeningPanel'}
            className={props.id ? props.id : 'OpeningPanel'}
            style={props.ContainerStyle ?
                props.ContainerStyle
                : {
                    ...{ marginTop: '-18%', position: 'relative', zIndex: 5 },
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
                            ...{ minHeight: '50vh', padding: '20px', borderRadius: '20px', boxShadow: '0 2px 4px -1px #010101' },
                            ...props.AditionalPaperStyle ? props.AditionalPaperStyle : {}
                        }
                }
            >
                {props.UnUsualContent ? props.UnUsualContent : (
                    <Fragment>
                        {props.Title ? (
                            <Typography
                                variant='h1'
                                align={props.TitleAlign ? props.TitleAlign : 'center'}
                                style={
                                    props.TitleStyle ?
                                        props.TitleStyle
                                        : {
                                            ...{ fontSize: '4vw' },
                                            ...props.AditionalTitleStyle ? props.AditionalTitleStyle : {}
                                        }
                                }
                            >
                                {props.TitleLink ? (
                                    <GoTo
                                        to={props.TitleLink}
                                        style={{
                                            ...{ textDecoration: 'none', color: PrimaryTextColor },
                                            ...props.TitleStyle ? props.TitleStyle : {}
                                        }}
                                    >
                                        {props.Title}
                                    </GoTo>
                                ) : props.Title}
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
                                            ...{ fontSize: '2vw', color: SecondaryTextColor },
                                            ...props.AditionalDescriptionStyle ? props.AditionalDescriptionStyle : {}
                                        }
                                }
                            >
                                {props.Description}
                            </Typography>)
                            : null}
                    </Fragment>
                )}
            </Paper>
        </Container >
    )
}

export default OpeningPanel