import React, { Component, createContext } from 'react';

class Counter extends Component {
    state = {
        count : 0
    };

    handleIncrement = () => {
        this.setState( {count: this.state.count + 1 } );
    };

    render () {
        return (
            <React.Fragment>
                <span className = "badge badge-primary m-2">{this.state.count}</span>
                <button className = "btn btn-secondary btn-sm" onClick = {this.handleIncrement}>Increment</button>
            </React.Fragment>
        );
        
    };
}

export default Counter;