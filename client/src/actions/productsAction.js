import axios from "axios";

export const GET_PRODUCTS = "GET_PRODUCTS";


export const getProducts = () => {
  return async (dispatch) => {
    try {
      const res = await axios({
        method: "GET",
        url: `http://localhost:3000/products`,
      });
      dispatch({ type: GET_PRODUCTS, payload: res.data });
    } catch (err) {
      return console.log(err);
    }
  };
};