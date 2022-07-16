import { fireEvent, render, screen } from "@testing-library/react";
import NewPoll from "../components/NewPoll";
import React from "react";
import { Provider } from "react-redux";
import { store } from "../index";
import { BrowserRouter } from "react-router-dom";

describe("NewPoll Component Test", () => {
  it("check if page contain two input fields and one button", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <NewPoll />
        </BrowserRouter>
      </Provider>
    );
    expect(screen.getAllByRole("textbox")).toHaveLength(2);
    expect(screen.getAllByRole("button")).toHaveLength(1);
  });

  it("check if submit button is enabled when onchange event occur", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <NewPoll />
        </BrowserRouter>
      </Provider>
    );

    const firstInputElement = screen.getByPlaceholderText("Enter first choice");
    const secondInputElement = screen.getByPlaceholderText(
      "Enter second choice"
    );
    const submitBtn = screen.getByRole("button");
    expect(submitBtn).toBeDisabled();
    fireEvent.change(firstInputElement, { target: { value: "learn React" } });
    fireEvent.change(secondInputElement, { target: { value: "learn python" } });

    expect(firstInputElement.value).toMatch("learn React");
    expect(secondInputElement.value).toMatch("learn python");
    expect(submitBtn).not.toBeDisabled();
  });
});
