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
import { GrGroup, GrHistory, GrServers } from 'react-icons/gr'
import { GoGraph } from 'react-icons/go'
import { IoIosPricetags } from 'react-icons/io'
import { MdImportExport } from 'react-icons/md'

const BlogKasirQu = (props) => {
    useEffect(() => {
        Store.dispatch(Get_Blog_Detail(3))
        // ScrollTrigger.refresh()
    }, [])
    const ShowData = props.Blog_Detail
    return (
        <Fragment>
            <Introduce
                Description={ShowData?.Title ? ShowData.Title : ''}
                SVGd="M0,160L48,165.3C96,171,192,181,288,202.7C384,224,480,256,576,240C672,224,768,160,864,138.7C960,117,1056,139,1152,138.7C1248,139,1344,117,1392,106.7L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
            />
            {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1440 320"
            >
                <path
                    fill="#0099ff"
                    fill-opacity="1"
                    d="M0,160L48,165.3C96,171,192,181,288,202.7C384,224,480,256,576,240C672,224,768,160,864,138.7C960,117,1056,139,1152,138.7C1248,139,1344,117,1392,106.7L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
                >
                </path>
            </svg> */}
            <OpeningPanel
                Title={ShowData?.Title ? ShowData.Title : ''}
                Description={ShowData?.Description ? ShowData.Description : ''}
            />
            <ExplanationPanel
                id='GroupedUser'
                Title='Grouped User'
                Description='Each User grouped into a category, an action allowed or not determine based on User Group'
                ContentICO={GrGroup}
            />
            <ExplanationPanel
                id='PriceCategory'
                Title='PriceCategory'
                Description='An Admin User can set a price category base on minimum stuff buyer purchase'
                ContentICO={IoIosPricetags}
                ReverstRow={true}
            />
            <ExplanationPanel
                id='ReportSystem'
                Title='Report System'
                Description='User can check for Report about what happen in apps related to the transaction, like how much supply remaining, how much transaction in a day or anything else user want'
                ContentICO={GoGraph}
            />
            <ExplanationPanel
                id='EasyToUse'
                Title='Easy to Use'
                Description='System designed to easy to use, a feature like sorting, searching, query, day and night theme and many more are available'
                ContentImage={Logo}
                ReverstRow={true}
            />
            <ExplanationPanel
                id='ServerSide'
                Title='Can be accessed from local network'
                Description='Because this system build based on express.js and bundle with electron.js user can use this apps concurrently as long main apps run in the same local network'
                ContentICO={GrServers}
            />
            <ExplanationPanel
                id='ImportExport'
                Title='Import/Export'
                Description='If you are tired of input data one by one or scared data lose, we provide Import/Export using an excel file'
                ContentICO={MdImportExport}
                ReverstRow={true}
            />
            <ExplanationPanel
                id='History'
                Title='History'
                Description='Recode all important stuff that happens in the system'
                ContentICO={GrHistory}
            />
            {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1440 320"
            >
                <path
                    fill="#0099ff"
                    fill-opacity="1"
                    d="M0,160L48,165.3C96,171,192,181,288,202.7C384,224,480,256,576,240C672,224,768,160,864,138.7C960,117,1056,139,1152,138.7C1248,139,1344,117,1392,106.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                >
                </path>
            </svg> */}
            <FooterPanel
                GithubLink={ShowData?.GithubLink ? ShowData.GithubLink : ''}
                PrototypeLink={ShowData?.PrototypeLink ? ShowData.PrototypeLink : ''}
                SVGd="M0,160L48,165.3C96,171,192,181,288,202.7C384,224,480,256,576,240C672,224,768,160,864,138.7C960,117,1056,139,1152,138.7C1248,139,1344,117,1392,106.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            />
        </Fragment>
    )
}

const mapStateToProps = state => ({
    Blog_Detail: state.Generic_Blog.Blog_Detail
})

export default connect(mapStateToProps)(BlogKasirQu)