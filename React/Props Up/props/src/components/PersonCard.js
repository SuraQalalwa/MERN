import React, { Component } from 'react';

class Personinfos extends Component {
    constructor(props) {
        super(props);
    
    this.state = {  
        counter:this.props.age,
    }
}

    fun=()=>{
        this.setState({counter:this.state.counter+1});
    }
    render() { 
        return (
            <div>
            <h1>{this.props.lastName},{this.props.firstName}</h1>
            <p>Age: {this.state.counter}</p>
            <p>Hair Color: {this.props.haircolor}</p>
            <button onClick={this.fun}>Birthady Button for {this.props.age}</button>
            </div>
        );
    }
}

export default Personinfos;