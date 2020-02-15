import profile_header from './img/profile-header.jpeg';
import avatar from './img/ava.jpeg';

import Misha_ava from './img/Misha.jpg';
import Anya_ava from './img/Anya.jpg';
import Zeka_ava from './img/Zeka.jpg';

let userInform = {
    login : "Whatruska",
    date : "03.03.2002",
    city : "Omsk",
    phone : "+79136560423",
    vk : "vk.com/vitdub",
};

let Anya = {
    login : "Anya",
    date : "04.05.2001",
    city : "Omsk",
    phone : "+79146578354",
    vk : "vk.com/annya",
    avatar : Anya_ava,
    header : profile_header
};

let Zeka = {
    login : "Zeka",
    date : "01.03.2001",
    city : "Omsk",
    phone : "+79146578354",
    vk : "vk.com/zeka",
    avatar : Zeka_ava,
    header : profile_header
};

let Misha = {
    login : "Misha",
    date : "28.31.2001",
    city : "Omsk",
    phone : "+79146578354",
    vk : "vk.com/Misha",
    avatar : Misha_ava,
    header : profile_header
};

let posts = [
    {
        text :"Hi, wassup?",
        likes : 45
    },
    {
        text: "How are you?",
        likes: 24
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

let messages = [
    {
        text : "Hi",
        author : "Me"
    },
    {
        text : "How are you?",
        author : "Misha"
    },
    {
        text : "I`m gonna hang out",
        author : "Me"
    }
];

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

let state = {
    profilePage : {
        userInform : userInform,
        posts : posts,
        avatar : avatar,
        profile_header : profile_header
    },
    messagesPage : {
        users : users,
        messages : messages
    },
    friendInfo : friends,
    userPages : [
        Anya, Zeka, Misha
    ]
}

export default state;