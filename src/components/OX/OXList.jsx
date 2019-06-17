import React from "react";

function OXList(props){
    console.log(props)
    return(
       <tr>
          <td>{props.data.L}</td>
          <td>{props.data.C}</td>
          <td>{props.data.R}</td>
       </tr>
       );

}
export default OXList;