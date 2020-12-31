import { combineReducers } from "redux";

const INITIAL_STATE = {
  data: [],
  spell: "",
};

const harryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "FETCH_DATA":
      return {
        ...state,
        data: action.payload,
      };
    case "CHANT_SPELL":
      return {
        ...state,
        spell: action.payload,
      };
    default:
      return state;
  }
};

/*
const spellReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "CHANT_SPELL":
      return {
        ...state,
        spell: action.payload,
      };
    default:
      return state;
  }
};*/

export default combineReducers({
  harryReducer,
});
