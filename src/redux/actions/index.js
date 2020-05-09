import axios from 'axios'

export const toggleDarkMode = () => {
    return {
        type: 'TOGGLE_DARK_MODE'
    }
}

export const selectRegion = (region) => {
    return {
        type: 'SELECT_REGION',
        payload: region
    }
}

export const getData = () => async (dispatch) => {
    const response = await fetch('https://restcountries.eu/rest/v2/all');
    const data = await response.json();
    dispatch({
        type: 'COUNTRYS',
        payload: data
    })
}

export const searchCountry = (searchValue) => async (dispatch, getState) => {
    const response = await fetch(`https://restcountries.eu/rest/v2/name/${searchValue}`);
    const data = await response.json();


    function filterData() {
        if (getState().currentRegion !== "All Regions" && data.length > 1) {
            return data.filter(country => country.region === getState().currentRegion)
        }
        return data;
    }

    dispatch({
        type: 'COUNTRYS',
        payload: filterData()
    })
}


export const updateCurrentCountry = (id) => async (dispatch) => {
    const data = await axios.get(`https://restcountries.eu/rest/v2/alpha/${id}`);
    dispatch({
        type: 'CURRENT_COUNTRY',
        payload: data.data
    })
}
export const setCurrentCountry = (current) => {
    return {
        type: 'CURRENT_COUNTRY',
        payload: current
    }
}

