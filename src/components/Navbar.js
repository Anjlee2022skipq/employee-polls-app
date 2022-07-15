import React from "react";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { handleLogoutUser } from "../actions/AuthUser";
import { useNavigate } from "react-router-dom";

function Navbar(props) {
  const navigate = useNavigate();
  const { AuthUser, userAvatar } = props;
  const handleLogout = () => {
    const { dispatch } = props;
    dispatch(handleLogoutUser());
    navigate("/login");
  };
  return (
    <Nav className="nav-bar">
      <div className="col d-flex ">
        <Link className="nav-item p-2 m-2" to={"/"}>
          Home
        </Link>
        <Link className="nav-item p-2  m-2" to={"/leaderboard"}>
          Leaderboard
        </Link>

        <Link className="nav-item p-2 m-2" to={"/add"}>
          New Poll
        </Link>
      </div>

      <img src={userAvatar} className="user-logo m-1" />
      <p className="nav-item text-muted p-2 m-2">{AuthUser}</p>
      <Button className="nav-item-btn text-center me-5" onClick={handleLogout}>
        Logout
      </Button>
    </Nav>
  );
}
function mapStateToProps({ AuthUser, Users }) {
  const userAvatar = Users[AuthUser].avatarURL;

  return {
    AuthUser,
    userAvatar,
  };
}

export default connect(mapStateToProps)(Navbar);
