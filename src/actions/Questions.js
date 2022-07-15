import { saveQuestion, saveQuestionAnswer } from "../util/Api";
import { addQuestionToUser, addAnswerToUser } from "../actions/Users";
export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";
export const SAVE_QUESTIONS = "SAVE_QUESTIONS";
export const ADD_VOTE_TO_QUESTION = "ADD_VOTE_TO_QUESTION,";

export default function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  };
}

function saveQuestions(question) {
  return {
    type: SAVE_QUESTIONS,
    question,
  };
}

function updateQuestionVotes(authedUser, id, answer) {
  return {
    type: ADD_VOTE_TO_QUESTION,
    authedUser,
    id,
    answer,
  };
}
export function handleSaveQuestion(optionOneText, optionTwoText) {
  return (dispatch, getState) => {
    const { AuthUser } = getState();
    return saveQuestion({
      optionOneText,
      optionTwoText,
      author: AuthUser,
    }).then((question) => {
      dispatch(saveQuestions(question));
      dispatch(addQuestionToUser(question));
    });
  };
}

export function handleQuestionVote(qid, answer) {
  return (dispatch, getState) => {
    const { AuthUser } = getState();
    return saveQuestionAnswer({ authedUser: AuthUser, qid, answer }).then(
      (question) => {
        dispatch(updateQuestionVotes(AuthUser, qid, answer));
        dispatch(addAnswerToUser(AuthUser, qid, answer));
      }
    );
  };
}
