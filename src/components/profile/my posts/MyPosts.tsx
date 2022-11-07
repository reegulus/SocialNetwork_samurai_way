import React from "react";
import s from "./MyPosts.module.css"


export function MyPosts() {
    return (
            <div>
                My Post
                <div>
                    New post
                </div>
                <div className={s.post}>
                    <div className={s.item}>
                        <img src="https://img.freepik.com/free-vector/cute-cat-ninja-holding-sword-cartoon-vector-icon-illustration-animal-holiday-icon-concept-isolated_138676-6049.jpg" alt=""/>
                        Post 1
                    </div>
                    <div className={s.item}>
                        Post 2
                    </div>
                    <div className={s.item}>
                        Post 3
                    </div>
                </div>
            </div>
    )
}