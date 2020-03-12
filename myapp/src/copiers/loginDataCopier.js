let loginDataCopier = (state) => {
    let stateCopy = {...state};
    stateCopy.userId = state.userId;
    stateCopy.email = state.email;
    stateCopy.isLogged = state.isLogged;
    stateCopy.isFetching = state.isFetching;
    return stateCopy;
};

export default loginDataCopier;