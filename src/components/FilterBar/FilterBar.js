import React, { useState } from 'react'
import classes from './FilterBar.module.scss'
import { toggledStyles, toggledStylesTwo } from '../../style/toggleStyle'
import { connect } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import FilterDropdown from './FilterDropdown/FilterDropdown'
import { searchCountry, getData } from '../../redux/actions/index'


const FilterBar = (props) => {
    const [searchFormValue, setSearchFormValue] = useState('');

    function handleInputChange(e) {
        setSearchFormValue(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        { searchFormValue.length > 0 ? props.searchCountry(searchFormValue) : props.getData() }
        setSearchFormValue('');
    }


    return (
        <div style={toggledStylesTwo(props)} className={classes.filterBar}>
            <form onSubmit={handleSubmit} style={toggledStyles(props)} className={classes.search}>
                <input value={searchFormValue} type="text" placeholder='Search for a Country: '
                    onChange={(e) => { (handleInputChange(e)) }}
                />
                <button type='submit' className={classes.searchIcon}>
                    <FontAwesomeIcon icon={faSearch} />
                </button>
            </form>
            <div className={classes.countryFilter}>
                <FilterDropdown />
            </div>
        </div>
    );
}

export default connect(state => state, { searchCountry, getData })(FilterBar);




