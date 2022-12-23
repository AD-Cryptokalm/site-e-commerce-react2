import axios from "axios";

export const GET_USER = "GET_USER";
export const UPDATE_USER = "UPDATE_USER";


export const getUser = (uid) => {
  return async (dispatch) => {
    try {
      const res = await axios ({
        method:"GET",
        url: `http://localhost:3000/users/${uid}`,
        withCredentials: true,
        
      })
      dispatch({ type: GET_USER, payload: res.data });
    } catch (err) {
      return console.log(err);
    }
  };
};


