import { render } from 'react-dom'
import React from 'react'
import App from './components/App'
import './style/index.scss'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import reducers from './redux/reducers'
import { composeWithDevTools } from 'redux-devtools-extension'

const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)))

render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'))