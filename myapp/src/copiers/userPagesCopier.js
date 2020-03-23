let getUserPagesCopy = (state) => {
    let stateCopy = {...state};
    stateCopy.myPostsCount++;
    for (let i = 0; i < stateCopy.users.length; i++){
        stateCopy.users[i] = {...state.users[i]};
        stateCopy.users[i].id = state.users[i].id;
        stateCopy.users[i].login = state.users[i].login;
        stateCopy.users[i].date = state.users[i].date;
        stateCopy.users[i].city = state.users[i].city;
        stateCopy.users[i].phone = state.users[i].phone;
        stateCopy.users[i].vk = state.users[i].vk;
        stateCopy.users[i].avatar = state.users[i].avatar;
        stateCopy.users[i].header = state.users[i].header;
        stateCopy.users[i].posts = [...state.users[i].posts];
    }

    return stateCopy;
};

export default getUserPagesCopy;