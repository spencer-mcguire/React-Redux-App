import { FETCH_BREWERY_START, FETCH_BREWERY_SUCCESS } from "../actions";

const initialState = {
  brewery: null,
  isFetching: false,
  error: ""
};

const randomBrew = a => {
  return a[Math.floor(Math.random() * a.length)];
};

const brewReducer = (state = initialState, action) => {
  console.log(state, action);
  switch (action.type) {
    case FETCH_BREWERY_START:
      return {
        ...state,
        isFetching: true
      };
    case FETCH_BREWERY_SUCCESS:
      return {
        ...state,
        brewery: randomBrew(action.payload),
        isFetching: false,
        error: ""
      };
    default:
      return state;
  }
};

export default brewReducer;
