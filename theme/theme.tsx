import {
    MD3DarkTheme,
    MD3LightTheme
} from 'react-native-paper';

//show the light theme
export const lightTheme = {
    ...MD3LightTheme,
    colors: {
        ...MD3LightTheme,
        primary: "#E21B70",
        background: "#FEFEFE",
        surface: "#000" 
    }
}

// show the dark theme
export const darkTheme = {
    ...MD3DarkTheme,
    colors: {
        ...MD3DarkTheme,
        primary: "#E21B70",
        background: "#121212",
         surface: "#fff" 
    }
}