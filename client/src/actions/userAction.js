import axios from "axios";

export const GET_USER = "GET_USER";
export const UPDATE_EMAIL = "UPDATE_EMAIL";
export const UPDATE_FIRSTNAME = "UPDATE_FIRSTNAME";
export const UPDATE_LASTNAME = "UPDATE_LASTNAME";
export const UPDATE_ADRESS = "UPDATE_ADRESS";
export const UPDATE_POSTALCODE = "UPDATE_POSTALCODE";
export const UPDATE_CITY = "UPDATE_CITY";

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
export const updateEmail = (uid, email) => {
  const token = localStorage.getItem("token");
  
  return async (dispatch) => {
    return axios({
      method: "PUT",
      url: `http://localhost:3000/api/user/${uid}`,
      headers: {
          Authorization: "Bearer " + token,
      },
      data: {email}
    })
    .then((res) => {
      dispatch({type: UPDATE_EMAIL, payload:email})
    })
    .catch ((err) => console.log(err))
  };
};
export const updateFirstname = (uid, firstname) => {
  const token = localStorage.getItem("token");
  
  return async (dispatch) => {
    return axios({
      method: "PUT",
      url: `http://localhost:3000/api/user/${uid}`,
      headers: {
          Authorization: "Bearer " + token,
      },
      data: {firstname}
    })
    .then((res) => {
      dispatch({type: UPDATE_FIRSTNAME, payload:firstname})
    })
    .catch ((err) => console.log(err))
  };
};
export const updateLastname = (uid, lastname) => {
  const token = localStorage.getItem("token");
  
  return async (dispatch) => {
    return axios({
      method: "PUT",
      url: `http://localhost:3000/api/user/${uid}`,
      headers: {
          Authorization: "Bearer " + token,
      },
      data: {lastname}
    })
    .then((res) => {
      dispatch({type: UPDATE_LASTNAME, payload:lastname})
    })
    .catch ((err) => console.log(err))
  };
};
export const updateAdress = (uid, adress) => {
  const token = localStorage.getItem("token");
  
  return async (dispatch) => {
    return axios({
      method: "PUT",
      url: `http://localhost:3000/api/user/${uid}`,
      headers: {
          Authorization: "Bearer " + token,
      },
      data: {adress}
    })
    .then((res) => {
      dispatch({type: UPDATE_ADRESS, payload:adress})
    })
    .catch ((err) => console.log(err))
  };
};

export const updatePostalCode = (uid, postalCode) => {
  const token = localStorage.getItem("token");
  
  return async (dispatch) => {
    return axios({
      method: "PUT",
      url: `http://localhost:3000/api/user/${uid}`,
      headers: {
          Authorization: "Bearer " + token,
      },
      data: {postalCode}
    })
    .then((res) => {
      dispatch({type: UPDATE_POSTALCODE, payload:postalCode})
    })
    .catch ((err) => console.log(err))
  };
};
export const updateCity = (uid, city) => {
  const token = localStorage.getItem("token");

  return async (dispatch) => {
    return axios({
      method: "PUT",
      url: `http://localhost:3000/api/user/${uid}`,
      headers: {
          Authorization: "Bearer " + token,
      },
      data: {city}
    })
    .then((res) => {
      dispatch({type: UPDATE_CITY, payload:city})
    })
    .catch ((err) => console.log(err))
  };
};