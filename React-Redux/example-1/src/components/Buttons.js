import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as types from '../actions';

class Buttons extends Component {
  render() {
    return (
      <div>
        <button type = "button" onClick={this.props.onIncrement}>+</button>  
        <button type = "button" onClick={this.props.onDecrement}>-</button>  
      </div>
    );
  }
}

let mapDispathchToProps = (dispatch) =>{
    return{
        onIncrement : ()=>dispatch(types.increment()),
        onDecrement : ()=>dispatch(types.decrement())
    }
}

Buttons = connect(undefined, mapDispathchToProps)(Buttons);
export default Buttons;
