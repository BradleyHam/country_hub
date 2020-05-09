import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import classes from './CurrentCountry.module.scss'
import axios from 'axios'
import { connect } from 'react-redux'
import { updateCurrentCountry } from '../../redux/actions/index'
import { toggledStylesTwo } from '../../style/toggleStyle'
import CurrentCountryUi from './CurrentyCountryUi'

const CurrentCountry = (props) => {


    let { id } = useParams()

    useEffect(() => {
        props.updateCurrentCountry(id)
    }, [])

    useEffect(() => {
        props.updateCurrentCountry(id)
    }, [id])



    return (
        <div style={toggledStylesTwo(props)} className={classes.currentCountry}>
            {props.currentCountry && <CurrentCountryUi />}

        </div>
    );
}

export default connect(state => state, { updateCurrentCountry })(CurrentCountry);