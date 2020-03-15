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
        for (let j = 0; j < state.users[i].posts; j++){
            stateCopy.users[i].posts[j] = {...state.users[i].posts[j]};
            stateCopy.users[i].posts[j].userId = state.users[i].posts[j].userId;
            stateCopy.users[i].posts[j].p = [...state.users[i].posts[j].p];
            for (let k = 0; k < state.users[i].posts[j].p.length; k++){
                stateCopy.users[i].posts[j].p[k] = {...state.users[i].posts[j].p[k]};
                stateCopy.users[i].posts[j].p[k].text = state.users[i].posts[j].p[k].text;
                stateCopy.users[i].posts[j].p[k].likes = state.users[i].posts[j].p[k].likes;
            }
        }
    }

    return stateCopy;
};

export default getUserPagesCopy;