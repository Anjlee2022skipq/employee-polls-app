import React, { useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { connect } from "react-redux";
import { handleLoginUser } from "../actions/AuthUser";
import { useNavigate } from "react-router-dom";

function Login(props) {
  const navigate = useNavigate();
  const [userName, setUserName] = useState(null);
  const handleUserName = (e) => {
    setUserName(e.target.value);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const { dispatch } = props;
    dispatch(handleLoginUser(userName));
    const path = window.location.pathname;

    if (path === "/login") return navigate("/");

    navigate(path);
  };

  return (
    <>
      <div className="header">
        <h3> Employee Polls</h3>
        <hr />
      </div>
      <div className="header-img">
        <img src="/assets/login.jfif" alt="img" />
      </div>
      <div className="login-section d-flex m-2 p-2 flex-column">
        <div className="d-flex p-2 justify-content-center">
          <DropdownButton
            id="login-user"
            title={userName === null ? "Select User" : userName}
            data-testid="dropdown-user"
          >
            {props.userIds.map((user) => (
              <Dropdown.Item
                as="button"
                className="login-user-item"
                key={user}
                value={user}
                onClick={handleUserName}
              >
                {user}
              </Dropdown.Item>
            ))}
          </DropdownButton>
        </div>
        <div className="d-flex p-2 justify-content-center">
          <button
            className="primary-btn"
            onClick={handleLogin}
            disabled={userName === null ? true : false}
          >
            Login
          </button>
        </div>
      </div>
    </>
  );
}
const mapStateToProps = ({ Users, AuthUser }) => {
  const userIds = Object.keys(Users);
  return {
    userIds,
    authenticated: !(AuthUser === null),
  };
};
export default connect(mapStateToProps)(Login);
