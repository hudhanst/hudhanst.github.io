import React, { Fragment, useEffect } from 'react'

import Store from '../../../Store/Store'
import { connect } from 'react-redux'
import { Get_Blog_Detail } from '../../../Store/Actions/Blog.Actions'

// import { gsap } from 'gsap'
// // import { ScrollTrigger } from 'gsap/ScrollTrigger'
// import { ScrollTrigger } from "gsap/dist/ScrollTrigger"

import Introduce from '../../Containers/Blog/Introduce'
import OpeningPanel from '../../Containers/Blog/OpeningPanel'
import ExplanationPanel from '../../Containers/Blog/ExplanationPanel'
import FooterPanel from '../../Containers/Blog/FooterPanel'

import Logo from '../../../IMG/logo_1.png'
import { GiTicTacToe, GiCardJoker } from 'react-icons/gi'

const BlogLearning = (props) => {
    useEffect(() => {
        Store.dispatch(Get_Blog_Detail(1))
        // ScrollTrigger.refresh()
    }, [])
    const ShowData = props.Blog_Detail
    return (
        <Fragment>
            <Introduce
                Description={ShowData?.Title ? ShowData.Title : ''}
                SVGd="M0,128L48,106.7C96,85,192,43,288,53.3C384,64,480,128,576,144C672,160,768,128,864,138.7C960,149,1056,203,1152,202.7C1248,203,1344,149,1392,122.7L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
            />
            <OpeningPanel
                Title={ShowData?.Title ? ShowData.Title : ''}
                Description={ShowData?.Description ? ShowData.Description : ''}
            />
            {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1440 320"
            >
                <path
                    fill="#0099ff"
                    fill-opacity="1"
                    d="M0,128L48,106.7C96,85,192,43,288,53.3C384,64,480,128,576,144C672,160,768,128,864,138.7C960,149,1056,203,1152,202.7C1248,203,1344,149,1392,122.7L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
                >
                </path>
            </svg> */}
            <ExplanationPanel
                id='TicTacToe'
                Title='TicTacToe'
                Description='Recreate TicTacToe game on python, you can play with your friend (in same pc) or play with scripted bot but without GUI'
                // ContentImage={Logo}
                ContentICO={GiTicTacToe}
            />
            <ExplanationPanel
                id='CardGame41'
                Title='41CardGame'
                Description='Recreate 41CardGame game on python, you can play with your friend (in same pc) or play with scripted bot but without GUI'
                ContentICO={GiCardJoker}
                ReverstRow={true}
            />
            <ExplanationPanel
                id='MachineLearning'
                Title='Machine Learning'
                Description='Image Recognition/Classification, Regression Analysis, Classification. using multiple dataset'
                ContentImage={Logo}
            />
            {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1440 320"
            >
                <path
                    fill="#0099ff"
                    fill-opacity="1"
                    d="M0,128L288,0L576,192L864,96L1152,256L1440,96L1440,320L1152,320L864,320L576,320L288,320L0,320Z"
                >
                </path>
            </svg> */}
            <FooterPanel
                GithubLink={ShowData?.GithubLink ? ShowData.GithubLink : ''}
                PrototypeLink={ShowData?.PrototypeLink ? ShowData.PrototypeLink : ''}
                SVGd="M0,128L288,0L576,192L864,96L1152,256L1440,96L1440,320L1152,320L864,320L576,320L288,320L0,320Z"
            />
        </Fragment>
    )
}

const mapStateToProps = state => ({
    Blog_Detail: state.Generic_Blog.Blog_Detail
})

export default connect(mapStateToProps)(BlogLearning)