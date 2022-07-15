import { render } from "@testing-library/react";
import Login from "./Login";
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
