import * as types from './ActionTypes';

export const increment = (index) => {
    return {
    type : types.INCREMENT,
    index
    }
}

export const decrement = (index) =>{
    return {
    type : types.DECREMENT,
    index
    }
}

export const setColor = ({color,index}) => {
    return {
    type : types.SET_COLOR,
    color,
    index
    }
}

export const create = (color) =>{
    return {
        type: types.CREATE,
        color
    }
}

export const remove =() =>{
    return {
        type : types.REMOVE
    }
}