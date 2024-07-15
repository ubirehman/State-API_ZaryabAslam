import React from "react";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import Home from "../pages/Home/page";
import HomeUI from "../pages/Home/pageUI";
import { addValue } from "../store/slices/answerSlice";

jest.mock("../pages/Home/pageUI", () => jest.fn(() => <div>Mocked HomeUI</div>));

const mockStore = configureStore([]);

describe("Home Component", () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      answers: {
        values: []
      }
    });

    store.dispatch = jest.fn();
  });

  test("renders Home component", () => {
    render(
      <Provider store={store}>
        <Home />
      </Provider>
    );

    expect(screen.getByText("Mocked HomeUI")).toBeInTheDocument();
  });

  test("dispatches addValue action and updates state on option select", () => {
    render(
      <Provider store={store}>
        <Home />
      </Provider>
    );

    const answer = { id: 1, icon: "👍", label: "Good" };

    const setSelectedOption = HomeUI.mock.calls[0][0].setSelectedOption;
    setSelectedOption(answer);

    expect(store.dispatch).toHaveBeenCalledWith(addValue(answer));

    const selectedOption = HomeUI.mock.calls[0][0].selectedOption;
    expect(selectedOption).toEqual(answer);
  });
});
