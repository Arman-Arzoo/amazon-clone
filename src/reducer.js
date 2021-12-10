export const initialState = {
  basket: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_BUSKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
  }
};

export default reducer;
