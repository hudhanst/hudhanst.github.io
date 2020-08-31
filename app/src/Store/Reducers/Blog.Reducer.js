import {
    BLOG_LOADING,
    BLOG_LOADED,
    GET_NEWEST_BLOG_LIST,
    Go_To_Blog_Preview,
    GET_BLOG_LIST,
    GET_FILTERED_BLOG_LIST,
} from '../Actions/Type.Actions'

const GithubRepoList = [
    {
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
        Title: 'PrestasiQu',
        BlogLink: '',
        Description: (
            'an university project, a main task is to store an achivment or punishment of student so a school orginize when needed.\n the main goal is to recreate an exist project using more moderent fermwork/ technology, the main project done with native php, js, html and css(bootrap) and run in XAMPP.The original file also included here.'
        ),
        Tags: ['python', 'javascript', 'django', 'django-rest-framework', 'sql', 'react', 'bootstrap'],
        GithubLink: 'https://github.com/hudhanst/PrestasiQu',
        PrototypeLink: '',
    },
    {
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
}

export default function (state = initialState, action) {
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
        default:
            return state
    }
}