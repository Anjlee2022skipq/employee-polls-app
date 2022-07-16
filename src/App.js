import { useEffect } from "react";
import { connect } from "react-redux";
import { handleInitalData } from "./actions/Shared";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Navbar from "./components/Navbar";
import LeaderBoard from "./components/LeaderBoard";
import NewPoll from "./components/NewPoll";
import Poll from "./components/Poll";
import ErrorPage from "./components/ErrorPage";

function App(props) {
  useEffect(() => {
    props.dispatch(handleInitalData());
  });
  return (
    <>
      {props.loggedIn === !true ? (
        <Login />
      ) : (
        <>
          <Navbar />
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/questions/:id" element={<Poll />} />
            <Route path="/leaderboard" element={<LeaderBoard />} />
            <Route path="/add" element={<NewPoll />} />
            <Route path="/" element={<Dashboard />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </>
      )}
    </>
  );
}
function mapStateToProps({ AuthUser }) {
  const loggedIn = AuthUser === null ? false : true;

  return {
    loggedIn,
  };
}
export default connect(mapStateToProps)(App);
