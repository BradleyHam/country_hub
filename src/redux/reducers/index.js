import { combineReducers } from 'redux'


const darkModeReducer = (state = true, action) => {
    switch (action.type) {
        case 'TOGGLE_DARK_MODE':
            return !state
        default:
            return state
    }
}

const currentRegionReducer = (state = 'All Regions', action) => {
    switch (action.type) {
        case 'SELECT_REGION':
            return action.payload
        default:
            return state
    }
}
const countryReducer = (state = null, action) => {
    switch (action.type) {
        case 'COUNTRYS':
            return action.payload
        default:
            return state
    }
}
const currentCountryReducer = (state = null, action) => {
    switch (action.type) {
        case 'CURRENT_COUNTRY':
            return action.payload
        default:
            return state
    }
}



export default combineReducers({
    darkMode: darkModeReducer,
    currentRegion: currentRegionReducer,
    countrys: countryReducer,
    currentCountry: currentCountryReducer,

})