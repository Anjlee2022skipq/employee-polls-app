import { combineReducers } from "redux";
import AuthUser from "./AuthUser";
import Users from "./Users";
import Questions from "./Questions";

export default combineReducers({
  AuthUser,
  Users,
  Questions,
});
