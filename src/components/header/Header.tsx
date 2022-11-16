import React from "react";
import s from "./Header.module.css"

export function Header () {
    return (
        <div className={s.header}>
            <img src="https://images.fineartamerica.com/images/artworkimages/medium/3/programmer-coding-samurai-japan-debugging-funny-lisa-stronzi-transparent.png" alt=""/>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJsx06OuetR_F6D5HO9Wd24d0UuPpoR9ffng&usqp=CAU" alt=""/>
               {/* <img src="https://files.codingninjas.com/profile98225580ab82cdabc7b221549564635ee6b84c.png" alt="img"/>*/}
                {/*<img
                    src="https://res.cloudinary.com/practicaldev/image/fetch/s--xqQ332cg--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/ltnifh5z7pkeeb2jzt5p.png"
                    alt="img"/>*/}
        </div>
    )
}
