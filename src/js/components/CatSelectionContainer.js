/**
 * Created by idanr on 05/07/2016.
 */

import React,{Component} from "react"
import Cat from "./Cat"

export default class CatContainer extends Component
{
    render(){
        var catArr = this.props.cats.map(cat => {
            return <Cat cat={cat}/>
        });

        return(
            <div className="container">
                {catArr}
            </div>
        )
    }
}



