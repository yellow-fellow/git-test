import React, { Component, createContext } from 'react';
import { Input, InputGroup, InputGroupAddon, InputGroupText } from 'reactstrap';

class Counter extends Component {
    state = {
        value : this.props.value,
        storedValue_1 : 0,
        storedValue_2 : 0
    };

    handleIncrement = () => {
        this.setState( {value: parseFloat(this.state.value) + parseFloat(1) } );
    };

    handleDelete = () => {
        this.setState( {value: this.state.value = 0} );
    };

    handleMultiply = () => {
        this.setState( {value: this.state.value = this.state.value * 2} );
    };

    render () {
        return (
            <div align='center'>
                {this.props.children}
                <span className = "badge badge-primary m-2 ">{this.state.value}</span>
                <InputGroup>
                    {/* <InputGroupAddon addonType = "prepend">
                        <InputGroupText>Value:</InputGroupText>
                    </InputGroupAddon> */}
                    <Input placeholder="Input 1st value here" className = 'm-5' onChange = {(e) => {this.setState( {storedValue: this.state.storedValue_1 = e.target.value} )}}></Input>                    
                </InputGroup>
                <InputGroup>
                    <Input placeholder="Input 2nd value here" className = 'm-5' onChange = {(e) => {this.setState( {storedValue: this.state.storedValue_2 = e.target.value} )}}></Input>
                </InputGroup>
                <br></br>
                <div>{this.state.storedValue_1} + {this.state.storedValue_2} = {parseFloat(this.state.storedValue_1) + parseFloat(this.state.storedValue_2)}</div>
                <br></br>
                <button className = "btn btn-sm btn-success m-2" onClick = {() => {this.setState( {value: this.state.value = parseFloat(this.state.storedValue_1) + parseFloat(this.state.storedValue_2)} )}}>Submit</button>
                <button className = "btn btn-secondary btn-sm m-2" onClick = {() => {this.handleIncrement()}}>Increment</button>
                <button className = "btn btn-danger btn-sm m-2" onClick = {() => {this.handleDelete()}}>Reset</button>
                <button className = "btn btn-warning btn-sm m-2" onClick = {() => {this.handleMultiply()}}>Multiply</button>
            </div>
        );
        
    };
}

export default Counter;