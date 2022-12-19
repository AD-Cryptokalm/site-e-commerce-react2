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
// export const updateUser = (uid) => {
//   const token = localStorage.getItem("token");
  
//   return async (dispatch) => {
//     return axios ({
//       method:"PUT",
//       url: `http://localhost:3000/600/users/${uid}`,
//       withCredentials: true,
//       headers: {Authorization: `Bearer ${token}`},
      
//     })
//     .then((res) => {
//       dispatch({type: UPDATE_USER, payload: res.data.id})
//     })
//     .catch ((err) => console.log(err))
//   };
// };

