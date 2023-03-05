import React from "react";
import s from "./Profile.module.css"
import {MyPosts} from "./my posts/MyPosts";
import {ProfileInfo} from "./profileInfo/ProfileInfo";
import {ActionsTypes, ProfilePageType} from "../../redux/state";

type ProfilePagePropsType = {
    state: ProfilePageType
    // addPost: (addNewPost: string) => void
    dispatch: (action: ActionsTypes) => void
    // changeNewPostText: (newText: string) => void
}

export function Profile(props: ProfilePagePropsType) {
    return (
        <div className={s.content}>
            <ProfileInfo/>
            <MyPosts
                // changeNewPostText={props.changeNewPostText}
                state={props.state}
                // posts={props.profilePage.posts}
                dispatch={props.dispatch}
                // addPost={props.addPost}
            />
        </div>
    )
}