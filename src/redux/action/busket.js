import { ADD_TO_BUSKET } from "../actionTypes";
export const addToBusket =
  (id, title, price, rating, img) => async (dispatch) => {
    console.log("hello");
    dispatch({
      type: ADD_TO_BUSKET,
      item: {
        id: id,
        title: title,
        price: price,
        rating: rating,
        img: img,
      },
    });
  };
