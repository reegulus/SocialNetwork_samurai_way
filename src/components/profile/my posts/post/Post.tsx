import React from "react";
import s from "./Post.module.css"
import cat_ninja from "../../../../img/cat_ninja_post.png"
import {PostType} from "../../../../redux/state";

export type PostPropsType = {
    messages: Array<PostType>
}

export function Post(props: PostPropsType) {
    const postMap = props.messages.map((m) => {
        return (
            <div key={m.id}>
                <img
                    src={cat_ninja}
                    alt="icons"/>
                {m.message}<br/>
                likes: {m.likesCount}
            </div>
        )
    })
    return (
        <div className={s.post}>
            <div className={s.item}>
                {postMap}
            </div>
        </div>
    )
}