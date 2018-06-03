
import React, {Component} from "react";
import {validate} from "./../utils";

export default class Demo extends Component{
    constructor(props){
        super(props);
        this.state = {
            name: "Nandan"
        };
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount(){

    }

    componentWillReceiveProps(nextProps){
        if(nextProps.lastName === "Tiwari"){
            this.setState({name: "Navin"});
        }
    }

    handleClick(e){
        e.preventDefault();
        if(validate(this.state.name)){
            this.setState({name: "Hello"});
        }
    }

    render(){
        return (
                <div><h1>{this.state.name} {this.props.lastName}</h1>
                    <button onClick={this.handleClick} id="#btn">Click Me</button>
                </div>
            );
    }
};
