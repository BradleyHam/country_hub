import React, { Component } from 'react'
import classes from './Cards.module.scss'
import { toggledStyles } from '../../../style/toggleStyle'
import { connect } from 'react-redux'
import { setCurrentCountry } from '../../../redux/actions/index'

const Card = (props) => {
    const { name, flag, population, region, capital } = props.country

    return (
        <div className={classes.card} style={toggledStyles(props)} onClick={() => { props.setCurrentCountry(props.country) }}>
            <img className={classes.flag} src={flag} alt="" />
            <div className={classes.details}>
                <h3>{name}</h3>
                <p><strong>population:</strong><span>{new Intl.NumberFormat().format(population)}</span></p>
                <p><strong>region:</strong><span>{region}</span></p>
                <p><strong>capital:</strong><span>{capital}</span></p>
            </div>
        </div>
    );
}

export default connect(state => state, { setCurrentCountry })(Card);