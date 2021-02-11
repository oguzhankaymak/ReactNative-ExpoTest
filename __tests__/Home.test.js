import React from "react";
import { fireEvent, render, waitFor } from "@testing-library/react-native";

import Home from "../src/screens/Home";

test("render Home Component", () => {
  const { getByTestId, getByText, getAllByTestId, queryByText } = render(
    <Home />
  );

  const input = getByTestId("add-input");
  const button = getByTestId("add-button");

  fireEvent.changeText(input, "item0");
  fireEvent.press(button);
  const item0 = getByText("item0");
  expect(item0).toBeDefined();

  fireEvent.changeText(input, "item1");
  fireEvent.press(button);
  const item1 = getByText("item1");
  expect(item1).toBeDefined();

  fireEvent.press(getAllByTestId("delete")[0]);
  expect(queryByText("item0")).toBeNull();

  const list = getByTestId("list");
  expect(list.children.length).toBe(1);
});
