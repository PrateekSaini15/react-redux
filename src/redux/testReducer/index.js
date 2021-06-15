import { TestActionType } from "./testReducerTypes";

const initialState = {
  test: "",
};

export const testReducer = (state = initialState, action) => {
  switch (action.type) {
    case TestActionType:
      return { ...state, test: "Testing 1 2 3" };
    default:
      return state;
  }
};
