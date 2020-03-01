let getUserPagesCopy = (state) => {
    let stateCopy = [...state];
    for (let i = 0; i < stateCopy.length; i++){
        stateCopy[i] = {...state[i]};
        stateCopy[i].id = state[i].id;
        stateCopy[i].login = state[i].login;
        stateCopy[i].date = state[i].date;
        stateCopy[i].city = state[i].city;
        stateCopy[i].phone = state[i].phone;
        stateCopy[i].vk = state[i].vk;
        stateCopy[i].avatar = state[i].avatar;
        stateCopy[i].header = state[i].header;
        stateCopy[i].posts = [...state[i].posts];
        for (let j = 0; j < state[i].posts; j++){
            stateCopy[i].posts[j] = {...state[i].posts[j]};
            stateCopy[i].posts[j].userId = state[i].posts[j].userId;
            stateCopy[i].posts[j].p = [...state[i].posts[j].p];
            for (let k = 0; k < state[i].posts[j].p.length; k++){
                stateCopy[i].posts[j].p[k] = {...state[i].posts[j].p[k]}
                stateCopy[i].posts[j].p[k].text = state[i].posts[j].p[k].text;
                stateCopy[i].posts[j].p[k].likes = state[i].posts[j].p[k].likes;
            }
        }
    }

    return stateCopy;
};

export default getUserPagesCopy;