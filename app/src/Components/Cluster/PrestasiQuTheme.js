import React, { lazy, Fragment, Suspense } from 'react'

// import Loading from './PrestasiQu/src/Components/Container/Loading'

const PrestasiQuThemeConfig = lazy(() => import('./PrestasiQuThemeConfig'))

const PrestasiQuTheme = ({ children }) => {
    return (
        <Fragment>
            <Suspense fallback={
                <div>
                    <center>
                        <h1>
                            Loading...
                        </h1>
                    </center>
                </div>}>
                <PrestasiQuThemeConfig />
            </Suspense>
            {children}
        </Fragment>
    )
}

export default PrestasiQuTheme