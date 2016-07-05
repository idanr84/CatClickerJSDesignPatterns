/**
 * Created by idanr on 03/07/2016.
 */

import React, {Component} from "react";


export default class App extends Component{

    state = {counter : this.props.initialCount};
    increment = () => (this.setState({counter : this.state.counter + 1}));
    
    componentDidMount(){
         this.interval = setInterval(
             this.increment,1000
              )
    }

    // componentDidMount() {
    //     this.interval = setInterval(
    //         this.increment.bind(this),
    //         1000
    //     )
    // }
    //
    // increment() {
    //     this.setState(({ counter }) => {
    //         return {counter: counter + 1};
    //     });
    // }


    componentWillUnmount(){
        cleanInterval(this.interval);
    }

    render(){
        const {counter} = this.state;
        return (
            <header>
                <div>Webpack is doing its thing with React and ES2015</div>
                <div>{counter}</div>
            </header>
        )
    }

}

App.defaultProps = { initialCount: 2 }; 
