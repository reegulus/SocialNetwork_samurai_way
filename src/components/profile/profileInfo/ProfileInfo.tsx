import React from "react";
import s from "./ProfileInfo.module.css"
import samurai from "../../../img/samurai_cover_profile.png"

export function ProfileInfo() {
    return (
        <div>
            <div className={s.profileInfo}>
                <div>
                <img className={s.samuraiBanner} src={samurai} alt="samurai" />
                </div>
            </div>
            <div className={s.avatarDescription}>
                Ava + description
            </div>
        </div>
    )
}