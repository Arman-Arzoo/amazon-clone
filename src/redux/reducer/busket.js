

import { ADD_TO_BUSKET, REMOVE_FROM_BUSKET } from "../actionTypes";
const busket = (busket = [], action) => {
  switch (action.type) {
    case ADD_TO_BUSKET:
      return [...busket, action.item];

    case REMOVE_FROM_BUSKET:

      const index = busket.findIndex((item) => item.id === action.id)
      let newBusket = [...busket];
      if (index >= 0) {

        newBusket.splice(index, 1);
      }
      else {
        console.warn(`Can't Remove Product (id: ${action.id} as its not in busket`)
      }
      return newBusket

    default:
      return busket;
  }
};

export default busket;
