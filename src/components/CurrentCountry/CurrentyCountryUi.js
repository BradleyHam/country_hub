import React from 'react';
import classes from './CurrentCountry.module.scss'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { toggledStyles } from '../../style/toggleStyle'

const CurrentCountryUi = (props) => {

    let { name, flag, nativeName, population, region,
        subregion, capital, borders,
        currencies, languages } = props.currentCountry;

    function renderBorders() {
        if (borders) {
            return borders.map(border =>
                <Link to={`${border}`}>
                    <button
                        style={toggledStyles(props)}
                        className={classes.button}>{border} </button>
                </Link>
            )
        }
    }

    function renderLanguages() {
        if (languages) {
            return languages.map(language => <span className={classes.language}>{language.name}</span>)
        }
    }

    return (

        <div className='container'>
            <div className={classes.header}>
                <Link to='/'>
                    <button style={toggledStyles(props)} className={`${classes.button} ${classes.backButton}`}>Back</button>
                </Link>
            </div>
            <div className={classes.countryGrid}>
                <img src={flag} alt="" />
                <h1>{name}</h1>
                <ul>
                    <li>
                        <span className={classes.listTitle}>Native Name:</span>
                        <span className={classes.listValue}>{nativeName}</span>
                    </li>
                    <li>
                        <span className={classes.listTitle}>Population:</span>
                        <span className={classes.listValue}>{new Intl.NumberFormat().format(population)}</span>
                    </li>
                    <li>
                        <span className={classes.listTitle}>Region:</span>
                        <span className={classes.listValue}>{region}</span>
                    </li>
                    <li>
                        <span className={classes.listTitle}>Sub Region:</span>
                        <span className={classes.listValue}>{subregion}</span>
                    </li>
                    <li>
                        <span className={classes.listTitle}>Capital:</span>
                        <span className={classes.listValue}>{capital}</span>
                    </li>
                    <li>
                        <span className={classes.listTitle}>Currency:</span>
                        <span className={classes.listValue}>{currencies && currencies[0].name}</span>
                    </li>
                    <li>
                        <span className={classes.listTitle}>Languages:</span>
                        <span className={classes.listValue}>{renderLanguages()}</span>
                    </li>
                </ul>

                <div className={classes.borderCountries}>
                    <p>Border Countries:</p>
                    {borders.length > 1 ? renderBorders() : 'None'}
                </div>
            </div>
        </div>


    );
}

export default connect(state => state)(CurrentCountryUi);