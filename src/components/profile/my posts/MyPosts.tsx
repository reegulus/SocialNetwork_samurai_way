import React from "react";
import s from "./MyPosts.module.css"
import {Post} from "./post/Post";
import {PostType} from "../../../redux/state";

type MyPostsType = {
    posts: Array<PostType>
}
export function MyPosts(props: MyPostsType) {
const newPostElements = React.createRef<HTMLTextAreaElement>()
    const addPost = () => {
        const text = newPostElements.current?.value
        alert(text)
    }
    return (
            <div className={s.item}>
                My Post
                <div>
                    <textarea ref={newPostElements}></textarea>
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