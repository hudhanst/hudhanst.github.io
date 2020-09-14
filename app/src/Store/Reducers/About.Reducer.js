import {
    ABOUT_LOADING,
    ABOUT_LOADED,
    GET_ABOUT_LIFEPATH_LIST,
    GET_ABOUT_SKILL_LIST,
} from '../Actions/Type.Actions'

const initialState = {
    isAboutLoading: false,
    LifePath_List: [],
    Skill_List: [],
}

const LifePathData = [
    {
        id: 0,
        Year: 1997,
        Month: [
            [],
            [],
            [],
            [],
            [],
            [],
            [],
            [],
            [],
            [],
            [],
            [
                {
                    Event_Title: 'Born',
                    Event_Description: 'A month Khairul Hudha Nasution born in Bekasi'
                },
            ],
        ]
    },
    {
        id: 1,
        Year: 1998,
    },
    {
        id: 2,
        Year: 1999,
    },
    {
        id: 3,
        Year: 2000,
    },
    {
        id: 4,
        Year: 2001,
    },
    {
        id: 5,
        Year: 2002,
    },
    {
        id: 6,
        Year: 2003,
        Month: [
            [],
            [],
            [],
            [],
            [],
            [],
            [
                {
                    Event_Title: 'Start Study in Elementary School',
                    Event_Description: 'Start Study in Elementary School, SDN Sepanjang Jaya VIII for 6 years'
                },
            ],
            [],
            [],
            [],
            [],
            [],
        ]
    },
    {
        id: 7,
        Year: 2004,
    },
    {
        id: 8,
        Year: 2005,
    },
    {
        id: 9,
        Year: 2006,
    },
    {
        id: 10,
        Year: 2007,
    },
    {
        id: 11,
        Year: 2008,
    },
    {
        id: 12,
        Year: 2009,
        Month: [
            [],
            [],
            [],
            [],
            [],
            [
                {
                    Event_Title: 'Graduated from Elementary School',
                    Event_Description: 'Graduated from Elementary School, after 6 years in SDN Sepanjang Jaya VIII '
                },
            ],
            [
                {
                    Event_Title: 'Starting Junior High School Study',
                    Event_Description: 'Starting Junior High School Study, for 3 years in SMPIT Al-Hassan'
                },
            ],
            [],
            [],
            [],
            [],
            [],
        ]
    },
    {
        id: 13,
        Year: 2010,
    },
    {
        id: 14,
        Year: 2011,
    },
    {
        id: 15,
        Year: 2012,
        Month: [
            [],
            [],
            [],
            [],
            [],
            [
                {
                    Event_Title: 'Graduated from Junior High School',
                    Event_Description: 'Graduated from Junior High School, after 3 years in SMPIT Al-Hassan'
                },
            ],
            [
                {
                    Event_Title: 'Start Study in High School',
                    Event_Description: 'Start Study in High School, SMAIT Assyifa'
                },
            ],
            [],
            [],
            [],
            [],
            [],
        ]
    },
    {
        id: 16,
        Year: 2013,
    },
    {
        id: 17,
        Year: 2014,
        Month: [
            [],
            [],
            [],
            [],
            [],
            [
                {
                    Event_Title: 'Changed Schools',
                    Event_Description: 'I changed schools from SMAIT Assyifa to SMAN 1 Tambun Selatan'
                },
            ],
            [],
            [],
            [],
            [],
            [],
            [],
        ]
    },
    {
        id: 18,
        Year: 2015,
        Month: [
            [],
            [],
            [],
            [],
            [
                {
                    Event_Title: 'Graduated from High School',
                    Event_Description: 'Graduated from High School, SMAN 1 Tambun Selatan'
                },
            ],
            [],
            [],
            [
                {
                    Event_Title: 'Starting University Study', ////// not sure
                    Event_Description: 'Starting University Study, for 4 years study in Universitas Negeri Jakarta'
                },
            ],
            [],
            [],
            [],
            [],
        ]
    },
    {
        id: 19,
        Year: 2016,
    },
    {
        id: 20,
        Year: 2017,
    },
    {
        id: 21,
        Year: 2018,
        Month: [
            [
                {
                    Event_Title: 'Starting Internship Program',
                    Event_Description: 'Starting Internship in PT Bentang MitraGuna as Junior Programmer for 6 months (collage duty)'
                },
            ],
            [],
            [],
            [],
            [],
            [
                {
                    Event_Title: 'Completed Internship Program',
                    Event_Description: 'Completed Internship in PT Bentang MitraGuna as Junior Programmer for 6 months (collage duty)'
                },
            ],
            [
                {
                    Event_Title: 'Starting Apprentice Teacher Program',
                    Event_Description: 'Starting Internship in SMKN 26 Jakarta as Basic Programmer Teacher for 3 months (collage duty)'
                },
            ],
            [],
            [],
            [
                {
                    Event_Title: 'Completed Apprentice Teacher Program',
                    Event_Description: 'Completed Internship in SMKN 26 Jakarta as Basic Programmer Teacher for 3 months (collage duty)'
                },
            ],
            [],
            [],
        ]
    },
    {
        id: 22,
        Year: 2019,
        Month: [
            [],
            [],
            [],
            [],
            [],
            [],
            [],
            [],
            [
                {
                    Event_Title: 'Graduated from University',
                    Event_Description: 'Graduated from University, after 4 years study in Universitas Negeri Jakarta'
                },
            ],
            [
                {
                    Event_Title: 'Starting a Training Program',
                    Event_Description: 'Joining Machine Learning / Deep Learning Training Program, Digital Talent Scholarship in Gunadarma'
                },
            ],
            [
                {
                    Event_Title: 'Start a Training Program',
                    Event_Description: 'Completed  Machine Learning / Deep Learning Training Program, Digital Talent Scholarship in Gunadarma'
                },
            ],
            [],
        ]
    },
    {
        Year: 2020,
    },
]

