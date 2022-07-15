import react, { useEffect, useState } from "react";
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

function App(props) {
  useEffect(() => {
    props.dispatch(handleInitalData());
  }, []);
  return (
    <>
      {props.loggedIn === !true ? (
        <Login />
      ) : (
        <>
          <Navbar />
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/poll/:id" element={<Poll />} />
            <Route path="/leaderboard" element={<LeaderBoard />} />
            <Route path="/add" element={<NewPoll />} />
            <Route path="/" element={<Dashboard />} />
          </Routes>
        </>
      )}
    </>
  );
}
function mapStateToProps({ AuthUser }) {
  const loggedIn = AuthUser === null ? false : true;
  console.log(loggedIn);
  return {
    loggedIn,
  };
}
export default connect(mapStateToProps)(App);
