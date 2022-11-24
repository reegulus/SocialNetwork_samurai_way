import React from "react";
import s from "./Post.module.css"
import cat_ninja from "./cat_ninja.png"

export type MessageDatePropsType = {
    message: string
    likesCount: number
}
export type PostPropsType = {
    messageDate: Array<MessageDatePropsType>
}

export function Post(props: PostPropsType) {
    return (
        <div className={s.post}>
            <div className={s.item}>
                {props.messageDate.map((m) => {
                    return (
                        <div>
                            <img
                                src={cat_ninja}
                                alt="icons"/>
                            {m.message}
                            <div>likes: {m.likesCount}</div>
                        </div>
                    )
                })}

            </div>
        </div>
    )
}