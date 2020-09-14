// import React, { Fragment, useState, useEffect, useRef, useCallback } from 'react'

// import Cv from '../../../IMG/CurriculumVitae.pdf'

// import pdfjsLib from 'pdfjs-dist/build/pdf'
// import pdfjsWorker from 'pdfjs-dist/build/pdf.worker.entry'

import React, { Fragment, useEffect } from 'react'

// import { Document, Page } from 'react-pdf'

import { Paper, Typography } from '@material-ui/core'

import { gsap } from 'gsap'
// import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"

// import CvPdf from '../../../IMG/CurriculumVitae.pdf'
import Cv from '../../../IMG/CurriculumVitae.png'
// import Skill from '../About/Skill'

const CurriculumVitae = (props) => {
    gsap.registerPlugin(ScrollTrigger)
    gsap.config({
        nullTargetWarn: false,
    })

    useEffect(() => {
        try {
            gsap.fromTo('#CurriculumVitae', {
                opacity: 0,
                scale: 0,
                y: -50,
            }, {
                scrollTrigger: {
                    trigger: '#CurriculumVitae',
                    start: 'top 110%',
                    toggleActions: 'restart none none none',
                    // toggleActions: 'restart pause resume pause',
                    // markers: true,
                },
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 1
            })
        } catch (err) {
            console.log('Log: CurriculumVitae -> err', err)
        }
    })
    return (
        <Fragment>
            <Paper
                id='CurriculumVitae'
                variant='elevation'
                style={{ border: 'none', padding: '2vw' }}
            >
                <img
                    src={Cv}
                    alt="CurriculumVitae"
                    style={{ maxWidth: '100vw', maxHeight: '160vh' }}
                />
                <Typography
                    align='center'
                    color='textSecondary'
                    variant='subtitle1'
                    style={{ fontSize: '1vw' }}
                >
                    *Due to privacy reasons, email and phone number are censored, for uncensored version please email me
                    {/* *Because of a privacy reasons, email and phone number are censored, for uncensored version please email me */}
                </Typography>
                {/* <Document
                    file={CvPdf}
                    options={{ workerSrc: "pdf.worker.js" }}
                >
                    <Page
                        pageNumber={1}
                    />
                </Document> */}
            </Paper>
        </Fragment>
    )
}

export default CurriculumVitae