import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../index";
import { BrowserRouter } from "react-router-dom";
import ErrorPage from "../components/ErrorPage";

describe("ErrorPage", () => {
  it("Check if 404 img is present", () => {
    var component = render(
      <Provider store={store}>
        <BrowserRouter>
          <ErrorPage />
        </BrowserRouter>
      </Provider>
    );
    expect(component.getByRole("img")).tobeinthedocument;
  });
});
