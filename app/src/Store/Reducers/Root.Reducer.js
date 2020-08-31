import { combineReducers } from 'redux'

import Blog from './Blog.Reducer'
import About from './About.Reducer'
import Display from './Display.Reducer'

const RootReducer = combineReducers({
    Blog, About, Display,
})

export default RootReducer