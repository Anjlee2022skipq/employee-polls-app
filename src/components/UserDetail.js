import React from "react";
import { connect } from "react-redux";

function UserDetail(props) {
  return (
    <>
      <div className="d-flex flex-row">
        <div>
          <img
            src={props.avatarURL}
            className="user-logo m-1"
            alt="user-logo"
          />
        </div>
        <div>
          <div className="d-flex flex-column">
            <small className="mx-3 fs-6">{props.fullName}</small>
            <small className="mx-3 fs-9 text-muted">{props.userName}</small>
          </div>
        </div>
      </div>
    </>
  );
}
const mapStateToProps = ({ Users }, { userId }) => {
  const avatarURL = Users[userId].avatarURL;
  const fullName = Users[userId].name;
  const userName = userId;
  return {
    avatarURL,
    fullName,
    userName,
  };
};

export default connect(mapStateToProps)(UserDetail);
