import React from "react";
import ABList from "./ABList";

class AB extends React.Component{
    constructor(){
        super();
        this.state={
            history:[
                {
                    "Ans":"1234",
                    "A":0,
                    "B":0
                },
                {
                    "Ans":"1234",
                    "A":0,
                    "B":0
                },
                {
                    "Ans":"1234",
                    "A":0,
                    "B":0
                },
            ]
        }
        this.checkAns = this.checkAns.bind(this);
    }

    checkAns(){
        console.log("check clicked!")
    }

    render(){
        return(
            <div>
                <p>數字對位置對為A / 數字對位置錯為B</p>
                <input type="text" placeholder="請輸入4位不重複數字"/>
                <input type="button" value="確認" onClick={this.checkAns}/>
                <div>
                    <p>歷史紀錄：</p>
                    {this.state.history.map(
                       (history, i) => <ABList key={i} data={history} />
                       )}
                </div>
            </div>
            );
    }
}

export {AB}