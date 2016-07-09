/**
 * Created by idanr on 09/07/2016.
 */

import React, {Component} from "react"
import Cat from "./Cat"

export default class SelectedCatContainer extends Component{

    static propTypes = {cat : React.PropTypes.object} 
    
    render(){
        return(
            <Cat cat={this.props.cat}/>
        )
        
    }
}

