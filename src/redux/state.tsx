export type DialogData = {
    id: number
    name: string
}
export type DialogsPageType = {
    dialogDataType: Array<DialogData>
    messageDataType: Array<MessageData>
}
export type MessageData = {
    message: string
    id: number
}
export type PostType = {
    message : string
    likesCount: number
    id: number
}
export type ProfilePageType = {
    posts: Array<PostType>
}

export type StatePropsType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
}
export const state: StatePropsType = {
    profilePage: {
        posts: [
            {message: "Hi, samurai!", likesCount: 5},
            {message: "I am an incubator student.", likesCount: 7}
        ]
    },
    dialogsPage: {
        dialogDataType: [
            {id: 1, name: "Peter Quill",},
            {id: 2, name: "Gamora"},
            {id: 3, name: "Groot"},
            {id: 4, name: "Drax Destroyer"},
            {id: 5, name: "Raccoon Rocket"}
        ],
        messageDataType: [
            {id: 1, message: "It's generally a masterpiece of abstract art!" },
            {id: 2, message: "Yes, Quil. On the ship is a pigsty."},
            {id: 3, message: "I am Groot!"},
            {id: 4, message: "I'm going to drink"},
            {id: 5, message: "So, who is here for the first time in space?"}
        ]
    }

}

