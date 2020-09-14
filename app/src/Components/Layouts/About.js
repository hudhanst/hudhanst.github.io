import React, { Fragment, useEffect } from 'react'

import { useTheme, useMediaQuery, Grid, Paper } from '@material-ui/core'
import { Tabs, Tab } from '@material-ui/core'
import { MUI_Initial_State } from '../../MUI_Theme_Style'

// import { gsap } from 'gsap'
// import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"

import Biodata from '../Containers/About/Biodata'
import LifePath from '../Containers/About/LifePath'
// import LifePath from '../Containers/About/ShortLifePath'
import Skill from '../Containers/About/Skill'
import CurriculumVitae from '../Containers/About/CurriculumVitae'

////// TODO ADD CV LOADER (PDF) DONT FOREGET CENSOR SOME OF THEM

const About = () => {
    const [Tabsvalue, setTabsValue] = React.useState(0)
    const handleTabsChange = (event, newValue) => {
        setTabsValue(newValue)
    }

    useEffect(() => {
        // console.log(Tabsvalue)
        ScrollTrigger.refresh()
        // ScrollTrigger.update()
    }, [Tabsvalue])
    const theme = useTheme()
    const NavbarTheme = theme.custom.navbar
    const DefaultTheme = theme.palette.background.default
    const ContrastTextTheme = theme.palette.primary.contrastText
    const BiodataBackgrondColor = DefaultTheme
    // const BiodataBackgrondColor = NavbarTheme

    const minScreenWidth = MUI_Initial_State.units.minWidth_first
    const isFullNavbar = useMediaQuery(`(min-width:${minScreenWidth}px)`)

    const TapData = [
        { taplabel: 'Curriculum Vitae', TapPanel: <CurriculumVitae /> },
        { taplabel: 'Life Path', TapPanel: <LifePath /> },
    ]

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
                        <Tabs
                            value={Tabsvalue}
                            onChange={handleTabsChange}
                            indicatorColor="primary"
                            textColor="primary"
                            variant={TapData.length > 6 ? "scrollable" : null}
                            scrollButtons="auto"
                            centered={TapData.length > 6 ? false : true}
                        >
                            {TapData.map((tapdata, index) => (
                                <Tab
                                    key={index}
                                    label={tapdata.taplabel}
                                    style={{ color: ContrastTextTheme }}
                                />
                            ))}
                        </Tabs>

                        {Tabsvalue === 0 ? (
                            <Fragment>
                                {TapData[Tabsvalue].TapPanel}
                                <Skill Tabsvalue={Tabsvalue} />
                            </Fragment>
                        ) : null}

                        {Tabsvalue === 1 ? (
                            <Fragment>
                                {TapData[Tabsvalue].TapPanel}
                                <Skill Tabsvalue={Tabsvalue} />
                            </Fragment>
                        ) : null}

                        {/* <Skill Tabsvalue={Tabsvalue} /> */}

                    </Grid>
                </Paper>
            </Grid>
        </Paper>
    )
}

export default About