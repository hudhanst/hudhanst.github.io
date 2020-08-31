import React from 'react'

import { Route, Switch } from 'react-router-dom'

import Home from './Components/Layouts/Home'
import Blog from './Components/Layouts/Blog'
import Preview from './Components/Containers/Preview'

import BlogKasirQu from './Components/Layouts/Blog/Blog.KasirQu'
// import PreviewKasirQu from './Components/Layouts/Preview/PreviewKasirQu'

// import BlogLearning from './Components/Layouts/Blog/Blog.Learning'
// import BlogPrestasiQu from './Components/Layouts/Blog/Blog.PrestasiQu'
import About from './Components/Layouts/About'
import { PageNotFound } from './Components/Containers/404'

const BaseRouter = () => {
    return (
        <Switch>

            <Route exact path="/" component={Home} />
            <Route exact path="/blog" component={Blog} />
            <Route exact path="/about" component={About} />

            <Route exact path="/blog/preview" component={Preview} />
            
            <Route exact path="/blog/blog/kasirqu" component={BlogKasirQu} />

            {/* <Route exact path="/blog/preview/kasirqu" component={PreviewKasirQu} /> */}

            {/* <Route exact path="/blog/blog/learning" component={BlogLearning} /> */}
            {/* <Route exact path="/blog/blog/prestasiqu" component={BlogPrestasiQu} /> */}
            <Route path="*" component={PageNotFound} />

        </Switch>
    )
}

export default BaseRouter