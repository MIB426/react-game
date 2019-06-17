import React from "react"

function Home(props){
    return(
        <div>
            <h1>小小遊戲，大大練習！</h1>
            <p>{props.user} 你好啊~</p>
            <p>歡迎來到 ReactJS 的最終激戰</p>
            <p>這裡是首頁，祝天天開心。</p>
            <input type="button" value="登出" onClick={props.onClick} />
        </div>
        );
}

export {Home}