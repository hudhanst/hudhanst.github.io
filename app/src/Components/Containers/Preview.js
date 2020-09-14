import React, { Fragment, useEffect } from 'react'

import Store from '../../Store/Store'
import { connect } from 'react-redux'

import { Hide_Nabar } from '../../Store/Actions/Display.Action'
import { Get_Useable_KasirQu_User_List, Get_Useable_PrestasiQu_User_List } from '../../Store/Actions/Blog.Actions'

// import { Redirect } from 'react-router-dom'

import { useTheme, Paper, Link, Typography, Box, LinearProgress, Table, TableHead, TableBody, TableRow, TableCell, Button } from '@material-ui/core'

import Logo from '../../IMG/logo_1.png'

import PauseCircleFilledRoundedIcon from '@material-ui/icons/PauseCircleFilledRounded'
import PlayCircleFilledRoundedIcon from '@material-ui/icons/PlayCircleFilledRounded'
import CheckCircleOutlineRoundedIcon from '@material-ui/icons/CheckCircleOutlineRounded'
import CancelRoundedIcon from '@material-ui/icons/CancelRounded'

const Preview = (props) => {
    const [state, setState] = React.useState({
        isPause: false,
    })
    const WaitTime = 10

    const Destination = props.BlogPreviewURL ? props.BlogPreviewURL : null
    console.log('Log: Preview -> Destination', Destination)

    const KasirQuDestination = '/blog/preview/kasirqu'
    const PrestasiQuDestination = '/blog/preview/prestasiqu'

    const [progress, setProgress] = React.useState(0)
    console.log(`${progress}/${WaitTime}s`)
    // console.log('Log: Preview -> progress', state.isPause)
    useEffect(() => {
        Store.dispatch(Hide_Nabar())
        if (Destination === KasirQuDestination) {
            Store.dispatch(Get_Useable_KasirQu_User_List())
        } else if (Destination === PrestasiQuDestination) {
            Store.dispatch(Get_Useable_PrestasiQu_User_List())
        }
        const timer = setInterval(() => {
            setProgress((prevProgress) => (state.isPause === false && prevProgress < WaitTime ? prevProgress + 1 : prevProgress + 0))
        }, 1000)
        return () => {
            clearInterval(timer)
        }
    }, [state.isPause, WaitTime, Destination])

    const theme = useTheme()
    const DefaultTheme = theme.palette.background.default
    // const PrimaryMainTheme = theme.palette.primary.main
    // const SecondaryMainTheme = theme.palette.secondary.main
    // const ContrastTextTheme = theme.palette.primary.contrastText
    // const TextPrimaryTheme = theme.palette.text.primary
    // const TextSecondaryTheme = theme.palette.text.secondary

    const PauseLoading = (PauseCondition) => {
        setState({ isPause: PauseCondition })
        // console.log(state.isPause)
    }

    const UseableUserList = Destination === KasirQuDestination ?
        (props.KasirQu_Useable_User_List ?
            props.KasirQu_Useable_User_List
            : [])
        : Destination === PrestasiQuDestination ?
            (props.PrestasiQu_Useable_User_List ?
                props.PrestasiQu_Useable_User_List
                : [])
            : []
    // console.log('Log: Preview -> UseableUserList', UseableUserList)

    const QuestionTypography = (props) => {
        return <Typography
            align='left'
            variant='h3'
            color='textPrimary'
            style={{ fontSize: '1.8vw' }}
            {...props}
        />
    }

    const AnswerTypography = (props) => {
        return <Typography
            align='left'
            variant='subtitle1'
            color='textSecondary'
            style={{ fontSize: '1.2vw', marginLeft: '1vw' }}
            {...props}
        />
    }

    const ReadMeKasirQu = () => {
        return (
            <Fragment>
                <QuestionTypography>
                    Is a preview 100% same as original?
                                        </QuestionTypography>
                <AnswerTypography>
                    No, because there is no backend service avaliable some of them are not working, a preview only show frontend
                                </AnswerTypography>

                <QuestionTypography>
                    What kind of function didnt work on preview?
                                </QuestionTypography>
                <AnswerTypography>
                    All function related with backend service (add, get, update, delete), in addition some of them changes to give better experience, some of them also change to give warning about related function didnt work
                                </AnswerTypography>

                <QuestionTypography>
                    How can i use preview page?
                                </QuestionTypography>
                <AnswerTypography>
                    To use a preview page, first you need to have account and password (listed below), after login you can go to help page and read related topic
                                </AnswerTypography>
                <AnswerTypography>
                    Account Detail:
                                </AnswerTypography>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell align='center' style={{ width: '5%' }} >No</TableCell>
                            <TableCell align='center' style={{ width: '40%' }} >User Name</TableCell>
                            <TableCell align='center' style={{ width: '15%' }} >Password</TableCell>
                            <TableCell align='center' style={{ width: '10%' }} >Active</TableCell>
                            <TableCell align='center' style={{ width: '10%' }} >Kasir</TableCell>
                            <TableCell align='center' style={{ width: '10%' }} >Admin</TableCell>
                            <TableCell align='center' style={{ width: '10%' }} >Super User</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {UseableUserList.map((item, index) => (
                            <TableRow
                                hover
                                key={index}
                            >
                                <TableCell align='right' >{index + 1}</TableCell>
                                <TableCell align='left' >{item.UserName}</TableCell>
                                <TableCell align='left' >{item.Password}</TableCell>
                                <TableCell align='center' >{item.isActive ? <CheckCircleOutlineRoundedIcon color='primary' /> : <CancelRoundedIcon color='secondary' />}</TableCell>
                                <TableCell align='center' >{item.isKasir ? <CheckCircleOutlineRoundedIcon color='primary' /> : <CancelRoundedIcon color='secondary' />}</TableCell>
                                <TableCell align='center' >{item.isAdmin ? <CheckCircleOutlineRoundedIcon color='primary' /> : <CancelRoundedIcon color='secondary' />}</TableCell>
                                <TableCell align='center' >{item.isSuperUser ? <CheckCircleOutlineRoundedIcon color='primary' /> : <CancelRoundedIcon color='secondary' />}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
                <QuestionTypography>
                    How can i back to homepage?
                                </QuestionTypography>
                <AnswerTypography>
                    to back to homepage you can change url or logout, after logout you will redirected to login page, in there you can find button to back to homepage
                                </AnswerTypography>
                <QuestionTypography>
                    Where can i find logout button?
                                </QuestionTypography>
                <AnswerTypography>
                    first you must go to account menu, you can find it on side menu or main menu. in account menu under profile you can find logout button
                </AnswerTypography>
            </Fragment>
        )
    }

    const ReadMePrestasiQu = () => {
        return (
            <Fragment>
                <QuestionTypography>
                    Is a preview 100% same as original?
                                        </QuestionTypography>
                <AnswerTypography>
                    No, because there is no backend service avaliable some of them are not working, a preview only show frontend
                                </AnswerTypography>

                <QuestionTypography>
                    What kind of function didnt work on preview?
                                </QuestionTypography>
                <AnswerTypography>
                    All function related with backend service (add, get, update, delete), in addition some of them changes to give better experience, some of them also change to give warning about related function didnt work
                                </AnswerTypography>

                <QuestionTypography>
                    How can i use preview page?
                                </QuestionTypography>
                <AnswerTypography>
                    To use a preview page, first you need to have account and password (listed below), after login you can go to help page and read related topic
                                </AnswerTypography>
                <AnswerTypography>
                    Account Detail:
                                </AnswerTypography>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell align='center' style={{ width: '5%' }} >No</TableCell>
                            <TableCell align='center' style={{ width: '20%' }} >User Name</TableCell>
                            <TableCell align='center' style={{ width: '15%' }} >Password</TableCell>
                            <TableCell align='center' style={{ width: '10%' }} >Active</TableCell>
                            <TableCell align='center' style={{ width: '10%' }} >Siswa</TableCell>
                            <TableCell align='center' style={{ width: '10%' }} >Staff</TableCell>
                            <TableCell align='center' style={{ width: '10%' }} >Admin</TableCell>
                            <TableCell align='center' style={{ width: '10%' }} >Super Visor</TableCell>
                            <TableCell align='center' style={{ width: '10%' }} >Super User</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {UseableUserList.map((item, index) => (
                            <TableRow
                                hover
                                key={index}
                            >
                                <TableCell align='right' >{index + 1}</TableCell>
                                <TableCell align='left' >{item.UserName}</TableCell>
                                <TableCell align='left' >{item.Password}</TableCell>
                                <TableCell align='center' >{item.active ? <CheckCircleOutlineRoundedIcon color='primary' /> : <CancelRoundedIcon color='secondary' />}</TableCell>
                                <TableCell align='center' >{item.siswa ? <CheckCircleOutlineRoundedIcon color='primary' /> : <CancelRoundedIcon color='secondary' />}</TableCell>
                                <TableCell align='center' >{item.staff ? <CheckCircleOutlineRoundedIcon color='primary' /> : <CancelRoundedIcon color='secondary' />}</TableCell>
                                <TableCell align='center' >{item.admin ? <CheckCircleOutlineRoundedIcon color='primary' /> : <CancelRoundedIcon color='secondary' />}</TableCell>
                                <TableCell align='center' >{item.supervisor ? <CheckCircleOutlineRoundedIcon color='primary' /> : <CancelRoundedIcon color='secondary' />}</TableCell>
                                <TableCell align='center' >{item.superuser ? <CheckCircleOutlineRoundedIcon color='primary' /> : <CancelRoundedIcon color='secondary' />}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
                <QuestionTypography>
                    How can i back to homepage?
                                </QuestionTypography>
                <AnswerTypography>
                    to back to homepage you can change url or logout, after logout you will redirected to login page, in there you can find button to back to homepage
                                </AnswerTypography>
                <QuestionTypography>
                    Where can i find logout button?
                                </QuestionTypography>
                <AnswerTypography>
                    at the right side of navbar
                </AnswerTypography>
            </Fragment>
        )
    }

    return (
        <Paper
            variant='outlined'
            style={{ minWidth: '100vw', minHeight: '100vh', paddingBottom: '5vh', backgroundColor: DefaultTheme, border: 'none' }}
        >
            {/* {progress === WaitTime ? <Redirect to={Destination ? Destination : "/"} /> : null} */}
            {progress === WaitTime ? window.location = Destination ? Destination : "/" : null}
            {/* {progress === WaitTime ? window.open(Destination ? Destination : "/", '_blank') : null} */}
            <center>
                <Link
                    href='/' underline='none'
                >
                    <img
                        src={Logo}
                        alt='logo'
                        // 512 x 522
                        style={{ width: '19vw', height: '28vh', paddingTop: '10vh' }}
                    />
                </Link>
                <Typography
                    variant='subtitle1'
                    color='textSecondary'
                    align='center'
                    style={{ fontSize: '0.9vw', marginTop: '1vh' }}
                >
                    {`*Clik Image Above To Redirect to Home Page or Wait ${WaitTime} Sec`}
                </Typography>
                <Box
                    display="flex"
                    alignItems="center"
                    style={{ border: 'none', paddingLeft: '40%' }}
                >
                    <Box
                        width="30%"
                        mr={1}
                    >
                        <LinearProgress
                            variant='determinate'
                            color={state.isPause ? 'secondary' : 'primary'}
                            value={(progress / WaitTime) * 100}
                        // style={{ width: '25vw', height: '1vh' }}
                        />
                    </Box>
                    <Box
                        // minWidth={35}
                        style={{ border: 'none' }}
                    >
                        <Typography
                            variant="body2"
                            color="textSecondary"
                        >
                            {`${Math.round((progress / WaitTime) * 100)}%`}
                        </Typography>
                    </Box>
                    <Box
                    // style={{ border: '1px solid red' }}
                    >
                        <Typography
                            variant="body2"
                            color="textSecondary"
                        >
                            {state.isPause ?
                                <PlayCircleFilledRoundedIcon
                                    color='primary'
                                    onClick={() => PauseLoading(false)}
                                />
                                : <PauseCircleFilledRoundedIcon
                                    color='secondary'
                                    onClick={() => PauseLoading(true)}
                                />}
                        </Typography>
                    </Box>
                </Box>
                {Destination ? (
                    <Paper
                        variant='outlined'
                        style={{ width: '80vw', minHeight: '40vh', boxShadow: '0 2px 4px -1px #010101', marginTop: '5vh', marginBottom: '5vh', padding: '2vw', borderRadius: '15px' }}
                    >
                        <Typography
                            variant='h1'
                            color='textPrimary'
                            align='center'
                            style={{ fontSize: '2vw' }}
                        >
                            {Destination === KasirQuDestination ?
                                "KasirQu"
                                : Destination === PrestasiQuDestination ?
                                    "PrestasiQu"
                                    : ''}
                        </Typography>

                        {Destination === KasirQuDestination ? <ReadMeKasirQu />
                            : Destination === PrestasiQuDestination ? <ReadMePrestasiQu />
                                : null}
                        {/* <center> */}
                        {state.isPause ?
                            <Button
                                color='primary'
                                variant='contained'
                                style={{ paddingTop: '1vh', paddingBottom: '1vh', margin: '1%', borderRadius: '5px', width: '90%' }}
                                onClick={() => PauseLoading(false)}
                            >
                                Continue a Timer
                                </Button>
                            : <Button
                                color='secondary'
                                variant='contained'
                                style={{ paddingTop: '1vh', paddingBottom: '1vh', margin: '1%', borderRadius: '5px', width: '90%' }}
                                onClick={() => PauseLoading(true)}
                            >
                                Pause a Timer
                                </Button>
                        }
                        <Button
                            color='primary'
                            variant='contained'
                            style={{ paddingTop: '1vh', paddingBottom: '1vh', margin: '1%', borderRadius: '5px', width: '90%' }}
                            onClick={() => setProgress(WaitTime)}
                        >
                            Go To Preview Page
                            </Button>
                        {/* </center> */}
                    </Paper>)

                    : (<Typography
                        variant='h1'
                        color='secondary'
                        align='center'
                        style={{ marginTop: '10vh', fontSize: '3vw' }}
                    >
                        Something Wrong Happen, Cant Redirect to Unknow Destination
                    </Typography>)}
            </center>
        </Paper>
    )
}

const mapStateToProps = state => ({
    BlogPreviewURL: state.Generic_Blog.BlogPreviewURL,
    KasirQu_Useable_User_List: state.Generic_Blog.KasirQu_Useable_User_List,
    PrestasiQu_Useable_User_List: state.Generic_Blog.PrestasiQu_Useable_User_List,
})

export default connect(mapStateToProps)(Preview)