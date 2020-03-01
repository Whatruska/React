let getDeepMessagesPageCopy = (state) => {
    let stateCopy = {...state};
    stateCopy.users = [...state.users];
    for (let i = 0; i < state.users.length; i++){
        stateCopy.users[i] = {...state.users[i]};
        stateCopy.users[i].id = state.users[i].id;
        stateCopy.users[i].name = state.users[i].name;
    }
    stateCopy.messages = [...state.messages];
    for (let i = 0; i < state.messages.length; i++){
        stateCopy.messages[i] = {...state.messages[i]};
        stateCopy.messages[i].dialog = [...state.messages[i].dialog];
        stateCopy.messages[i].userId = state.messages[i].userId;
    }
    return stateCopy;
};

export default getDeepMessagesPageCopy;