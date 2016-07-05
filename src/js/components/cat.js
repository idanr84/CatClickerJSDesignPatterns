/**
 * Created by idanr on 05/07/2016.
 */

import React,{Component} from 'react';

export default class Cat extends Component{

    static defaultProps = {cat : {title : "Catty",shouldShowCounter:false, imgUrl:""}};
    static propTypes = {cat : React.PropTypes.object}

    render(){
        return(
            <div id="cat1" className="cat">
                <div className="title">{this.props.cat.title}</div>
                <img src={this.props.cat.imgUrl}  alt="Smiley face" width="200" height="200"/>
                {this.props.cat.shouldShowCounter ? <div className="counter">0</div> : null}
            </div>
        )
    }
}

