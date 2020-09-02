import React, { Fragment, useEffect } from 'react'

import { Link as GoTo } from 'react-router-dom'

import Store from '../../Store/Store'

import { connect } from 'react-redux'

import { Get_Blog_List, Filter_Blog_Base_on_Tags } from '../../Store/Actions/Blog.Actions'

import { useTheme, useMediaQuery, Paper, Grid, Typography, Chip, Button } from '@material-ui/core'
import { ToggleButton, ToggleButtonGroup } from '@material-ui/lab'

import { gsap } from 'gsap'
// import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"

import SubjectRoundedIcon from '@material-ui/icons/SubjectRounded'

import { MUI_Initial_State } from '../../MUI_Theme_Style'

const Blog = (props) => {
    gsap.registerPlugin(ScrollTrigger)
    const [state, setState] = React.useState({
        isComponentMount: false,
        BlogOrder: 'ascending',
        SelectedList: [],
        // QueryTags: false,
        // TagLists: [],
        Blog_GSAP: [],
        Tags_GSAP: [],
    })

    // console.log(state)

    // eslint-disable-next-line
    useEffect(() => {
        if (state.isComponentMount === false) {
            Store.dispatch(Get_Blog_List())
            setState({ ...state, isComponentMount: true })
            // setState({ ...state, isComponentMount: true, QueryTags: true })
        }

        try {
            gsap.fromTo(state.Blog_GSAP, {
                opacity: 0,
            }, {
                scrollTrigger: {
                    trigger: state.Blog_GSAP,
                    toggleActions: 'restart pause resume pause',
                },
                opacity: 1,
                duration: 0.5,
                scale: 1,
                stagger: {
                    amount: 1
                }
                // ease: "power1.in",
            })

        } catch (err) {
            console.log('Log: Blog -> err', err)
        }

        try {
            gsap.fromTo(state.Tags_GSAP, {
                opacity: 0,
                // ease: "power1.in",
            }, {
                scrollTrigger: {
                    trigger: state.Tags_GSAP,
                    toggleActions: 'restart pause resume pause',
                },
                opacity: 1,
                duration: 0.1,
                scale: 1,
                stagger: {
                    amount: 1
                }
            })

        } catch (err) {
            console.log('Log: Blog -> err', err)
        }

    })

    // const TagListsData = state.TagLists
    const TagListsData = [
        'python',
        'machine-learning',
        'javascript',
        'django',
        'django-rest-framework',
        'sql',
        'react',
        'bootstrap',
        'express.js',
        'nosql',
        'material-ui',
    ]
    const TagLists = TagListsData.sort()
    const Blog_List = props.Blog_List

    const theme = useTheme()
    const DefaultTheme = theme.palette.background.default
    const PrimaryMainTheme = theme.palette.primary.main
    const SecondaryMainTheme = theme.palette.secondary.main
    const ContrastTextTheme = theme.palette.primary.contrastText
    const TextPrimaryTheme = theme.palette.text.primary
    const TextSecondaryTheme = theme.palette.text.secondary

    const minScreenWidth = MUI_Initial_State.units.minWidth_first
    const isFullNavbar = useMediaQuery(`(min-width:${minScreenWidth}px)`)

    const handleBlogOrder = (e, newOrder) => {
        // TODO Shorting
        setState({ ...state, BlogOrder: newOrder })
    }

    // const Create_Tags_Lists = (BlogListData) => { // FIXME idk just cause button didnt change color
    //     try {
    //         const TagListsData = []
    //         BlogListData.forEach(element => {
    //             const Blog_List_Tags = element.Tags ? element.Tags : []
    //             Blog_List_Tags.forEach(element_element => {
    //                 const isTaginTagListsData = TagListsData.find(item => item === element_element)
    //                 if (!isTaginTagListsData) {
    //                     TagListsData.push(element_element)
    //                 }
    //             })
    //         })
    //         return TagListsData
    //     } catch (err) {
    //         console.log('Log: Blog -> err', err)
    //     }
    // }

    const Change_Selected_List = (Tag) => {
        try {
            const SelectedList = state.SelectedList
            const TagSelected = SelectedList.findIndex((item) => item === Tag)
            const ButtonId = `tags_${Tag}`
            // console.log('Log: Change_Selected_List -> ButtonId', ButtonId)
            if (TagSelected >= 0) {
                SelectedList.splice(TagSelected, 1)
                setState({ ...state, SelectedList: SelectedList })
                document.getElementById(ButtonId).style.backgroundColor = SecondaryMainTheme
            } else {
                SelectedList.push(Tag)
                setState({ ...state, SelectedList: SelectedList })
                document.getElementById(ButtonId).style.backgroundColor = PrimaryMainTheme
            }
            Store.dispatch(Filter_Blog_Base_on_Tags(SelectedList))
            // setState({ ...state, QueryTags: true })
            // console.log('Log: Blog -> SelectedList', SelectedList)
        } catch (err) {
            console.log('Log: If_Tag_Selected -> err', err)
        }
    }

    const Restart_Selected_List = () => {
        try {
            const SelectedList = state.SelectedList
            SelectedList.forEach(element => {
                const ButtonId = `tags_${element}`
                document.getElementById(ButtonId).style.backgroundColor = SecondaryMainTheme
            })
            setState({ ...state, SelectedList: [] })
            Store.dispatch(Filter_Blog_Base_on_Tags([]))
        } catch (err) {
            console.log('Log: If_Tag_Selected -> err', err)
        }
    }

    // console.log('Log: Blog -> Blog_List', Blog_List)

    return (
        <Fragment>
            <Paper
                variant="outlined"
                style={{ border: 'none', paddingTop: '11%', paddingBottom: '1%', backgroundColor: DefaultTheme, borderRadius: '0', position: 'relative', zIndex: 1, minHeight: '100vh' }}
            >
                <Grid
                    container
                    direction={isFullNavbar ? 'row' : 'column-reverse'}
                    justify="space-between"
                    alignItems={isFullNavbar ? "stretch" : "center"}
                >
                    <Paper
                        variant='outlined'
                        style={{ border: 'none', minHeight: '50vh', width: isFullNavbar ? '70%' : '90%', padding: '10px', backgroundColor: DefaultTheme }}
                    >
                        <Grid
                            container
                            direction="column"
                            justify="flex-start"
                            alignItems="stretch"
                        >
                            <ToggleButtonGroup
                                value={state.BlogOrder}
                                exclusive
                                onChange={handleBlogOrder}
                            >
                                <ToggleButton value="ascending" aria-label="ascending">
                                    <SubjectRoundedIcon style={{ transform: 'scaleY(-1)' }} />
                                </ToggleButton>
                                <ToggleButton value="descending" aria-label="descending">
                                    <SubjectRoundedIcon />
                                </ToggleButton>
                            </ToggleButtonGroup>
                            {Blog_List.map((item, index) => (
                                <Paper
                                    key={index}
                                    // id={`Blog_List_${item.Title}`}
                                    ref={reference => state.Blog_GSAP[index] = reference}
                                    variant='elevation'
                                    style={{ marginBottom: '1vh', marginTop: '1vh', paddingBottom: '1vh', paddingTop: '1vh', paddingRight: '1vw', paddingLeft: '1vw', borderRadius: '15px', minHeight: '20vh', boxShadow: '0 2px 4px -1px #010101' }}
                                >
                                    <Typography
                                        align='center'
                                        variant='h2'
                                        style={{ fontSize: '2vw', color: TextPrimaryTheme }}
                                    >
                                        {item.BlogLink ? (
                                            <GoTo
                                                to={item.BlogLink}
                                                style={{ textDecoration: 'none', color: TextPrimaryTheme }}
                                            >
                                                {item.Title ? item.Title : 'Title'}
                                            </GoTo>)
                                            : item.Title}
                                    </Typography>
                                    <Typography
                                        align='left'
                                        // variant='subtitle1'
                                        style={{ fontSize: '1.4vw', color: TextSecondaryTheme }}
                                    >
                                        {item.Description}
                                    </Typography>
                                    <div
                                        style={{ marginTop: '1vh', marginBottom: '1vh' }}
                                    >
                                        <center>
                                            {item.Tags.map((item_item, index_index) => (
                                                <Chip
                                                    key={index_index}
                                                    label={item_item}
                                                    style={{ background: PrimaryMainTheme, color: ContrastTextTheme, fontSize: '1.1vw', paddingLeft: '0.5vw', paddingRight: '0.5vw', marginLeft: '0.25vw', marginRight: '0.25vw', marginTop: '1vh' }}
                                                />
                                            ))}
                                        </center>
                                    </div>
                                </Paper>
                            ))}
                        </Grid>
                    </Paper>
                    <Paper
                        variant='outlined'
                        className='My_latest_work_Detail'
                        style={{ border: 'none', marginBottom: isFullNavbar ? '0' : '1%', minHeight: isFullNavbar ? 'none' : '20vh', maxHeight: isFullNavbar ? 'none' : '20vh', width: isFullNavbar ? '25%' : '90%', padding: '10px', backgroundColor: DefaultTheme }
                        }>
                        <center>
                            <Button
                                variant='contained'
                                color='secondary'
                                onClick={() => Restart_Selected_List()}
                                style={{ paddingTop: '1vh', paddingBottom: '1vh', margin: '1%', borderRadius: '5px', width: '90%' }}
                            >
                                Restart
                            </Button>
                            {TagLists.map((item, index) => (
                                <Button
                                    key={index}
                                    id={`tags_${item}`}
                                    ref={reference => state.Tags_GSAP[index] = reference}
                                    variant='contained'
                                    color='secondary'
                                    onClick={() => Change_Selected_List(item)}
                                    style={{ paddingTop: '1vh', paddingBottom: '1vh', margin: '1%', borderRadius: '5px' }}
                                >
                                    {item}
                                </Button>
                            ))}
                        </center>
                    </Paper>
                </Grid>
            </Paper>
        </Fragment>
    )
}

const mapStateToProps = state => ({
    Blog_List: state.Generic_Blog.Blog_List
})

export default connect(mapStateToProps)(Blog)