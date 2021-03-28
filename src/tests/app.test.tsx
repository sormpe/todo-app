import React from "react";
import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from "../App";

afterEach(() => cleanup);

it("renders without crashing", () => {
  render(<App />);
});

test("renders input for new task", () => {
  render(<App />);
  const inputElement = screen.getByPlaceholderText(
    /new task/i
  ) as HTMLInputElement;
  expect(inputElement).toBeInTheDocument();
});

test("write something to input", () => {
  render(<App />);
  const inputElement = screen.getByPlaceholderText(
    /new task/i
  ) as HTMLInputElement;
  fireEvent.change(inputElement, { target: { value: "task" } });
  expect(inputElement.value).toBe("task");
});

test("write something to input and submit it", () => {
  render(<App />);
  const inputElement = screen.getByPlaceholderText(
    /new task/i
  ) as HTMLInputElement;
  expect(inputElement.value).toBe("");
  fireEvent.change(inputElement, { target: { value: "task" } });
  expect(inputElement.value).toBe("task");
  fireEvent.keyDown(inputElement, { key: "Enter", code: "Enter" });
  const todoTask = screen.getByText(/task/i);
  expect(todoTask).toBeTruthy();
});

test("try to submit", () => {
  render(<App />);
  const inputElement = screen.getByPlaceholderText(
    /new task/i
  ) as HTMLInputElement;
  expect(inputElement.value).toBe("");
  fireEvent.keyDown(inputElement, { key: "Enter", code: "Enter" });
  const errorMsg = screen.getByText(/please give a task/i);
  expect(errorMsg).toBeTruthy();
});

test("write something to input and submit it, then delete it", () => {
  render(<App />);
  const inputElement = screen.getByPlaceholderText(
    /new task/i
  ) as HTMLInputElement;

  expect(inputElement.value).toBe("");
  fireEvent.change(inputElement, { target: { value: "do this now!" } });
  expect(inputElement.value).toBe("do this now!");
  fireEvent.keyDown(inputElement, { key: "Enter", code: "Enter" });
  let todoTask = screen.getByText(/do this now!/i);
  expect(todoTask).toBeTruthy();
  fireEvent.click(screen.getByTitle("remove"));
  todoTask = screen.queryByText(/do this now!/i) as HTMLInputElement;
  expect(todoTask).toBeNull(); // it doesn't exist

  expect(inputElement.value).toBe("");
  fireEvent.change(inputElement, { target: { value: "lol" } });
  expect(inputElement.value).toBe("lol");
  fireEvent.keyDown(inputElement, { key: "Enter", code: "Enter" });
  let lolTask = screen.getByText(/lol/i);
  expect(lolTask).toBeTruthy();
  fireEvent.click(screen.getByTitle("remove"));
  lolTask = screen.queryByText(/lol/i) as HTMLInputElement;
  expect(lolTask).toBeNull(); // it doesn't exist
});
