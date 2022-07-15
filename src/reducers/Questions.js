import {
  RECEIVE_QUESTIONS,
  SAVE_QUESTIONS,
  ADD_VOTE_TO_QUESTION,
} from "../actions/Questions";
export default function Questions(state = {}, action) {
  switch (action.type) {
    case RECEIVE_QUESTIONS:
      return {
        ...state,
        ...action.questions,
      };
    case SAVE_QUESTIONS:
      return {
        ...state,
        [action.question.id]: action.question,
      };

    case ADD_VOTE_TO_QUESTION:
      return {
        ...state,
        [action.id]: {
          ...state[action.id],
          [action.answer]: {
            ...state[action.id][action.answer],
            votes: state[action.id][action.answer].votes.concat(
              action.authedUser
            ),
          },
        },
      };

    default:
      return state;
  }
}
