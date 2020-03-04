import Misha_ava from "../img/Misha.jpg";
import Anya_ava from "../img/Anya.jpg";
import Zeka_ava from "../img/Zeka.jpg";
import My_avatar from "../img/ava.jpeg";
import profile_header from "../img/profile-header.jpeg";
import posts from "./posts";

let getPostsByID = (id) => {
    for (let i = 0; i < posts.length; i++){
        if (posts[i].userId === id){
            return posts[i].p;
        }
    }
};

let Me = {
    id : 1,
    login : "Whatruska",
    date : "03.03.2002",
    city : "Omsk",
    phone : "+79136560423",
    vk : "vk.com/vitdub",
    avatar : My_avatar,
    header: profile_header,
    posts : getPostsByID(1)
};

let Anya = {
    id : 2,
    login : "Anya",
    date : "04.05.2001",
    city : "Omsk",
    phone : "+79146578354",
    vk : "vk.com/annya",
    avatar : Anya_ava,
    header : profile_header,
    posts : getPostsByID(2),
    followed : false
};

let Zeka = {
    id : 4,
    login : "Zeka",
    date : "25.04.1996",
    city : "Omsk",
    phone : "+79146578354",
    vk : "vk.com/zeka",
    avatar : Zeka_ava,
    header : profile_header,
    posts : getPostsByID(4),
    followed : true
};

let Misha = {
    id : 3,
    login : "Misha",
    date : "28.31.2001",
    city : "Omsk",
    phone : "+79146578354",
    vk : "vk.com/Misha",
    avatar : Misha_ava,
    header : profile_header,
    posts : getPostsByID(3),
    followed : false
};

let friends = [
    {
        name : "Misha",
        avatar : Misha_ava
    },
    {
        name : "Anya",
        avatar : Anya_ava
    },
    {
        name : "Zeka",
        avatar : Zeka_ava
    }
];

let users = [
    {
        id: 1,
        name : "Misha"
    },
    {
        id: 2,
        name : "Anya"
    },
    {
        id: 3,
        name : "Evgenii"
    },
    {
        id: 4,
        name : "Azat"
    },
    {
        id: 5,
        name : "Arino"
    }
];

export {users, friends, Me, Misha, Zeka, Anya};