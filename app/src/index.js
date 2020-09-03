import React from 'react'

import ReactDOM from 'react-dom'

import { Provider } from 'react-redux'

import * as serviceWorker from './serviceWorker'

// import 'bootstrap/dist/css/bootstrap.css'
import './index.css'
import './Components/Cluster/KasirQu/src/index.css'
// import './Components/Cluster/PrestasiQu/src/index.css'

import App from './App'
import Store from './Store/Store'

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// )

const app = (
  <Provider store={Store} >
    <App />
  </Provider>
)

ReactDOM.render(app, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()