import React from 'react'

import { useTheme, useMediaQuery, Grid, Paper } from '@material-ui/core'
import { MUI_Initial_State } from '../../MUI_Theme_Style'

import Biodata from '../Containers/About/Biodata'
import LifePath from '../Containers/About/LifePath'
import Skill from '../Containers/About/Skill'


const About = () => {
    const theme = useTheme()
    const NavbarTheme = theme.custom.navbar
    const DefaultTheme = theme.palette.background.default
    // const ContrastTextTheme = theme.palette.primary.contrastText
    const BiodataBackgrondColor = DefaultTheme
    // const BiodataBackgrondColor = NavbarTheme

    const minScreenWidth = MUI_Initial_State.units.minWidth_first
    const isFullNavbar = useMediaQuery(`(min-width:${minScreenWidth}px)`)

    return (
        <Paper
            variant="outlined"
            style={{ border: 'none', paddingTop: '11%', paddingBottom: '1%', backgroundColor: NavbarTheme, borderRadius: '0', position: 'relative', zIndex: 1, minHeight: '100vh' }}
        >
            <Grid
                container
                direction={isFullNavbar ? 'row' : 'column-reverse'}
                justify={isFullNavbar ? 'space-between' : 'center'}
                alignItems={isFullNavbar ? 'flex-start' : 'center'}
            >
                <Paper
                    variant='outlined'
                    style={{
                        ...{ border: 'none', padding: '10px', backgroundColor: BiodataBackgrondColor },
                        ...{ minHeight: isFullNavbar ? '100vh' : '20vh', width: isFullNavbar ? '20%' : '90%', marginTop: isFullNavbar ? '-11%' : 0, paddingTop: isFullNavbar ? '8%' : 0, position: isFullNavbar ? 'fixed' : '' }
                    }}
                >
                    <Biodata />
                </Paper>
                <Paper
                    variant='outlined'
                    style={{
                        ...{ border: 'none', minHeight: '50vh', padding: 0, margin: 0, backgroundColor: NavbarTheme },
                        ...{ width: isFullNavbar ? '75%' : '90%', marginLeft: isFullNavbar ? '25%' : 0, marginBottom: isFullNavbar ? 0 : '2%' }
                    }}
                >
                    <Grid
                        container
                        direction="column"
                        justify="center"
                        alignItems="center"
                    >
                        <LifePath />
                        <Skill />
                    </Grid>
                </Paper>
            </Grid>
        </Paper>
    )
}

export default About