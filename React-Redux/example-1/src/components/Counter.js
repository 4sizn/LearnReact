import React from 'react';
import {connect} from 'react-redux';

class Counter extends React.Component{
    render(){
        return(
            <div>
                <h1>VALUE : {this.props.value}</h1>
            </div>
        );
    }
}   

//store의 state를 컴포넌트 props에 매핑
//결국 combine한 각 Reducer상태를 내장객체로 변환
let mapStateToProps = (state) =>{
    return{
        value : state.counter.value
    };
}
Counter  = connect(mapStateToProps)(Counter);
export default Counter;

