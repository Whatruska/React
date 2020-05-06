const INIT_FINISHED = "INIT_FINISH"

const initialState = {
    isInitialized : false
};

interface Action {
    type : typeof INIT_FINISHED
}

const initialReducer = (state : typeof initialState = initialState, action: Action) => {
    let stateCopy = {...state};
    if (typeof action.type) {
        stateCopy.isInitialized = true;
        return stateCopy;
    } else {
        return stateCopy;
    }
}

let initFinishActionCreator = () : Action => {
    return {
        type : INIT_FINISHED
    }
};
export default initialReducer;
export {initFinishActionCreator}
