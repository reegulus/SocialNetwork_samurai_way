import React, {ChangeEvent} from "react";
import s from "./MyPosts.module.css"
import {Post} from "./post/Post";
import {ActionsTypes, AddPostAC, ChangeNewPostTextAC, PostType} from "../../../redux/state";

type MyPostsType = {
    posts: Array<PostType>
    addPost: (addNewPost: string) => void
    dispatch: (action: ActionsTypes) => void
    changeNewPostText: (newText: string)=> void
}

export function MyPosts(props: MyPostsType) {
    const newPostElements = React.createRef<HTMLTextAreaElement>()
    const addPost = () => {

        if (newPostElements.current) {
            props.dispatch(AddPostAC())
            props.changeNewPostText('')
            // props.addPost(newPostElements.current.value)
            // newPostElements.current.value = ''
        }
    }
    const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        if(newPostElements.current) {
            const text = newPostElements.current.value
            props.dispatch(ChangeNewPostTextAC(text))
        }
        props.changeNewPostText(e.currentTarget.value)
    }
    return (
        <div className={s.item}>
            My Post
            <div>
                <textarea onChange={onPostChange} ref={newPostElements}></textarea>
                <div>
                    <button onClick={addPost}>add</button>
                </div>
            </div>
            <div>
                <Post messages={props.posts}/>
            </div>
        </div>
    )
}