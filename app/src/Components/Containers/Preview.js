import React, { useEffect } from 'react'

import Store from '../../Store/Store'
import { connect } from 'react-redux'

import { Hide_Nabar } from '../../Store/Actions/Display.Action'

import { Redirect } from 'react-router-dom'

import { useTheme, Paper, Link, Typography, Box, LinearProgress } from '@material-ui/core'

import Logo from '../../IMG/logo_1.png'

import PauseCircleFilledRoundedIcon from '@material-ui/icons/PauseCircleFilledRounded'
import PlayCircleFilledRoundedIcon from '@material-ui/icons/PlayCircleFilledRounded'

const Preview = (props) => {
    const [state, setState] = React.useState({
        isPause: false,
    })
    const WaitTime = 10
    const [progress, setProgress] = React.useState(0)
    console.log(`${progress}/${WaitTime}s`)
    // console.log('Log: Preview -> progress', state.isPause)
    useEffect(() => {
        Store.dispatch(Hide_Nabar())
        const timer = setInterval(() => {
            setProgress((prevProgress) => (state.isPause === false && prevProgress < WaitTime ? prevProgress + 1 : prevProgress + 0))
        }, 1000)
        return () => {
            clearInterval(timer)
        }
    }, [state.isPause, WaitTime])



    const Destination = props.BlogPreviewURL ? props.BlogPreviewURL : null
    console.log('Log: Preview -> Destination', Destination)

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


    return (
        <Paper
            variant='outlined'
            style={{ minWidth: '100vw', minHeight: '100vh', paddingBottom: '5vh', backgroundColor: DefaultTheme, border: 'none' }}
        >
            {progress === WaitTime ? <Redirect to={Destination ? Destination : "/"} /> : null}
            <center>
                <Link
                    href='/' underline='none'
                >
                    <img
                        src={Logo}
                        alt='logo'
                        // 512 x 522
                        style={{ width: '20vw', height: '28vh', paddingTop: '10vh' }}
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
                {Destination ?
                    <Paper
                        variant='outlined'
                        style={{ width: '80vw', minHeight: '40vh', boxShadow: '0 2px 4px -1px #010101', marginTop: '5vh', marginBottom: '5vh', borderRadius: '15px' }}
                    >
                    </Paper> :
                    <Typography
                        variant='h1'
                        color='secondary'
                        align='center'
                        style={{ marginTop: '10vh', fontSize: '3vw' }}
                    >
                        Something Wrong Happen, Cant Redirect to Unknow Destination
                    </Typography>}
            </center>
        </Paper>
    )
}

const mapStateToProps = state => ({
    BlogPreviewURL: state.Blog.BlogPreviewURL
})

export default connect(mapStateToProps)(Preview)