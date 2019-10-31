let state = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hi', likesCount: 2},
            {id: 2, message: 'How are you?', likesCount: 6},
            {id: 3, message: 'OK?', likesCount: 15}
        ]
    },

    dialogsPage: {
        dialogs: [
            {id: 1, name: 'Ana'},
            {id: 2, name: 'Beatrix'},
            {id: 3, name: 'Zoya'}
        ],

        messages: [
            {id: 1, message: 'Hello'},
            {id: 2, message: 'How is going?'},
            {id: 3, message: 'Fine'}
        ]
    },

    sidebar: {
        friends: [
            {id: 1, name: 'Friend No.1'},
            {id: 2, name: 'Friend No.2'},
            {id: 3, name: 'Friend No.3'}
        ]
    }
};

export let addPost = (postMessage) => {
    let newPost = {
        id: 5,
        message: postMessage,
        likesCount: 0
    };
    state.profilePage.posts.push(newPost);
};

export default state;