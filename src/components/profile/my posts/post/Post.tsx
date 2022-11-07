import React from "react";
import s from "./Post.module.css"

type PostPropsType = {
    message: string
    likesCount: number
}

export function Post(props: PostPropsType) {
    return (
        <div className={s.post}>
            <div className={s.item}>
                <img
                    src="https://img.freepik.com/free-vector/cute-cat-ninja-holding-sword-cartoon-vector-icon-illustration-animal-holiday-icon-concept-isolated_138676-6049.jpg"
                    alt="icons"/>
                {props.message}
                <div>likes: {props.likesCount}</div>
            </div>
        </div>
    )
}