import React, { useEffect } from 'react'

import Store from '../../../Store/Store'

import { connect } from 'react-redux'
import { Get_Skill_List } from '../../../Store/Actions/About.Action'

import { useTheme, Paper, Typography } from '@material-ui/core'
import { Rating } from '@material-ui/lab'

import { gsap } from 'gsap'
// import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"

const Skill = (props) => {
    const [state] = React.useState({
        MajorSkill_GSAP: [],
        MinorSkill_GSAP: [],
    })
    Store.dispatch(Get_Skill_List())

    gsap.registerPlugin(ScrollTrigger)
    gsap.config({
        nullTargetWarn: false,
    })

    useEffect(() => {
        ////// SKILLTYPOGRAPHY
        try {
            gsap.fromTo('.SkillTypography', {
                opacity: 0,
                y: -50,
            }, {
                scrollTrigger: {
                    trigger: '.SkillTypography',
                    // toggleActions: 'restart none none none'
                    toggleActions: 'restart pause resume pause',
                    // markers: true,
                },
                opacity: 1,
                y: 0,
                scale: 1,
                // duration: 1
            })
        } catch (err) {
            console.log('Log: Skill 1 -> err', err)
        }
        ////// MAJORSKILL
        try {
            gsap.utils.toArray(state.MajorSkill_GSAP.forEach((panel, index) => {
                gsap.from(panel, {
                    scrollTrigger: {
                        trigger: panel,
                        toggleActions: 'restart none none none'
                    },
                    opacity: 0,
                    y: 50,
                    duration: 1
                })
            }))
        } catch (err) {
            console.log('Log: Skill 2 -> err', err)
        }
        ////// MINORSKILL
        try {
            gsap.utils.toArray(state.MinorSkill_GSAP.forEach((panel, index) => {
                gsap.from(panel, {
                    scrollTrigger: {
                        trigger: panel,
                        start: 'top 110%',
                        // toggleActions: 'restart none none none',
                        toggleActions: 'restart pause resume pause',
                        // markers: true,
                    },
                    opacity: 0,
                    y: -50,
                    scale: 0,
                    // duration: 1
                })
            }))
        } catch (err) {
            console.log('Log: Skill 3 -> err', err)
        }
    })

    const theme = useTheme()
    const NavbarTheme = theme.custom.navbar
    const DefaultTheme = theme.palette.background.default
    const ContrastTextTheme = theme.palette.primary.contrastText
    const TextSecondaryTheme = theme.palette.text.secondary

    const SkillsData = props.Skill_List ? props.Skill_List : []

    return (
        <Paper
            id='Skill'
            variant='outlined'
            style={{ border: 'none', margin: '1%', padding: '1%', width: '90%', backgroundColor: NavbarTheme }}
        >
            <Typography
                variant='h1'
                className='SkillTypography'
                align='center'
                style={{ fontSize: '4vw', color: ContrastTextTheme }}
            >
                Skill
            </Typography>
            {SkillsData.map((item_skill, index_skill) => (
                <Paper
                    variant='elevation'
                    key={`MajorSkill_${index_skill}`}
                    id={`MajorSkill_${index_skill}`}
                    ref={reference => state.MajorSkill_GSAP[index_skill] = reference}
                    style={{ border: 'none', padding: '1%', marginTop: '2vh', marginBottom: '2vh', backgroundColor: DefaultTheme, boxShadow: '0 2px 4px -1px #010101' }}
                >
                    <Typography
                        variant='h2'
                        style={{ fontSize: '2.5vw' }}
                    >
                        {item_skill.CategoryName}
                    </Typography>
                    {item_skill.SkillRelated.map((item_skill_related, index_skill_related) => (
                        <Paper
                            variant='elevation'
                            key={`MinorSkill_${index_skill_related}`}
                            id={`MinorSkill_${index_skill_related}`}
                            ref={reference => state.MinorSkill_GSAP[state.MinorSkill_GSAP.length] = reference}
                            style={{ border: 'none', padding: '1%', marginTop: '1vh', marginBottom: '1vh', boxShadow: '0 2px 4px -1px #010101' }}
                        >
                            <Typography
                                variant='h3'
                                style={{ fontSize: '2vw', marginLeft: '1%' }}
                            >
                                {item_skill_related.Name}
                            </Typography>

                            <Typography
                                align='center'
                            >
                                <Rating
                                    readOnly
                                    size="large"
                                    value={item_skill_related.Rating}
                                    max={10}
                                />
                            </Typography>

                            <Typography
                                variant='h4'
                                style={{ fontSize: '1.5vw', marginLeft: '2%' }}
                            >
                                why do you put yourself that high?
                            </Typography>
                            <Typography
                                variant='subtitle1'
                                style={{ fontSize: '1.1vw', color: TextSecondaryTheme, marginLeft: '3%' }}
                            >
                                {item_skill_related.Positive}
                            </Typography>

                            <Typography
                                variant='h4'
                                style={{ fontSize: '1.5vw', marginLeft: '2%' }}
                            >
                                why do you put yourself that low?
                            </Typography>
                            <Typography
                                variant='subtitle1'
                                style={{ fontSize: '1.1vw', color: TextSecondaryTheme, marginLeft: '3%' }}
                            >
                                {item_skill_related.negative}
                            </Typography>
                        </Paper>
                    ))}
                </Paper>
            ))}
        </Paper>
    )
}

const mapStateToProps = state => ({
    Skill_List: state.About.Skill_List
})

export default connect(mapStateToProps)(Skill)