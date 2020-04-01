import authAPI from "../DAL/Auth/authAPI";

let SET_USER_ID = "LOGIN_ID";
let SET_EMAIL = "SET_EMAIL";
let LOG_IN = "LOG_IN";
let LOG_OUT = "LOG_OUT";
let SET_ERROR_MSG = "ERROR";
let FETCH = "FETCH";
let SET_USER_DATA = "SET_DATA";

let initialState = {
    userId : 1,
    email : "test@email",
    isLogged : false,
    isFetching : false,
    errorMessage : undefined
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

        case FETCH : {
            stateCopy.isFetching = !stateCopy.isFetching;
            break;
        }

        case SET_ERROR_MSG : {
            stateCopy.errorMessage = [action.errorMessage];
            break;
        }

        case SET_USER_DATA : {
            let data = action.data;
            stateCopy.email = data.email;
            stateCopy.userId = data.userId;
            stateCopy.isLogged = true;
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
        type : SET_EMAIL,
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

let toggleFetchActionCreator = () => {
    return({
        type : FETCH
    });
};

let setErrorMessageActionCreator = (error) => {
    return({
        type : SET_ERROR_MSG,
        errorMessage : error
    });
};

let setUserDataActionCreator = (data) => {
    return({
        type : SET_USER_DATA,
        data : data
    })
};

let authThunkCreator = () => {
     return (dispatch) => {
         authAPI.getAuthRequest().then(
             (data) => {
                 if (data.resultCode === 0) {
                     dispatch(setUserDataActionCreator(data.data));
                 }
             }
         );
     }
};

let logoutThunkCreator = () => {
    return (dispatch) => {
        authAPI.getLogoutRequest().then((data) => {
            dispatch(logoutActionCreator());
        });
    }
};

let loginThunkCreator = (email, pass, remember) => {
    return (dispatch) => {
        dispatch(toggleFetchActionCreator());
        authAPI.getLoginRequest(email,pass, remember).then((data) => {
            if (data.resultCode === 0){
                dispatch(setEmailActionCreator(email));
                dispatch(setUserIdActionCreator(data.data.userId));
                dispatch(loginActionCreator());
            } else {
                dispatch(setErrorMessageActionCreator("Неверно введены email/пароль"));
            }
            dispatch(toggleFetchActionCreator());
        });
    }
}

export {setUserIdActionCreator, setEmailActionCreator, loginActionCreator, logoutActionCreator, toggleFetchActionCreator, setErrorMessageActionCreator, setUserDataActionCreator, authThunkCreator, logoutThunkCreator, loginThunkCreator}

export default loginReducer;