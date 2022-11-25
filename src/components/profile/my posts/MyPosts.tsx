import React from "react";
import s from "./MyPosts.module.css"
import {Post} from "./post/Post";


export function MyPosts() {
    const messageDate = [
        {id: 1, message: "Hi, samurai!", likesCount: 5},
        {id: 2, message: "I am an incubator student.", likesCount: 7}
    ]
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
                   <Post messageDate={messageDate}/>
                </div>
            </div>
    )
}