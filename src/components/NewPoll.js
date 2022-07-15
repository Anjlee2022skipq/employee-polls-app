import React, { useState } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { handleSaveQuestion } from "../actions/Questions";

function NewPoll(props) {
  const navigate = useNavigate();
  const [optionOne, setOptionOne] = useState("");
  const [optionTwo, setOptionTwo] = useState("");

  const handleSubmit = () => {
    if (optionOne !== "" && optionTwo !== "") {
      const { dispatch } = props;
      dispatch(handleSaveQuestion(optionOne, optionTwo));
      navigate("/");
    }
  };

  return (
    <>
      <div className="d-flex flex-column align-items-center pt-3">
        <div>
          <h3>Would You Rather</h3>
        </div>
        <div className="mb-3">
          <h5 className="text-muted">Create a new poll</h5>
        </div>
        <div className="m-2">
          <small className="">Option One</small>
        </div>
        <input
          className="input-choice"
          placeholder="Enter first choice"
          value={optionOne}
          onChange={(e) => setOptionOne(e.target.value)}
        />
        <div className="m-2">
          <small>Option Two</small>
        </div>
        <input
          className="input-choice"
          placeholder="Enter second choice"
          value={optionTwo}
          onChange={(e) => setOptionTwo(e.target.value)}
        />
        <button
          className="primary-btn m-5 p-2"
          onClick={handleSubmit}
          disabled={optionOne === "" && optionTwo === ""}
        >
          Submit
        </button>
      </div>
    </>
  );
}

export default connect()(NewPoll);
