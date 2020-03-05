let userListCopier = (state) => {
    let stateCopy = {...state};
    stateCopy.users = [...state.users];
    for (let i = 0; i < stateCopy.length; i++){
        stateCopy.users[i] = {...state.users[i]};
    }
    return stateCopy;
};

export default userListCopier;