const INIT_FINISHED = "INIT_FINISH"

const initialState = {
    isInitialized : false
};

const initialReducer = (state = initialState, action) => {
    let stateCopy = {...state};
    switch (action.type) {
        case INIT_FINISHED : {
            stateCopy.isInitialized = true;
            return stateCopy;
        }
        default : {
            return stateCopy;
        }
    }
}

let initFinishActionCreator = () => {
    return {
        type : INIT_FINISHED
    }
};
export default initialReducer;
export {initFinishActionCreator}
