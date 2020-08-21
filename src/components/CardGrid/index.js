import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import classes from './CardGrid.module.scss'
import Card from './Card/index'
import { toggledStylesTwo } from '../../style/toggleStyle'
import { getData } from '../../redux/actions/index'
import FilterBar from '../../components/FilterBar/FilterBar'


const CardGrid = (props) => {


    useEffect(() => {
        props.getData()
    })


    const renderCountrys = () => {
        if (props.currentRegion !== 'All Regions') {
            let filteredCountrys = props.countrys.filter(country => country.region === props.currentRegion);

            if (filteredCountrys.length < 1) {
                return (<h1>Nothing Found</h1>)
            }

            return filteredCountrys.map(country =>
                <Link key={country.alpha3Code} to={`/country/${country.alpha3Code}`}>
                    <Card country={country}>{country.name}</Card>
                </Link>)
        }
        return props.countrys.map(country =>
            <Link key={country.alpha3Code} to={`/country/${country.alpha3Code}`}>
                <Card  country={country}>{country.name}</Card>
            </Link>)
    }



    return (
        <div>
            <FilterBar />
            <div style={toggledStylesTwo(props)} className={classes.grid}>
                {props.countrys && props.countrys.length > 0 && renderCountrys()}
                {props.countrys && props.countrys.length < 1 && <h1>Nothing Found</h1>}
                {props.countrys && props.countrys.status === 404 && <h1>Nothing Found</h1>}


            </div>
        </div>

    );
}

export default connect(state => state, { getData })(CardGrid);

