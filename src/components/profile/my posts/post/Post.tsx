import React from "react";
import s from "./Post.module.css"

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
                                src="https://img.freepik.com/free-vector/cute-cat-ninja-holding-sword-cartoon-vector-icon-illustration-animal-holiday-icon-concept-isolated_138676-6049.jpg"
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