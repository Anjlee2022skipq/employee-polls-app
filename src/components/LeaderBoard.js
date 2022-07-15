import React from "react";
import Table from "react-bootstrap/Table";
import { connect } from "react-redux";
import UserDetail from "./UserDetail";

function LeaderBoard(props) {
  return (
    <div className="d-flex justify-content-center pt-5">
      <Table striped bordered hover size="sm" className="users-table">
        <thead className="text-muted">
          <tr>
            <th>Users</th>
            <th>Answered</th>
            <th>Created</th>
          </tr>
        </thead>
        <tbody>
          {props.leaderboardData &&
            props.leaderboardData.map((user) => (
              <tr key={user.userId}>
                <td>
                  <UserDetail userId={user.userId} />
                </td>
                <td>{user.answered}</td>
                <td>{user.questions}</td>
              </tr>
            ))}
        </tbody>
      </Table>
    </div>
  );
}

const mapStateToProps = ({ AuthUser, Users }) => {
  const leaderboardData = Object.values(Users)
    .map((user) => ({
      userId: user.id,
      answered: Object.values(user.answers).length,
      questions: user.questions.length,
      total: Object.values(user.answers).length + user.questions.length,
    }))
    .sort((a, b) => a.total - b.total)
    .reverse();
  return {
    AuthUser,
    leaderboardData,
  };
};

export default connect(mapStateToProps)(LeaderBoard);
