import React from "react";
import s from "./MyPosts.module.css"
import {Post} from "./post/Post";
import {PostType} from "../../../redux/state";

type MyPostsType = {
    posts: Array<PostType>
}
export function MyPosts(props: MyPostsType) {
    return (
            <div className={s.item}>
                My Post
                <div>
                    <textarea></textarea>
                    <div>
                        <button>add</button>
                    </div>
                </div>
                <div>
                   <Post messages={props.posts}/>
                </div>
            </div>
    )
}