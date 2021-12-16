import { ADD_TO_BUSKET } from "../actionTypes";
const busket = (busket = [], action) => {
  switch (action.type) {
    case ADD_TO_BUSKET:
      return [...busket, action.item];

    default:
      return busket;
  }
};

export default busket;
