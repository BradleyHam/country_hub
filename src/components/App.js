import React from 'react'
import Header from './Header/Header'
import {
    HashRouter as Router,
    Route,
    Switch
  } from "react-router-dom";
import CardGrid from './CardGrid'
import CurrentCountry from './CurrentCountry/CurrentCountry'
import { connect } from 'react-redux'

const App = (props) => {
    return (
        <Router>
            <Header />
            <Switch>
            <Route path='/country/:id' component={CurrentCountry} />
            <Route path='/'  component={CardGrid} />
            </Switch>
            
        </Router>
    );
}

export default connect(state => state)(App);