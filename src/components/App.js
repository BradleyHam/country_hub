import React from 'react'
import Header from './Header/Header'

import CardGrid from './CardGrid'
import CurrentCountry from './CurrentCountry/CurrentCountry'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'

const App = (props) => {
    return (
        <Router>
            <Header />

            <Route path='/' exact component={CardGrid} />
            <Route path='/country/:id' component={CurrentCountry} />
        </Router>
    );
}

export default connect(state => state)(App);