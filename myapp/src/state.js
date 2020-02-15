import profile_header from './img/profile-header.jpeg';
import avatar from './img/ava.jpeg';

import Misha from './img/Misha.jpg';
import Anya from './img/Anya.jpg';
import Zeka from './img/Zeka.jpg';

let userInform = {
    login : "Whatruska",
    date : "03.03.2002",
    city : "Omsk",
    phone : "+79136560423",
    vk : "vk.com/vitdub",
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
        avatar : Misha
    },
    {
        name : "Anya",
        avatar : Anya
    },
    {
        name : "Zeka",
        avatar : Zeka
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
    friendInfo : friends
}

export default state;