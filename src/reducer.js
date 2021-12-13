export const initialState = {
  basket: [{ id: 45 }],
};

const reducer = (state, action) => {
  console.log(action);
  console.log(state.basket);

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
