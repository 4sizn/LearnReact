//카운터의 배경화면 색깔을 담당한다

import * as types from "../actions/ActionTypes";

const initialState = {
  color: [255, 255, 255]
  // white
};

export default function ui(state = initialState, action) {
  if (action.type === types.SET_COLOR) {
    return {
      color: action.color
    };
  } else {
    return state;
  }
}
