import {
  _getUsers,
  _getQuestions,
  _saveQuestion,
  _saveQuestionAnswer,
} from "./Data.js";

export function getInitalData() {
  return Promise.all([_getUsers(), _getQuestions()]).then(
    ([users, questions]) => ({ users, questions })
  );
}
export function saveQuestion(question) {
  return _saveQuestion(question);
}
export function saveQuestionAnswer(authedUser, qid, answer) {
  return _saveQuestionAnswer(authedUser, qid, answer);
}