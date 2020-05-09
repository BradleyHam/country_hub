import variables from './variables.scss'

export const toggledStyles = (props) => {
    return {
        background: props.darkMode ? variables.darkBlue : variables.white,
        color: props.darkMode ? variables.white : variables.darkBlue
    }
}
export const toggledStylesTwo = (props) => {
    return {
        background: props.darkMode ? variables.veryDarkBlue : variables.veryLightGray,
        color: props.darkMode ? variables.veryLightGray : variables.veryDarkBlue
    }
}