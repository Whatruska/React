let SET_USER_ID = "LOGIN_ID";
let SET_EMAIL = "SET_EMAIL";
let LOG_IN = "LOG_IN";
let LOG_OUT = "LOG_OUT";

let initialState = {
    userId : 1,
    email : "test@email",
    isLogged : false
};

let loginReducer = (state = initialState, action) => {
    let stateCopy = {...state};
    switch (action.type) {
        case SET_USER_ID : {
            stateCopy.userId = action.id;
            break;
        }

        case SET_EMAIL : {
            stateCopy.email = action.email;
            break;
        }

        case LOG_IN : {
            stateCopy.isLogged = true;
            break;
        }

        case LOG_OUT : {
            stateCopy.isLogged = false;
            break;
        }

        default : {
            return stateCopy;
        }
    }
    return stateCopy;
};

let setUserIdActionCreator = (id) => {
    return({
        type : SET_USER_ID,
        id : id
    });
};

let setEmailActionCreator = (email) => {
    return({
        type : SET_USER_ID,
        email : email
    });
};

let loginActionCreator = () => {
    return({
        type : LOG_IN
    });
};

let logoutActionCreator = () => {
    return({
        type : LOG_OUT
    });
};

export {setUserIdActionCreator, setEmailActionCreator, loginActionCreator, logoutActionCreator}

export default loginReducer;