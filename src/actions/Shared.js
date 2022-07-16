import { getInitalData } from "../util/Api";
import recieveUsers from "./Users";
import recieveQuestions from "./Questions";
export function handleInitalData() {
  return (dispatch) => {
    return getInitalData().then(({ users, questions }) => {
      dispatch(recieveUsers(users));
      dispatch(recieveQuestions(questions));
    });
  };
}
