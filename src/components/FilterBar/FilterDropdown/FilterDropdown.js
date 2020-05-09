import React, { useState } from 'react';
import classes from './FilterDropdown.module.scss'
import { connect } from 'react-redux'
import { selectRegion, getData } from '../../../redux/actions/index'
import { toggledStyles, toggledStylesTwo } from '../../../style/toggleStyle'
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const FilterDropdown = (props) => {
    const [dropdownOpen, toggleDropdownOpen] = useState(false);

    const regions = ['All Regions', 'Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];

    const handleRegionSelect = (region) => {
        props.getData()
        props.selectRegion(region)

        toggleDropdown()
    }
    const toggleDropdown = () => {
        toggleDropdownOpen(!dropdownOpen)
    }

    return (
        <div className={classes.filterDropdown}>
            <div style={toggledStyles(props)} className={classes.current} onClick={toggleDropdown}>{props.currentRegion}
                {dropdownOpen ? <FontAwesomeIcon icon={faChevronUp} /> : <FontAwesomeIcon icon={faChevronDown} />}
            </div>
            {dropdownOpen && <ul style={toggledStyles(props)} className={classes.dropdownList}>
                {regions.map(region => <li onClick={() => { handleRegionSelect(region) }} className={classes.dropdownItem}>{region}</li>)}
            </ul>}
        </div>
    );
}

export default connect(state => state, { selectRegion, getData })(FilterDropdown);