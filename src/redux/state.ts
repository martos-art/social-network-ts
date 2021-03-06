export type DialogsType = {
    id: number,
    name: string
}
export type MessagesType = {
    id: number,
    message: string
}
export type PostsType = {
    id: number,
    message: string,
    likesCount: number
}
export type ProfilePageType = {
    posts: Array<PostsType>
}
export type DialogsPageType = {
    dialogs: Array<DialogsType>,
    messages: Array<MessagesType>
}

export type RootStateType = {
    profilePage: ProfilePageType,
    dialogsPage: DialogsPageType
}

export let state: RootStateType = {

    profilePage: {
        posts: [
            { id: 1, message: 'where is my mind?', likesCount: 764 },
            { id: 2, message: 'wheeeeere is my mind?', likesCount: 1921 },
            { id: 3, message: 'where is my mind?', likesCount: 1337 },
            { id: 4, message: 'wheeeeere is myyyyyyyyyyyyy miiiiiiiiiiiiind?', likesCount: 10000000 }
        ]
    },

    dialogsPage: {
        dialogs: [
            { id: 1, name: 'Annusshka' },
            { id: 2, name: 'Dimych' },
            { id: 3, name: 'Jeka' },
            { id: 4, name: 'Valeriy' },
            { id: 5, name: 'VaelriyJr' }
        ],
        messages: [
            { id: 1, message: 'Hellllooooooo!How are you, Govnocoder????' },
            { id: 2, message: 'welcome to programming hell' },
            { id: 3, message: 'Hellllooooooo! Пастрыжыся' },
            { id: 4, message: 'мама мийа, вот это говнокодер' },
            { id: 5, message: 'hellllll' }
        ]
    }
}

export default state;