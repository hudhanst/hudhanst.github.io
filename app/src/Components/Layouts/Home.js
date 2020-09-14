import React, { Fragment } from 'react'

import { Link as GoTo } from 'react-router-dom'

import { useTheme, Typography } from '@material-ui/core'

import Introduce from '../Containers/Blog/Introduce'
import OpeningPanel from '../Containers/Blog/OpeningPanel'
import IntroduceProducts from '../Containers/Blog/IntroduceProducts'
import FooterPanel from '../Containers/Blog/FooterPanel'

const Home = () => {
    const theme = useTheme()
    // const NavbarColor = theme.custom.navbar
    // const PrimaryColor = theme.palette.primary.main
    // const SecondaryColor = theme.palette.secondary.main
    // const ContrastTextColor = theme.palette.primary.contrastText
    const PrimaryTextColor = theme.palette.text.primary
    const SecondaryTextColor = theme.palette.text.secondary
    const About = () => {
        return (
            <Fragment>
                <Typography
                    variant='h1'
                    align='center'
                    style={{ fontSize: '4vw' }}
                >
                    <GoTo
                        to='/about'
                        style={{ textDecoration: 'none', color: PrimaryTextColor }}
                    >
                        About
                            </GoTo>
                </Typography>
                <Typography
                    variant='subtitle1'
                    align='center'
                    style={{ fontSize: '2vw', color: SecondaryTextColor }}
                >
                    Interested in tech progress, especially in machine learning and backend devloper, to know more about me you can cek "About" page
                    {/* you can see "About" page to see more infotmation. */}
                    {/* I dont know what to write here, please cek "About" page if you interesting to know more */}
                    {/* idk what should i write here. i dont like other to see my personal information, but i need to write so people who come visit know me. i think its like a bullshit you know frameing your self so other think you are a good, you must be writen so goodly as you can to convinc other right? it just not me, i cant do this kind of thing, if you wanna know me that socialize with me not by reading this "About" i wrote */}
                </Typography>
            </Fragment >
        )
    }
    return (
        <Fragment>
            <Introduce
                Description='A Portfolio Page, Contain Personal Information and Portfolio'
            />
            <OpeningPanel
                UnUsualContent={<IntroduceProducts />}
            />
            {/* <OpeningPanel
                id='HomeOpeningPanel'
                Title='About'
                TitleLink='/about'
            // Description='you can see "About" page to see more infotmation'
            // Description='I dont know what to write here, please cek "About" page if you interesting to know more'
            // Description='idk what should i write here. i dont like other to see my personal information, but i need to write so people who come visit know me. i think its like a bullshit you know frameing your self so other think you are a good, you must be writen so goodly as you can to convinc other right? it just not me, i cant do this kind of thing, if you wanna know me that socialize with me not by reading this "About" i wrote'
            /> */}
            <FooterPanel
                UnUsualContent={<About />}
            />
        </Fragment>
    )
}

export default Home