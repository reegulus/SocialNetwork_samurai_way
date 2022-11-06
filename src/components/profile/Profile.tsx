import React from "react";
import s from "./Profile.module.css"


export function Profile() {
    return (
        <div className="content">
            <div>
                <img
                    src="https://commercialisation.esa.int/wp-content/uploads/2021/11/earth-g1f2e40a34_1280-1280x400.jpg"
                    alt="img"/>
            </div>
            <div>
                Ava + description
            </div>
            <div>
                My Post
                <div>
                    New post
                </div>
                <div className={s.post}>
                    <div className={s.item}>
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
        </div>
    )
}