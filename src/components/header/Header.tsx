import React from "react";
import s from "./Header.module.css"

export function Header () {
    return (
        <div className={s.header}>
                <img src="https://files.codingninjas.com/profile98225580ab82cdabc7b221549564635ee6b84c.png" alt="img"/>
                <img
                    src="https://res.cloudinary.com/practicaldev/image/fetch/s--xqQ332cg--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/ltnifh5z7pkeeb2jzt5p.png"
                    alt="img"/>
        </div>
    )
}
