import React from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";

function Card(props) {
  const navigate = useNavigate();

  const handlePoll = () => {
    navigate(`/questions/${props.pollId}`);
  };
  return (
    <div className="col-md-3 p-2 m-3 card rounded d-flex">
      <div className="d-flex flex-column align-items-center">
        <div>
          <img
            src={props.avatar}
            className="me-3 rounded-circle"
            alt={"userProfile"}
            height="60"
          />
        </div>
        <div className="fs-4 text-center">
          {props.author}
          <div className="text-muted text-xs">
            {new Date(props.timestamp).toLocaleTimeString()} |{" "}
            {new Date(props.timestamp).toLocaleDateString()}{" "}
          </div>
          <hr />
        </div>

        <div className="d-flex justify-content-between ">
          <button className="small-primary-btn " onClick={handlePoll}>
            {props.answered ? "View Poll" : "Answer Poll"}
          </button>
        </div>
      </div>
    </div>
  );
}
const mapStateToProps = ({ Users, Questions }, { pollId }) => {
  const poll = Questions[pollId];
  const author = poll.author;
  const timestamp = poll.timestamp;
  const avatar = Users[author].avatarURL;
  return {
    pollId,
    author,
    timestamp,
    avatar,
  };
};

export default connect(mapStateToProps)(Card);
