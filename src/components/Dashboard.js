import React from "react";
import { connect } from "react-redux";
import Card from "./Card";

function Dashboard(props) {
  return (
    <>
      {props.QuestionsData && (
        <>
          <div className="mx-5">
            <h5 className="text-center header">Unanswered Polls</h5>
            <hr />
            <div className="row justify-content-center">
              {props.QuestionsData.answered.map((poll) => (
                <Card key={poll.id} answered={false} pollId={poll.id} />
              ))}
            </div>
          </div>
          <div className="mx-5">
            <h5 className="text-center  header">Answered Polls</h5>
            <hr />
            <div className="row justify-content-center">
              {props.QuestionsData.unanswered.map((poll) => (
                <Card key={poll.id} answered={true} pollId={poll.id} />
              ))}
            </div>
          </div>
        </>
      )}
    </>
  );
}

function mapStateToProps({ AuthUser, Users, Questions }) {
  const answeredIds = Object.keys(Users[AuthUser].answers);
  const answered = Object.values(Questions)
    .filter((question) => !answeredIds.includes(question.id))
    .sort((a, b) => b.timestamp - a.timestamp);
  const unanswered = Object.values(Questions)
    .filter((question) => answeredIds.includes(question.id))
    .sort((a, b) => b.timestamp - a.timestamp);

  return {
    QuestionsData: {
      answered,
      unanswered,
    },
    Users,
  };
}
export default connect(mapStateToProps)(Dashboard);