const SkillsData = [
    {
        CategoryName: 'Programming Language',
        SkillRelated: [
            {
                Name: 'C',
                Rating: 6,
                Positive: 'I am learning C Language as the basic programming material in university, i also know basic and intermediate about C, and event tech C language at some point',
                negative: 'I am never make a big project using C Language',
            },
            {
                Name: 'PHP',
                Rating: 3,
                Positive: 'When i was in university, i made a website using Basic PHP, i know basic syntax, but just it, no development or event uses after that',
                negative: 'I just not confident enough to say I am good at this',
            },
            {
                Name: 'Python',
                Rating: 7,
                Positive: 'I understand and can use many basic and intermediate functions involving variable, list, tuple, looping, conditional and many more, i also use python for web and machine learning project',
                negative: 'I dont used to inline function, threading and multiprocessing, and because i havent use python that often in the last 3 months',
            },
            {
                Name: 'JavaScript',
                Rating: 8,
                Positive: 'I understand and can use many basic and intermediate functions, have no problem most of es->es11 module. I use javascript for frontend and backend website',
                negative: 'I dont used to inbuild browser javascript function and sometimes confused with very old javascript syntax',
            },
        ],
    },
    {
        CategoryName: 'Backend Related',
        SkillRelated: [
            {
                Name: 'Django Framework',
                Rating: 6,
                Positive: 'I understand how to install, setting, and how to use Django as a backend + frontend or event for a backend only.',
                negative: 'Because Django is so big and many things handle by Django. Sometimes it feels like I have no control and its making me not confident enough to say I mastered Django',
            },
            {
                Name: 'Django Rest Framework',
                Rating: 7,
                Positive: '-',
                negative: 'Same reason with Django Framework',
            },
            {
                Name: 'ExpressJs Framework',
                Rating: 8,
                Positive: '-',
                negative: 'Never make scheduler system and server side render',
            },
        ],
    },
    {
        CategoryName: 'Frontend Related',
        SkillRelated: [
            {
                Name: 'Bootstrap',
                Rating: 6,
                Positive: '-',
                negative: 'I never experience that many classes available, only use generic classes. and never use it with sass',
            },
            {
                Name: 'MaterialUi',
                Rating: 8,
                Positive: '-',
                negative: 'Never use MaterialUi animation',
            },
            {
                Name: 'ReactJS',
                Rating: 8,
                Positive: '-',
                negative: 'Not using ReactHook that often',
            },
        ],
    },
    {
        CategoryName: 'Database Related',
        SkillRelated: [
            {
                Name: 'SQL: MySQL, Sqlite',
                Rating: 8,
                Positive: 'I learn about SQL in university, i know and work with SQL quite often',
                negative: 'Sometime i get confused by join method involving more than 3 tables. Because i work with Non-SQL database in the last 3 months i just not really sure to put myself higher',
            },
            {
                Name: 'NON-SQL: MongoDb',
                Rating: 7,
                Positive: '-',
                negative: 'I dont used to NON-SQL CMD',
            },
        ],
    },
    {
        CategoryName: 'Other Useful skill',
        SkillRelated: [
            {
                Name: 'Git',
                Rating: 6,
                Positive: 'I know how git work, use and understand generic commend push, pull, fork, branch, marge, etc',
                negative: 'I never experience git with many people involved if there is a problem in the merge proses I dont know what to do yet',
            },
            {
                Name: 'Redux',
                Rating: 8,
                Positive: '-',
                negative: 'Because Redux uses in many technologies I dont know what other implementation of redux other than to react',
            },
            {
                Name: 'Docker',
                Rating: 1,
                Positive: 'I understand what docker is, i learn how to use it',
                negative: 'I never use docker',
            },
        ],
    },
]

export default function (state = initialState, action) {
    switch (action.type) {
        case ABOUT_LOADING:
            return {
                ...state,
                isAboutLoading: true,
            }
        case ABOUT_LOADED:
            return {
                ...state,
                isAboutLoading: false,
            }
        case GET_ABOUT_LIFEPATH_LIST:
            return {
                ...state,
                LifePath_List: LifePathData
            }
        case GET_ABOUT_SKILL_LIST:
            return {
                ...state,
                Skill_List: SkillsData
            }
        default:
            return state
    }
}