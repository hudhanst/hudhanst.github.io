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
import { GrGroup, GrCalculator } from 'react-icons/gr'

const BlogPrestasiQu = (props) => {
    useEffect(() => {
        Store.dispatch(Get_Blog_Detail(2))
        // ScrollTrigger.refresh()
    }, [])
    const ShowData = props.Blog_Detail
    return (
        <Fragment>
            <Introduce
                Description={ShowData?.Title ? ShowData.Title : ''}
            />
            <OpeningPanel
                Title={ShowData?.Title ? ShowData.Title : ''}
                Description={ShowData?.Description ? ShowData.Description : ''}
            />
            <ExplanationPanel
                id='GroupedUser'
                Title='Grouped User'
                Description='Each User grouped into a category, an action allowed or not determine based on User Group'
                ContentICO={GrGroup}
                ReverstRow={true}
            />
            <ExplanationPanel
                id='SubmissionSystem'
                Title='Submission System'
                Description='A capable User can submit a Point or Prestasi to another user, after submission a SuperVisor User will cek and choice whether a Submission Accepted Rejected or Delayed. A Submission can also input with image'
                ContentImage={Logo}
            />
            <ExplanationPanel
                id='AutoCalculateAPoint'
                Title='Auto Calculate a Point'
                Description='System will automatically change a Point base on Point or Prestasi after Submission accepted, and also User can see their own Point or Prestasi history'
                ContentICO={GrCalculator}
                ReverstRow={true}
            />
            {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1440 320"
            >
                <path
                    fill="#0099ff"
                    fill-opacity="1"
                    d="M0,320L0,160L288,160L288,96L576,96L576,64L864,64L864,64L1152,64L1152,288L1440,288L1440,320L1152,320L1152,320L864,320L864,320L576,320L576,320L288,320L288,320L0,320L0,320Z"
                >
                </path>
            </svg> */}
            <FooterPanel
                GithubLink={ShowData?.GithubLink ? ShowData.GithubLink : ''}
                PrototypeLink={ShowData?.PrototypeLink ? ShowData.PrototypeLink : ''}
                SVGd="M0,320L0,160L288,160L288,96L576,96L576,64L864,64L864,64L1152,64L1152,288L1440,288L1440,320L1152,320L1152,320L864,320L864,320L576,320L576,320L288,320L288,320L0,320L0,320Z"
            />
        </Fragment>
    )
}

const mapStateToProps = state => ({
    Blog_Detail: state.Generic_Blog.Blog_Detail
})


export default connect(mapStateToProps)(BlogPrestasiQu)