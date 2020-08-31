import React, { Fragment, useEffect } from 'react'

import Store from '../../../Store/Store'

import { connect } from 'react-redux'
import { Get_LifePath_List } from '../../../Store/Actions/About.Action'

import { useTheme, useMediaQuery, Paper, Grid, Typography, Tooltip, Fade, Button } from '@material-ui/core'
import { Timeline, TimelineItem, TimelineOppositeContent, TimelineSeparator, TimelineDot, TimelineConnector, TimelineContent } from '@material-ui/lab'
import { MUI_Initial_State } from '../../../MUI_Theme_Style'

import { gsap } from 'gsap'
// import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"

import CalendarTodayIcon from '@material-ui/icons/CalendarToday'
import DateRangeIcon from '@material-ui/icons/DateRange'

import NavigateNextRoundedIcon from '@material-ui/icons/NavigateNextRounded'
import SkipNextRoundedIcon from '@material-ui/icons/SkipNextRounded'
// import DoubleArrowRoundedIcon from '@material-ui/icons/DoubleArrowRounded'
import NavigateBeforeRoundedIcon from '@material-ui/icons/NavigateBeforeRounded'
import SkipPreviousRoundedIcon from '@material-ui/icons/SkipPreviousRounded'

const LifePath = (props) => {
    const [state] = React.useState({
        LifePath_GSAP: [],
        Active_TimeLine: [],
    })
    Store.dispatch(Get_LifePath_List())

    gsap.registerPlugin(ScrollTrigger)
    gsap.config({
        nullTargetWarn: false,
    })

    useEffect(() => {
        ////// TIMELINE
        try {
            gsap.utils.toArray(state.LifePath_GSAP.forEach((panel, index) => {
                gsap.fromTo(panel, {
                    opacity: -0.1,
                    scale: 0,
                    // y:-100
                }, {
                    scrollTrigger: {
                        trigger: panel,
                        // start: 'top bottom', 
                        start: 'top 70%',
                        toggleActions: 'restart pause resume pause',
                        scrub: 1,
                        snap: index === 0 ? false : 1,
                        pin: true,
                        // pinSpacing: true,
                        // markers: true,
                        onToggle: self => {
                            if (self.isActive === true) {
                                state.Active_TimeLine.push(index)
                                // console.log(state.Active_TimeLine)
                            }
                        },
                    },
                    opacity: 1.2,
                    scale: 1,
                })
                if (index !== 0 || index !== state.LifePath_GSAP.length - 1) {
                    gsap.to(state.LifePath_GSAP[index - 1], {
                        opacity: 0,
                        scale: 0,
                    })
                }
            }))
        } catch (err) {
            console.log('Log: About -> err', err)
        }

        ////// TIMELINE-NAV
        try {
            gsap.fromTo('#LifePathNav', {
                opacity: -0.1,
                scale: 0,
            }, {
                scrollTrigger: {
                    trigger: state.LifePath_GSAP[0],
                    // start: 'top bottom', 
                    start: 'top 70%',
                    // toggleActions: 'restart pause resume pause',
                    scrub: 1,
                    // markers: true,
                },
                opacity: 1.2,
                scale: 1,
            })

        } catch (err) {
            console.log('Log: About1 -> err', err)
        }

        ////// TIMELINE-NAV/REVERST
        try {
            gsap.fromTo('#LifePathNav', {
                opacity: 1.2,
                scale: 1,
            }, {
                scrollTrigger: {
                    trigger: '#Skill',
                    start: 'top bottom',
                    // toggleActions: 'restart pause resume pause',
                    scrub: 1,
                    // markers: true,
                },
                opacity: -1,
                scale: 0,
            })

        } catch (err) {
            console.log('Log: About2 -> err', err)
        }
    })

    const theme = useTheme()
    const NavbarTheme = theme.custom.navbar
    // const DefaultTheme = theme.palette.background.default
    const ContrastTextTheme = theme.palette.primary.contrastText
    // const TextSecondaryTheme = theme.palette.text.secondary

    const minScreenWidth = MUI_Initial_State.units.minWidth_first
    const isFullNavbar = useMediaQuery(`(min-width:${minScreenWidth}px)`)

    const LifePathData = props.LifePath_List ? props.LifePath_List : []

    const MonthPathData = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
    ]

    const LifePathNav = () => {
        const Scroll_To_Component = (id, pxFromTop) => {
            try {
                // const distanceScrolled = Reff ? document.body.scrollTop : 0
                // const RefPosition = Reff ? document.getElementById(Reff).getBoundingClientRect().top : 0
                // const FinalRefLocation = distanceScrolled + RefPosition


                // const HeighestComp = Reff ? document.getElementById('ScrollText').offsetHeight : 0
                // const LowestComp = Reff ? document.getElementById('Skill').offsetTop : 0
                // const PxDiv = (LowestComp - HeighestComp) / (state.LifePath_GSAP.length)
                // const TotalTop = Reff ? HeighestComp + (PxDiv * Reff) + ((PxDiv * 12) / 100) : 0

                // window.scrollTo({
                //     top: Reff ? TotalTop : id ? document.getElementById(id).offsetTop : pxFromTop ? pxFromTop : 0,
                //     left: 0,
                //     behavior: 'smooth'
                // })
                if (pxFromTop >= 0) {
                    window.scrollTo({
                        top: pxFromTop,
                        left: 0,
                        behavior: 'smooth'
                    })
                } else {
                    document.getElementById(id).scrollIntoView({ behavior: "smooth" })
                }
            } catch (err) {
                console.log('Log: Scroll_To_Component -> err', err)
            }
        }
        return (
            <div
                // className='unshow'
                id='LifePathNav'
                style={{ position: 'fixed', zIndex: 100, left: 0, top: 0, padding: '1%', marginLeft: isFullNavbar ? '22vw' : '2%', marginTop: '15vh' }}
            >
                <Typography
                    style={{ marginBottom: '1.1vh' }}
                >
                    <Tooltip
                        title='previous year'
                        TransitionComponent={Fade}
                        TransitionProps={{ timeout: 600 }}
                    >
                        <Button
                            variant='contained'
                            color='secondary'
                            onClick={() => {
                                Scroll_To_Component(
                                    state.Active_TimeLine[state.Active_TimeLine.length - 1] <= 1 ? 0 : state.Active_TimeLine[state.Active_TimeLine.length - 1] - 1
                                )
                            }}
                            style={{ marginRight: '0.4vw' }}
                        >
                            <NavigateBeforeRoundedIcon />
                        </Button>
                    </Tooltip>

                    <Tooltip
                        title='next year'
                        TransitionComponent={Fade}
                        TransitionProps={{ timeout: 600 }}
                    >
                        <Button
                            variant='contained'
                            color='primary'
                            onClick={() => {
                                Scroll_To_Component(
                                    state.Active_TimeLine[state.Active_TimeLine.length - 1] >= state.LifePath_GSAP.length - 2 ? state.LifePath_GSAP.length - 1 : state.Active_TimeLine[state.Active_TimeLine.length - 1] + 1
                                )
                            }}
                            style={{ marginLeft: '0.4vw' }}
                        >
                            <NavigateNextRoundedIcon />
                        </Button>
                    </Tooltip>
                </Typography>

                {/* <Typography
                    style={{ marginTop: '1.1vh', marginBottom: '1.1vh' }}
                >
                    <Tooltip
                        title='previous big event'
                        TransitionComponent={Fade}
                        TransitionProps={{ timeout: 600 }}
                    >
                        <Button
                            variant='contained'
                            color='secondary'
                            style={{ marginRight: '0.4vw' }}
                        >
                            <DoubleArrowRoundedIcon
                                style={{ transform: 'rotate(180deg)' }}
                            />
                        </Button>
                    </Tooltip>

                    <Tooltip
                        title='next big event'
                        TransitionComponent={Fade}
                        TransitionProps={{ timeout: 600 }}
                    >
                        <Button
                            variant='contained'
                            color='primary'
                            style={{ marginLeft: '0.4vw' }}
                        >
                            <DoubleArrowRoundedIcon />
                        </Button>
                    </Tooltip>
                </Typography> */}

                <Typography
                    style={{ marginTop: '1.1vh', }}
                >
                    <Tooltip
                        title='back to start'
                        TransitionComponent={Fade}
                        TransitionProps={{ timeout: 600 }}
                    >
                        <Button
                            variant='contained'
                            color='secondary'
                            onClick={() => Scroll_To_Component(null, 0)}
                            style={{ marginRight: '0.4vw' }}
                        >
                            <SkipPreviousRoundedIcon />
                        </Button>
                    </Tooltip>

                    <Tooltip
                        title='skip timeline'
                        TransitionComponent={Fade}
                        TransitionProps={{ timeout: 600 }}
                    >
                        <Button
                            variant='contained'
                            color='primary'
                            onClick={() => Scroll_To_Component('Skill')}
                            style={{ marginLeft: '0.4vw' }}
                        >

                            <SkipNextRoundedIcon />
                        </Button>
                    </Tooltip>
                </Typography>
            </div>
        )
    }

    return (
        <Paper
            variant='outlined'
            style={{ border: 'none', margin: '0', padding: '1%', width: '90%', backgroundColor: NavbarTheme }}
        >
            <LifePathNav />
            <Typography
                align='center'
                id='ScrollText'
                variant='h1'
                style={{ fontSize: '3vw', color: ContrastTextTheme, paddingTop: '60vh' }}
            >
                Scroll Bottom
            </Typography>
            {LifePathData.map((item, index) => (
                <Paper
                    key={index}
                    id={index}
                    variant='outlined'
                    style={{ border: 'none', padding: '1%', backgroundColor: NavbarTheme }}
                    ref={reference => state.LifePath_GSAP[index] = reference}
                >
                    <Grid
                        container
                        direction="row"
                        justify="space-between"
                        alignItems="center"
                    >
                        <Paper
                            variant='outlined'
                            style={{ border: 'none', width: '20%', backgroundColor: NavbarTheme }}
                        >
                            <Typography
                                variant='h1'
                                align='center'
                                style={{ fontSize: '4vw', color: ContrastTextTheme, textShadow: '' }}
                            >
                                {item?.Year ? item.Year : index}
                            </Typography>
                        </Paper>

                        <Paper
                            variant='outlined'
                            style={{ border: 'none', width: '75%', paddingTop: '50vh', backgroundColor: NavbarTheme }}
                        >
                            <Timeline align="alternate">
                                {MonthPathData.map((month_item, month_index) => (
                                    <TimelineItem
                                        key={`${index}_${month_index}`}
                                    >
                                        <TimelineOppositeContent>
                                            <Typography
                                                variant="body2"
                                                style={{ fontSize: "1vw", color: ContrastTextTheme }}
                                            >
                                                {month_item}
                                            </Typography>
                                        </TimelineOppositeContent>

                                        <TimelineSeparator>
                                            <TimelineDot
                                                color={item.Month ? (
                                                    item.Month[month_index].length > 0 ? (
                                                        'primary'
                                                    ) : 'secondary'
                                                ) : 'secondary'}
                                            >
                                                {item.Month ? (
                                                    item.Month[month_index].length > 0 ? (
                                                        <DateRangeIcon />
                                                    ) : <CalendarTodayIcon />
                                                ) : <CalendarTodayIcon />}
                                            </TimelineDot>
                                            <TimelineConnector
                                                style={{ display: month_index === MonthPathData.length - 1 ? 'none' : 'initial' }}
                                            />
                                        </TimelineSeparator>

                                        {item.Month ? (
                                            <Fragment>
                                                {item.Month[month_index].length > 0 ? (
                                                    <TimelineContent>
                                                        <Paper
                                                            variant='elevation'
                                                            style={{ padding: '2%', boxShadow: '0 2px 4px -1px #010101' }}
                                                        >
                                                            {item.Month[month_index].map((item_month_event, index_month_event) => (

                                                                <div
                                                                    key={`${index}_${month_index}_${index_month_event}`}
                                                                    style={{ padding: '1%' }}
                                                                >

                                                                    {item_month_event.Event_Title ?
                                                                        <Typography
                                                                            variant='h1'
                                                                            style={{ fontSize: '1.5vw' }}
                                                                        >
                                                                            {item_month_event.Event_Title}
                                                                        </Typography>
                                                                        : null}

                                                                    {item_month_event.Event_Description ?
                                                                        <Typography
                                                                            variant='subtitle1'
                                                                            style={{ fontSize: '1vw' }}
                                                                        >
                                                                            {item_month_event.Event_Description}
                                                                        </Typography>
                                                                        : null}

                                                                    {item_month_event.Other ? item_month_event.Other : null}

                                                                </div>

                                                            ))}
                                                        </Paper>
                                                    </TimelineContent>
                                                ) : null}
                                            </Fragment>
                                        ) : null}

                                    </TimelineItem>
                                ))}
                            </Timeline>
                        </Paper>
                    </Grid>
                </Paper>
            ))}
        </Paper>
    )
}

const mapStateToProps = state => ({
    LifePath_List: state.About.LifePath_List
})

export default connect(mapStateToProps)(LifePath)