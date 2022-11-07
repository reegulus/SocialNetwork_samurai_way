import React from "react";
import s from "./Post.module.css"


export function Post() {
    return (
        <div className={s.post}>
            <div className={s.item}>
                <img
                    src="https://img.freepik.com/free-vector/cute-cat-ninja-holding-sword-cartoon-vector-icon-illustration-animal-holiday-icon-concept-isolated_138676-6049.jpg"
                    alt="icons"/>
                Post 1
            </div>
        </div>
    )
}