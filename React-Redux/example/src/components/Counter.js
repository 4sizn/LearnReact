import React, { Component } from 'react'
import Value from './Value';
import Control from './Control';
import {connect} from 'react-redux';
import * as actions from '../actions';

class Counter extends Component {
    constructor(props){
        super(props);
        this.setRandomColor = this.setRandomColor.bind(this);
    }

    setRandomColor(){
        const color = [
            Math.floor((Math.random()*55) + 200),
            Math.floor((Math.random()*55) + 200),
            Math.floor((Math.random()*55) + 200)
        ];

        this.props.handleSetColor(color);
    }
    render() {

        const color = this.props.color;
        const style = {
            backgroundColor: `rgb(${color[0]}, ${color[1]}, ${color[2]})`
        };

        return (
            <div style = {style}>
                <Value number = {this.props.number}></Value>
                <Control onPlus = {this.props.handleIncrement} 
                        onSubtract={this.props.handleDecrement} 
                        onRandomizeColor={this.setRandomColor}></Control>
            </div>
        )
    }
} 

//Store에 저장된 객체를 내장객체로 변환한다.
const mapStateToProps = (state) => {
    return {
        number : state.counter.number,
        color : state.ui.color
    };
}

const mapDispatchToProps = (dispatch) =>{
    return{
    handleIncrement: () =>{dispatch(actions.increment())},
    handleDecrement: () =>{dispatch(actions.decrement())},
    handleSetColor: (color) =>{dispatch(actions.setColor(color))}
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);