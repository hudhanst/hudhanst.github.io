import React, { } from 'react'

import { useTheme, useMediaQuery, Grid, Paper, Avatar, Typography, Link, Tooltip, Fade } from '@material-ui/core'
import { MUI_Initial_State } from '../../../MUI_Theme_Style'

import ProfilePicture from '../../../IMG/Profile_Picture.jpg'
// import ProfilePicture from '../../../IMG/logo_1.png'
import RoomRoundedIcon from '@material-ui/icons/RoomRounded'
import EmailRoundedIcon from '@material-ui/icons/EmailRounded'
import FacebookIcon from '@material-ui/icons/Facebook'
import TwitterIcon from '@material-ui/icons/Twitter'
import InstagramIcon from '@material-ui/icons/Instagram'

const Biodata = () => {
    const isFacebookActive = false
    const isTwitterActive = false
    const isInstagramActive = true

    const theme = useTheme()
    // const NavbarTheme = theme.custom.navbar
    const DefaultTheme = theme.palette.background.default
    // const ContrastTextTheme = theme.palette.primary.contrastText
    const BiodataBackgrondColor = DefaultTheme

    const minScreenWidth = MUI_Initial_State.units.minWidth_first
    const isFullNavbar = useMediaQuery(`(min-width:${minScreenWidth}px)`)
    return (
        <Grid
            container
            direction={isFullNavbar ? 'column' : 'row'}
            justify={isFullNavbar ? 'flex-start' : 'space-around'}
            alignItems='center'
        >
            <Paper
                variant="outlined"
                style={{ border: 'none', padding: '1%', backgroundColor: BiodataBackgrondColor, margin: '1%', width: isFullNavbar ? '90%' : '20%', }}
            >
                <center>
                    <Avatar
                        src={ProfilePicture}
                        alt="Profile Picture"
                        style={{ width: '13vw', height: '13vw', boxShadow: '0 2px 4px -1px #010101' }}
                    />
                </center>
            </Paper>
            <Paper
                variant="outlined"
                style={{ border: 'none', padding: '1%', backgroundColor: BiodataBackgrondColor, margin: '1%', width: isFullNavbar ? '90%' : '70%', }}
            >

                <div
                    style={{ margin: '2%', padding: '1%', marginTop: '10%' }}
                >
                    <center>
                        <RoomRoundedIcon style={{ fontSize: '2.5vw' }} />
                        <Typography>
                            <Link
                                target="_blank"
                                rel="noreferrer"
                                href='https://www.google.com/maps/place/Bekasi,+Bekasi+City,+West+Java/@-6.2845348,106.9033364,12z'
                                color='textPrimary'
                                style={{ fontSize: '1.1vw' }}
                            >
                                Bekasi City, West Java, Indonesia
                        </Link>
                        </Typography>
                    </center>
                </div>
                <div
                    style={{ margin: '2%', padding: '1%' }}
                >
                    <center>
                        <EmailRoundedIcon style={{ fontSize: '2.5vw' }} />
                        <Typography>
                            <Link
                                target="_blank"
                                rel="noreferrer"
                                href='mailto:hudanasution@gmail.com?subject=Get your email from hudhanst.github.io&body=Get your email from hudhanst.github.io'
                                color='textPrimary'
                                style={{ fontSize: '1.1vw' }}
                            >
                                hudanasution@gmail.com
                        </Link>
                        </Typography>
                    </center>
                </div>
                <div
                    style={{ margin: '2%', padding: '1%', marginTop: isFullNavbar ? '10vh' : '5vh' }}
                >
                    <center>
                        <Typography>
                            <Link
                                target="_blank"
                                rel="noreferrer"
                                href='https://www.facebook.com/khudha1'
                                color={isFacebookActive ? 'textPrimary' : 'textSecondary'}
                                style={{ fontSize: '1.1vw' }}
                            >
                                <Tooltip
                                    title='Inactive'
                                    TransitionComponent={Fade}
                                    TransitionProps={{ timeout: 600 }}
                                >
                                    <FacebookIcon style={{ fontSize: '2vw', marginLeft: '1.5vw', marginRight: '1.5vw' }} />
                                </Tooltip>
                            </Link>
                            <Link
                                target="_blank"
                                rel="noreferrer"
                                href='https://twitter.com/nasusion'
                                color={isTwitterActive ? 'textPrimary' : 'textSecondary'}
                                style={{ fontSize: '1.1vw' }}
                            >
                                <Tooltip
                                    title='Inactive'
                                    TransitionComponent={Fade}
                                    TransitionProps={{ timeout: 600 }}
                                >
                                    <TwitterIcon style={{ fontSize: '2vw', marginLeft: '1.5vw', marginRight: '1.5vw' }} />
                                </Tooltip>
                            </Link>
                            <Link
                                target="_blank"
                                rel="noreferrer"
                                href='https://www.instagram.com/nasusion/'
                                color={isInstagramActive ? 'textPrimary' : 'textSecondary'}
                                style={{ fontSize: '1.1vw' }}
                            >
                                <Tooltip
                                    title='Active'
                                    TransitionComponent={Fade}
                                    TransitionProps={{ timeout: 600 }}
                                >
                                    <InstagramIcon style={{ fontSize: '2vw', marginLeft: '1.5vw', marginRight: '1.5vw' }} />
                                </Tooltip>
                            </Link>
                        </Typography>
                        <Typography
                            color='textSecondary'
                            style={{ fontSize: '0.8vw' }}
                        >
                            *All social media/networking above are set to a private/protected
                            </Typography>
                    </center>
                </div>
            </Paper>
        </Grid>
    )
}

export default Biodata