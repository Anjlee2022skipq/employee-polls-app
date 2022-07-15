import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { handleQuestionVote } from "../actions/Questions";

function Poll(props) {
  const p_id = useParams().id;
  const question = props.Questions[p_id];
  const votes = [...question.optionOne.votes, ...question.optionTwo.votes];
  const answered = votes.includes(props.AuthUser);

  const handleFirstOption = (e) => {
    const { dispatch } = props;
    dispatch(handleQuestionVote(question.id, e.target.value));
  };
  const handleSecondOption = (e) => {
    const { dispatch } = props;
    dispatch(handleQuestionVote(question.id, e.target.value));
  };

  return (
    <>
      {question && (
        <div className="d-flex flex-column align-items-center m-3">
          <h5 className="m-2">Poll by {question.author}</h5>

          <img
            className="user-img m-3"
            src={require(`./../util/${props.Users[question.author].avatarURL}`)}
          />
          <h5 className="m-2">Would You Rather</h5>
          <div className="d-flex card w-75 flex-column m-3  px-2 ">
            <Form.Check
              inline
              label={question.optionOne.text}
              value={"optionOne"}
              name="group1"
              type="radio"
              id={question.optionOne.text}
              disabled={votes.includes(props.AuthUser)}
              defaultChecked={question.optionOne.votes.includes(props.AuthUser)}
              onChange={handleFirstOption}
              data-testid="first-option-button"
            />
            {answered && (
              <>
                <div className="primary-text">{`${question.optionOne.votes.length} of ${votes.length} peoples vote for this option  `}</div>
                <div className="primary-text" data-testid="votes-header">
                  {" "}
                  {(
                    (question.optionOne.votes.length / votes.length) *
                    100
                  ).toFixed(2)}
                  {"% votes"}
                </div>
              </>
            )}
          </div>
          <div className="d-flex card w-75 flex-column  m-3  px-2 ">
            <Form.Check
              inline
              label={question.optionTwo.text}
              name="group1"
              type="radio"
              id={question.optionTwo.text}
              disabled={votes.includes(props.AuthUser)}
              defaultChecked={question.optionTwo.votes.includes(props.AuthUser)}
              value={"optionTwo"}
              onChange={handleSecondOption}
            />
            {answered && (
              <>
                <div className="primary-text">{`${question.optionTwo.votes.length} of ${votes.length} peoples vote for this option `}</div>
                <div className="primary-text">
                  {(
                    (question.optionTwo.votes.length / votes.length) *
                    100
                  ).toFixed(2)}
                  {"% votes"}
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}
const mapStateToProps = ({ AuthUser, Users, Questions }) => {
  return {
    AuthUser,
    Questions,
    Users,
  };
};

export default connect(mapStateToProps)(Poll);
