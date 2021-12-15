export const initialState = {
  basket: [],
};

const reducer = (state = initialState, action) => {
  console.log(action);
  console.log(state);

  switch (action.type) {
    case "ADD_TO_BUSKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };

    default:
      return state;
  }
};

export default reducer;
