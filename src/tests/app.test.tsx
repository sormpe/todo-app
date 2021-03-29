import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from "../App";

afterEach(() => cleanup);

describe("todo app", () => {
  it("renders without crashing", () => {
    render(<App />);
  });

  it("renders input for new task", () => {
    render(<App />);
    const inputElement = screen.getByPlaceholderText(
      /new task/i
    ) as HTMLInputElement;
    expect(inputElement).toBeInTheDocument();
  });

  it("is able to handle input writing", () => {
    render(<App />);
    const inputElement = screen.getByPlaceholderText(
      /new task/i
    ) as HTMLInputElement;
    fireEvent.change(inputElement, { target: { value: "task" } });
    expect(inputElement.value).toBe("task");
  });

  it("is able to render written task", () => {
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

  it("is able to warning if there is no task written in input adn we try to submit it", () => {
    render(<App />);
    const inputElement = screen.getByPlaceholderText(
      /new task/i
    ) as HTMLInputElement;
    expect(inputElement.value).toBe("");
    fireEvent.keyDown(inputElement, { key: "Enter", code: "Enter" });
    const errorMsg = screen.getByText(/please give a task/i);
    expect(errorMsg).toBeTruthy();
  });

  it("is able to remove the added task", () => {
    render(<App />);
    let todoTask = screen.getByText(/task/i);
    expect(todoTask).toBeTruthy();
    fireEvent.click(screen.getByTitle("remove"));
    todoTask = screen.queryByText(/task/i) as HTMLInputElement;
    expect(todoTask).toBeNull(); // it doesn't exist
  });
});
