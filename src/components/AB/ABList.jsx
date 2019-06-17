import React from "react";
function ABList(props){
    return(
        <p>{props.data.Ans}：{props.data.A}A{props.data.B}B</p>
        );
}
export default ABList;