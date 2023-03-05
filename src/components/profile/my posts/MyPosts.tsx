import React, {ChangeEvent} from "react";
import s from "./MyPosts.module.css"
import {Post} from "./post/Post";
import {ActionsTypes, AddPostAC, ChangeNewPostTextAC, ProfilePageType} from "../../../redux/state";
import {text} from "stream/consumers";

type MyPostsType = {
    state: ProfilePageType
    // posts: Array<PostType>
    // addPost: (addNewPost: string) => void
    dispatch: (action: ActionsTypes) => void
    // changeNewPostText: (newText: string)=> void
}

export function MyPosts(props: MyPostsType) {
    const newPostElements = React.createRef<HTMLTextAreaElement>()
    const addPost = () => {
        props.dispatch({type: "ADD-POST", addNewPost: props.state.newPostText})
       /* if (newPostElements.current) {
            props.dispatch(<AddPostAC></AddPostAC>)
            props.changeNewPostText('')
            // props.addPost(newPostElements.current.value)
            // newPostElements.current.value = ''
        }*/
    }
    const onPostChange = () => {
        if (newPostElements.current) {
            const text = newPostElements.current.value
            props.dispatch({type: "CHANGE-NEW-POST-TEXT", newText: text})
        }
    }
    return (
        <div className={s.item}>
            My Post
            <div>
                <textarea onChange={onPostChange} ref={newPostElements}></textarea>
                <button onClick={addPost}>add</button>
            </div>
            <div>
                <Post messages={props.state.posts}/>
            </div>
        </div>
    )
}