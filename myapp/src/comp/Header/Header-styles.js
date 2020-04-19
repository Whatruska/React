import {makeStyles} from "@material-ui/styles";

let styles = makeStyles(theme => ({
    Header : {
        background: "linear-gradient(49deg," + theme.palette.primary.main + " 26%, " + theme.palette.primary.light + " 89%)",
        color : 'white',
    },

    logo : {
        width: "7em",
        height : "7em"
    },

    logo_btn : {
        "&:hover" : {
            backgroundColor : "transparent"
        }
    },

    heading : {
        fontSize: "2.5rem",
        color : "white",
        fontWeight : "bold"
    },

    tabs : {
      marginLeft : "auto"
    },

    spacing : {
        ...theme.mixins.toolbar,
        marginBottom : "5em",
    },

    menu : {
        top : "8em"
    },

    menuList : {
        backgroundColor : theme.palette.primary.light,
        color : "white",
        fontWeight : "bold"
    },

    logout : {
        backgroundColor : theme.palette.error.main,
        color : "white",
        fontWeight : "bold",
        "&:hover" : {
            backgroundColor : theme.palette.error.light
        }
    },

    logout_wrapper : {
        display : "flex",
        flexDirection : "column",
        justifyContent : "center"
    },

    email : {
        marginBottom : "0.5em"
    }
}));

export default styles;