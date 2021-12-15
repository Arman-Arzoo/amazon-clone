import { ADD_TO_BUSKET } from "../actionTypes";
export default (busket = [{}], action) => {
  console.log(action.item);
  console.log("busket value", busket);
  switch (action.type) {
    case ADD_TO_BUSKET:
      return [...busket, action.item];

    default:
      return busket;
  }
};
