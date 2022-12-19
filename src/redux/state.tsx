import {rerenderEntireTree} from "../index";
// rerenderEntireTree(_state: RootStateType) {
//     console.log('State changed')
// },

export type DialogType = {
    id: number
    name: string
}
export type MessageType = {
    message: string
    id: number
}
export type PostType = {
    message: string
    likesCount: number
    id: number
}
export type ProfilePageType = {
    posts: Array<PostType>
    newPostText: string
}
export type DialogsPageType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
}
export  type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
}
export type StoreType = {
    _state: RootStateType
    _addPost: (addNewPost: string)=> void
    _onChange: ()=> void
    _changeNewPostText: (newText: string)=> void
    subscribe: (observer: ()=> void)=> void
    getState: ()=> RootStateType
    dispatch: (action: ActionsTypes) => void
}

export type ActionsTypes = AddPostAC | ChangeNewPostTextAC
export type AddPostAC = {
    type: 'ADD-POST'
    addNewPost: string
}
export type ChangeNewPostTextAC = {
    type: 'CHANGE-NEW-POST-TEXT'
    newText: string
}

export const store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: "Hi, samurai!", likesCount: 5},
                {id: 2, message: "I am an incubator student.", likesCount: 7}
            ],
            newPostText: '',
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: "Peter Quill",},
                {id: 2, name: "Gamora"},
                {id: 3, name: "Groot"},
                {id: 4, name: "Drax Destroyer"},
                {id: 5, name: "Raccoon Rocket"}
            ],
            messages: [
                {id: 1, message: "It's generally a masterpiece of abstract art!"},
                {id: 2, message: "Yes, Quil. On the ship is a pigsty."},
                {id: 3, message: "I am Groot!"},
                {id: 4, message: "I'm going to drink"},
                {id: 5, message: "So, who is here for the first time in space?"}
            ]
        }
    },

    subscribe (observer: ()=> void) {
        this._onChange = observer
    },

    _onChange() {},
    getState() {
        return this._state
    },

_addPost(addNewPost: string) {
    const newPost: PostType = {
        id: 5,
        message: this._state.profilePage.newPostText,
        likesCount: 0
    }
    this._state.profilePage.posts.push(newPost)
    this._state.profilePage.newPostText = ''
    rerenderEntireTree()
},
    _changeNewPostText(newText: string) {
    this._state.profilePage.newPostText = newText
    this._onChange()
},

    dispatch(action) {
        if (action.type === 'ADD-POST') {
            this._addPost(action.addNewPost)
        } else if (action.type === 'CHANGE-NEW-POST-TEXT') {
            this._changeNewPostText(action.newText)
        }
    }
}





