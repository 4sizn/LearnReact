import React from 'react';
//connect를 통해 redux-store의 내장객체와 연결
import {connect} from 'react-redux';
import * as types from '../actions';

class Option extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            diff:'1'
        }
        this.onChangeDiff = this.onChangeDiff.bind(this);
    }

    onChangeDiff(e){
        if(isNaN(e.target.value))
            return;

        this.setState({diff:e.target.value});
        
        if(e.target.value==''){
            this.setState({diff:'0'});
        }

        //react-redux를 통한 store객체의 onUpdateDiff()에 props에 접근가능.
        this.props.onUpdateDiff(parseInt(e.target.value));

    }

    render(){
        return(
            <div>
                <input type = "text" value= {this.state.diff} onChange={this.onChangeDiff}></input>
            </div>
        );
    }
} 

let mapDispachToProps = (dispatch) =>{
    return{
        onUpdateDiff : (value) =>dispatch(types.setDiff(value))
    };
}

Option = connect(undefined, mapDispachToProps)(Option);

export default Option;

