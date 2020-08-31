import React, { Fragment, useEffect } from 'react'

import { useTheme, Paper, Container, Typography } from '@material-ui/core'

import { gsap } from 'gsap'
// import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"

const Introduce = (props) => {
    gsap.registerPlugin(ScrollTrigger)
    useEffect(() => {
        const AnimatedId = props.TextclassName ? `.${props.TextclassName}` : '.Introduce'
        if (document.querySelector(AnimatedId)) {
            gsap.fromTo(AnimatedId, {
                scrollTrigger: {
                    trigger: AnimatedId,
                    toggleActions: 'restart none none none'
                },
                opacity: 0,
                y: -50,
            }, {
                opacity: 1,
                y: 0,
            })
        }
    })

    const theme = useTheme()
    const NavbarColor = theme.custom.navbar
    const ContrastTextColor = theme.palette.primary.contrastText

    return (
        <Fragment >
            <Paper
                variant="outlined"
                style={
                    props.PaperStyle ?
                        props.PaperStyle
                        : { border: 'none', paddingTop: '10%', paddingBottom: '1%', backgroundColor: NavbarColor, borderRadius: '0', position: 'relative', zIndex: 1 }
                }
            >
                <Container>
                    <Typography
                        align={props.TextAligin ? props.TextAligin : 'center'}
                        variant={props.TextVariant ? props.TextVariant : 'h4'}
                        className={props.TextclassName ? props.TextclassName : 'Introduce'}
                        style={
                            props.TextStyle ?
                                props.TextStyle
                                : { color: ContrastTextColor }
                        }
                    >
                        {props.Description ? props.Description : ''}
                    </Typography>
                </Container>
            </Paper>
            <svg
                viewBox={props.SVGViewBox ? props.SVGViewBox : "0 0 1440 320"}
                style={
                    props.SVGStyle ?
                        props.SVGStyle
                        : { marginTop: '-1%', position: 'relative', zIndex: 0 }
                }
            >
                <path
                    fill={props.SVGColor ? props.SVGColor : NavbarColor}
                    fillOpacity={props.SVGFill ? props.SVGFill : "1"}
                    d={
                        props.SVG ?
                            props.SVG
                            : "M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,106.7C672,117,768,171,864,181.3C960,192,1056,160,1152,165.3C1248,171,1344,213,1392,234.7L1440,256L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
                    }
                >
                </path>
            </svg>
        </Fragment >
    )
}

export default Introduce