import React from 'react'
import classes from './Header.module.scss'
import { faMoon as regularMoon } from '@fortawesome/free-regular-svg-icons'
import { faMoon as solidMoon } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { connect } from 'react-redux'
import { toggleDarkMode } from '../../redux/actions/index'
import { toggledStyles } from '../../style/toggleStyle'

const Header = (props) => {

    return (
        <header style={toggledStyles(props)} className={classes.header}>
            <h1>Country Hub</h1>
            <div className={classes.toggleDarkMode} onClick={props.toggleDarkMode}>
                {props.darkMode ? <FontAwesomeIcon icon={solidMoon} /> : <FontAwesomeIcon icon={regularMoon} />}
                <h6>Dark Mode</h6> </div>
        </header>
    );
}

const mapStateToProps = (state) => {
    return {
        darkMode: state.darkMode
    }
}

export default connect(mapStateToProps, { toggleDarkMode })(Header);