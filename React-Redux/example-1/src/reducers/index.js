import * as types from '../actions';
import {combineReducers} from 'redux';

const InitialState = {
    value : 0,
    diff : 1
}

/*
Reducer counter func
*/

const counter = (state = InitialState, action) => {
    switch(action.type) {
        case types.INCREMENT:
            return Object.assign({}, state, {
                value: state.value + state.diff
            });
        case types.DECREMENT:
            return Object.assign({}, state, {
                value: state.value - state.diff
            });
        case types.SET_DIFF:
            return Object.assign({}, state, {
                diff: action.diff
            });
        default:
            return state;
    }
};


const extra = (state = { value: 'this_is_extra_reducer' }, action) => {
    switch(action.type) {
        default:
            return state;
    }
}

const counterApp = combineReducers({counter, extra});

export default counterApp;