export type DialogData = {
    id: number
    name: string
}
export type DialogsPageType = {
    dialogData: DialogData
    messageData: MessageData
}
export type MessageData = {
    message: string
}
export type StatePropsType = {
    dialogsPage: DialogsPageType
}
export const state: StatePropsType = {

    dialogsPage: {
        dialogData: [
            {id: 1, name: "Peter Quill",},
            {id: 2, name: "Gamora"},
            {id: 3, name: "Groot"},
            {id: 4, name: "Drax Destroyer"},
            {id: 5, name: "Raccoon Rocket"}
        ],
        messageData: [
            {message: "It's generally a masterpiece of abstract art!" },
            {message: "Yes, Quil. On the ship is a pigsty."},
            {message: "I am Groot!"},
            {message: "I'm going to drink"},
            {message: "So, who is here for the first time in space?"}
        ]
    }

}

