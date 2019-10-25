import { squabbles } from '../data';
const GET_SQUABBLES = 'GET_SQUABBLES';
const SET_SELECTED = 'SET_SELECTED';
const CLEAR_SELECTED = 'CLEAR_SELECTED';
const ADD_SQUABBLE = 'ADD_SQUABBLE';
const DELETE_SQUABBLE = 'DELETE_SQUABBLE';

export const setSelected = squabble => ({ type: SET_SELECTED, squabble });
export const clearSelected = () => ({ type: CLEAR_SELECTED });

const initialState = {
  selectedSquabble: {},
  mySquabbles: squabbles,
};
//REDUCER//
export default function(state = initialState, action) {
  switch (action.type) {
    case SET_SELECTED:
      return { ...state, selectedSquabble: action.squabble };
    case CLEAR_SELECTED:
      return { ...state, selectedSquabble: initialState.selectedSquabble };
    default:
      return state;
  }
}
