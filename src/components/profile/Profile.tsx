import React from "react";
import s from "./Profile.module.css"
import {MyPosts} from "./my posts/MyPosts";


export function Profile() {
    return (
        <div className={s.content}>
            <div>
                <img
                    src="https://commercialisation.esa.int/wp-content/uploads/2021/11/earth-g1f2e40a34_1280-1280x400.jpg"
                    alt="img"/>
            </div>
            <div>
                Ava + description
            </div>
            <div>
                <MyPosts/>
            </div>
        </div>
    )
}