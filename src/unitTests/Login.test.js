import { render, screen } from "@testing-library/react";
import Login from "../components/Login";
import React from "react";
import { Provider } from "react-redux";
import { store } from "../index";
import { BrowserRouter } from "react-router-dom";

describe("snapshot test", () => {
  it("create a snapshot folder", () => {
    var component = render(
      <Provider store={store}>
        <BrowserRouter>
          <Login />
        </BrowserRouter>
      </Provider>
    );
    expect(component).toMatchSnapshot();
  });
});

describe("Login Component Test", () => {
  it("check if initally login button is disabled", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Login />
        </BrowserRouter>
      </Provider>
    );

    expect(screen.getByText("Select User")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Login" })).toBeDisabled();
  });
});
