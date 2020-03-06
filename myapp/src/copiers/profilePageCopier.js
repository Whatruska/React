let profilePageCopier = (state) => {
    let stateCopy = {...state};
    stateCopy.isFetching = state.isFetching;
    stateCopy.currentProfile = {...state.currentProfile};
    return stateCopy;
};

export default profilePageCopier;