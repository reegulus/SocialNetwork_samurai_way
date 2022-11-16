import React from "react";
import s from "./ProfileInfo.module.css"

export function ProfileInfo() {
    return (
        <div>
            <div className={s.profile_info}>

                <img
                    src="https://lookingforclan.com/sites/default/files/styles/header_background/public/2017-10/samurai-1032044.jpg?itok=AgXodXzd"
                    alt=""/>
            </div>
            <div className={s.avatDes}>
                Ava + description
            </div>
        </div>
    )
}