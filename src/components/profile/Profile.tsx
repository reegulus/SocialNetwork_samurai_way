import React from "react";
import s from "./Profile.module.css"
import {MyPosts} from "./my posts/MyPosts";
import {ProfileInfo} from "./profileInfo/ProfileInfo";

export function Profile() {
    return (
        <div className={s.content}>
            <ProfileInfo/>
            <MyPosts/>
        </div>
    )
}