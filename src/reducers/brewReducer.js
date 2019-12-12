import { FETCH_BREWERY_START } from "../actions";

const initialState = {
  brewery: null,
  isFetching: false,
  error: ""
};

const brewReducer = (state = initialState, action) => {
  console.log(state, action);
  switch (action.type) {
    case FETCH_BREWERY_START:
      return {
        ...state,
        isFetching: true
      };
    default:
      return state;
  }
};

export default brewReducer;
