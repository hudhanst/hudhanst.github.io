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
        Year: 1997,
        Month: [
            [
                {
                    Event_Title: 'Born',
                    Event_Description: 'A month Khairul Hudha Nasution born in Bekasi'
                },
                {
                    Event_Title: 'Born',
                    Event_Description: 'A month Khairul Hudha Nasution born in Bekasi'
                },
            ],
            [],
            [
                {
                    Event_Title: 'Born',
                    Event_Description: 'A month Khairul Hudha Nasution born in Bekasi'
                },
                {
                    Event_Title: 'Born',
                    Event_Description: 'A month Khairul Hudha Nasution born in Bekasi'
                },
            ],
            [],
            [],
            [
                {
                    Event_Title: 'Born',
                    Event_Description: 'A month Khairul Hudha Nasution born in Bekasi'
                },
                {
                    Event_Title: 'Born',
                    Event_Description: 'A month Khairul Hudha Nasution born in Bekasi'
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
        Year: 1998,
    },
    {
        Year: 1999,
    },
    {
        Year: 2000,
    },
    {
        Year: 2001,
    },
    {
        Year: 2002,
    },
    {
        Year: 2003,
    },
    {
        Year: 2004,
    },
    {
        Year: 2005,
    },
    {
        Year: 2006,
    },
    {
        Year: 2007,
    },
    {
        Year: 2008,
    },
    {
        Year: 2009,
    },
    {
        Year: 2010,
    },
    {
        Year: 2011,
    },
    {
        Year: 2012,
    },
    {
        Year: 2013,
    },
    {
        Year: 2014,
    },
    {
        Year: 2015,
    },
    {
        Year: 2016,
    },
    {
        Year: 2017,
    },
    {
        Year: 2018,
    },
    {
        Year: 2019,
    },
    {
        Year: 2020,
    },

]

const SkillsData = [
    {
        CategoryName: 'asd',
        SkillRelated: [
            {
                Name: 'ddd',
                Rating: 9,
                Positive: 'asd',
                negative: 'addd',
            },
            {
                Name: 'aaa',
                Rating: 1,
                Positive: 'asd',
                negative: 'addd',
            },
            {
                Name: 'cc',
                Rating: 8,
                Positive: 'asd',
                negative: 'addd',
            }
        ],
    },
    {
        CategoryName: 'asd',
        SkillRelated: [
            {
                Name: 'ddd',
                Rating: 9,
                Positive: 'asd',
                negative: 'addd',
            },
            {
                Name: 'ddd',
                Rating: 9,
                Positive: 'asd',
                negative: 'addd',
            }
        ],
    }
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