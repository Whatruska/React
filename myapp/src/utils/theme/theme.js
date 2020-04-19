import createMuiTheme from "@material-ui/core/styles/createMuiTheme";

let theme = createMuiTheme({
    palette : {
        primary : {
            main : "#313186",
            light : "#a2a2e2"
        },
        error : {
            main : "#ff5f57",
            light : "#ff938c"
        }
    }
});

export default theme;