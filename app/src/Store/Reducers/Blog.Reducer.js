import {
    BLOG_LOADING,
    BLOG_LOADED,
    GET_NEWEST_BLOG_LIST,
    Go_To_Blog_Preview,
    GET_BLOG_LIST,
    GET_FILTERED_BLOG_LIST,
    GET_BLOG_DETAIL,
    USEABLE_KASIRQU_USER_LIST,
    USEABLE_PRESTASIQU_USER_LIST,
} from '../Actions/Type.Actions'

const GithubRepoList = [
    {
        id: '1',
        Title: 'Learning',
        BlogLink: '/blog/blog/learning',
        Description: (
            'This repository contain many idea to training my skill in coding. This repository published because i think it might interesting for other. The idea it self come from many sources\n This repository contain many topic so i will give an introduce some of them in this REDME file'
        ),
        Tags: ['python', 'machine-learning'],
        GithubLink: 'https://github.com/hudhanst/learning',
        PrototypeLink: '',
    },
    {
        id: '2',
        Title: 'PrestasiQu',
        BlogLink: '/blog/blog/prestasiqu',
        Description: (
            'an university project, a main task is to store an achivment or punishment of student so a school orginize when needed.\n the main goal is to recreate an exist project using more moderent fermwork/ technology, the main project done with native php, js, html and css(bootrap) and run in XAMPP.The original file also included here.'
        ),
        Tags: ['python', 'javascript', 'django', 'django-rest-framework', 'sql', 'react', 'bootstrap'],
        GithubLink: 'https://github.com/hudhanst/PrestasiQu',
        PrototypeLink: '/blog/preview/prestasiqu',
    },
    {
        id: '3',
        Title: 'KasirQu',
        BlogLink: '/blog/blog/kasirqu',
        Description: (
            'Simple Cashier App Use for storing data, in and out. Also give a report about what happen in apps,'
        ),
        Tags: ['javascript', 'express.js', 'nosql', 'react', 'material-ui'],
        GithubLink: 'https://github.com/hudhanst/KasirQu',
        PrototypeLink: '/blog/preview/kasirqu',
    },
]

const initialState = {
    isBlogLoading: false,
    BlogPreviewURL: null,
    Blog_List: [],
    Blog_Detail: null,
    KasirQu_Useable_User_List: [],
    PrestasiQu_Useable_User_List: [],
}

export default function (state = initialState, action) {
    try {
        switch (action.type) {
            case BLOG_LOADING:
                return {
                    ...state,
                    isBlogLoading: true,
                }
            case BLOG_LOADED:
                return {
                    ...state,
                    isBlogLoading: false,
                }
            case GET_NEWEST_BLOG_LIST:
                return {
                    ...state,
                    Blog_List: GithubRepoList.slice(0, 3)
                }
            case Go_To_Blog_Preview:
                return {
                    ...state,
                    BlogPreviewURL: action.payload
                }
            case GET_BLOG_LIST:
                return {
                    ...state,
                    Blog_List: GithubRepoList
                }
            case GET_FILTERED_BLOG_LIST:
                const ListOfTags = action.payload
                const Blog_List = GithubRepoList
                if (ListOfTags.length > 0) {
                    const newBlog_List = []
                    Blog_List.forEach(element => {
                        const Blog_List_Tags = element.Tags
                        const isTagCorrect = Blog_List_Tags.filter(item => ListOfTags.includes(item))
                        if (isTagCorrect.length === ListOfTags.length) {
                            newBlog_List.push(element)
                        }
                    })
                    state.Blog_List = newBlog_List
                } else {
                    state.Blog_List = Blog_List
                }
                return {
                    ...state,
                }
            case GET_BLOG_DETAIL:
                const Detail = GithubRepoList.find((item) => item.id === String(action.payload))
                return {
                    ...state,
                    Blog_Detail: Detail
                }
            case USEABLE_KASIRQU_USER_LIST:
                return {
                    ...state,
                    KasirQu_Useable_User_List: action.payload,
                }
            case USEABLE_PRESTASIQU_USER_LIST:
                return {
                    ...state,
                    PrestasiQu_Useable_User_List: action.payload,
                }
            default:
                return state
        }
    } catch (err) {
        console.log('Log: err', err)
    }
}