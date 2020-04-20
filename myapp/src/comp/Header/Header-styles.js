import {makeStyles} from "@material-ui/styles";

let styles = makeStyles(theme => ({
    Header : {
        background: "linear-gradient(49deg," + theme.palette.primary.main + " 26%, " + theme.palette.primary.light + " 89%)",
        color : 'white',
    },

    logo : {
        width: "7em",
        height : "7em",
        [theme.breakpoints.down("xs")] : {
            width: "3rem",
        },
    },

    logo_btn : {
        "&:hover" : {
            backgroundColor : "transparent"
        }
    },

    heading : {
        fontSize: "2.5rem",
        [theme.breakpoints.down("lg")] : {
            fontSize: "1.5rem",
        },
        [theme.breakpoints.down("xs")] : {
            fontSize: "1rem",
        },
        color : "white",
        fontWeight : "bold"
    },

    tabs : {
        marginLeft : "auto",
    },

    tab : {
        padding : "0px 0px",
        fontSize : "1rem",
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
        [theme.breakpoints.down("xs")] : {
            fontSize: "0.7rem",
        },
        "&:hover" : {
            backgroundColor : theme.palette.error.light
        }
    },

    logout_wrapper : {
        marginLeft : "auto",
        display : "flex",
        flexDirection : "column",
        justifyContent : "center",
        fontSize : "0.7em",
        [theme.breakpoints.down("lg")] : {
            marginLeft : "0px"
        }
    },

    email : {
        marginBottom : "0.5em"
    },

    drawer_btn : {
        marginLeft : "auto",
        color : "white"
    }
}));

export default styles;