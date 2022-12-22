import {ThemeProvider} from "styled-components";


const theme = {
    colors: {
        mainBlue: "rgb(53 164 220)",
        mainDark: "rgb(0,0,2)",
        mainGray: "rgb(245 245 245)",
        bgColor: '#f4f5fb',
        textColor: 'linear-gradient(0deg,#E5E5E5 0%,#fff 100%)'
    },
    fonts: {
        default: "'Roboto', sans-serif",
        primary: "'Sora', sans-serif"
    },
    fontSizes: {
        small: "1em",
        medium: "2em",
        large: "3em"
    }
}

const Theme = ({children}) => (
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
