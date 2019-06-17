import React from "react";
import OXList from "./OXList";

class OX extends React.Component{
    constructor() {
        super();
        this.state = {
game:[
    {
        "L":"X",
        "C":"O",
        "R":"O",               
     },
     {
        "L":"O",
        "C":"X",
        "R":"O",               
     },
     {
        "L":"O",
        "C":"O",
        "R":"X",               
     }
]

        }
    }
    render(){
        return(
            <div>
            <p>先連線，先勝利！</p>
            <table>
               <tbody>
                  {this.state.game.map(
                     (data, i) => <OXList data={data} key={i} />
                     )}
               </tbody>
            </table>
         </div>      
            );
    }
}

export {OX}