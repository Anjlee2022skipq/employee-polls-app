import React from "react";
import { render } from "@testing-library/react";
import LeaderBoard from "../components/LeaderBoard";
import { Provider } from "react-redux";
import { store } from "../index";
import { BrowserRouter } from "react-router-dom";

describe("LeaderBoard", () => {
  it("Check table is present on leaderboard page", () => {
    var component = render(
      <Provider store={store}>
        <BrowserRouter>
          <LeaderBoard />
        </BrowserRouter>
      </Provider>
    );
    expect(component.getByRole("table")).tobeinthedocument;
  });
});
