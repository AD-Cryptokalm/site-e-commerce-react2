import { GET_USER, UPDATE_EMAIL, UPDATE_LASTNAME, UPDATE_FIRSTNAME, UPDATE_ADRESS, UPDATE_POSTALCODE, UPDATE_CITY  } from "../actions/userAction";

const initialState = {};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case GET_USER:
      return action.payload;
      case UPDATE_EMAIL:
      return {
        ...state,
        email: action.payload,
      };
      case UPDATE_FIRSTNAME:
      return {
        ...state,
        firstName: action.payload,
      }
      case UPDATE_LASTNAME:
      return {
        ...state,
        lastname: action.payload,
      }
      case UPDATE_ADRESS:
        return {
          ...state,
          adress: action.payload,
        }
        case UPDATE_POSTALCODE:
          return {
            ...state,
            postalCode: action.payload
          }
          case UPDATE_CITY:
      return {
        ...state,
        city: action.payload,
      }
      default:
        return state
  }
}
