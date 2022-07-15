import { _saveQuestionAnswer, _saveQuestion } from "./Data";

describe("_saveQuestion", () => {
  it("should return error for incorrect data passed", async () => {
    const response = await _saveQuestion({
      author: "sarahedo",
      optionOneText: "have coffee",
      optionTwoText: undefined,
    }).catch((e) => e);

    expect(response).toBe(
      "Please provide optionOneText, optionTwoText, and author"
    );
  });

  it("should return question correct data passed", async () => {
    const response = await _saveQuestion({
      author: "sarahedo",
      optionOneText: "have coffee",
      optionTwoText: "have tea",
    }).catch((e) => e);

    expect(response.author).toEqual("sarahedo");
  });
});

describe("_saveQuestionAnswer", () => {
  it("should return true for correct parameters", async () => {
    const response = await _saveQuestionAnswer({
      authedUser: "sarahedo",
      qid: "8xf0y6ziyjabvozdd253nd",
      answer: "optionOne",
    });

    expect(response).toBe(true);
  });

  it("should return error for false parameters", async () => {
    const response = await _saveQuestionAnswer({
      authedUser: "sarahedo",
      qid: undefined,
      answer: "optionOne",
    }).catch((e) => e);

    expect(response).toBe("Please provide authedUser, qid, and answer");
  });
});
