import React from "react";
import s from "./MyPosts.module.css"
import {Post} from "./post/Post";


export function MyPosts() {
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
                   <Post message={"Hi, samurai!"} likesCount={5}/>
                   <Post message={"I am an incubator student."} likesCount={7}/>
                </div>
            </div>
    )
}