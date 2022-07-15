import { getInitalData } from "../util/Api";
import recieveUsers from "./Users";
import recieveQuestions from "./Questions";
import { setAuthUser } from "./AuthUser";

// const AUTHED_ID = "sarahedo";
export function handleInitalData() {
  return (dispatch) => {
    return getInitalData().then(({ users, questions }) => {
      dispatch(recieveUsers(users));
      dispatch(recieveQuestions(questions));
      // dispatch(setAuthUser(AUTHED_ID));
    });
  };
}
