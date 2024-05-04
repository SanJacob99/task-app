import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import TaskScreen from "./screens/TaskScreen";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

jest.mock("react-redux", () => ({
	...jest.requireActual("react-redux"),
	useDispatch: jest.fn(),
	useSelector: jest.fn()
}));

const mockStore = configureStore([]);

describe("TaskScreen Component", () => {
	let store;
	let component;

	beforeEach(() => {
		store = mockStore({
			task: []
		});
		useSelector.mockReturnValue([]);
		useDispatch.mockReturnValue(jest.fn());
		component = (
			<Provider store={store}>
				<TaskScreen />
			</Provider>
		);
	});

	it("renders correctly", () => {
		const { toJSON } = render(component);
		expect(toJSON()).toMatchSnapshot();
	});

	it('opens modal when "Add New Task" button is pressed', () => {
		const { getByText } = render(component);
		fireEvent.press(getByText("Add New Task"));
		expect(getByText("Enter task name here")).toBeTruthy();
	});

	it('closes modal when "Close" button is pressed', () => {
		const { getByText, queryByText } = render(component);
		fireEvent.press(getByText("Add New Task"));
		fireEvent.press(getByText("Close"));
		expect(queryByText("Enter task name here")).toBeNull();
	});

	it('adds new task when "Add Task" button is pressed', () => {
		const { getByText, getByPlaceholderText } = render(component);
		fireEvent.press(getByText("Add New Task"));
		fireEvent.changeText(getByPlaceholderText("Enter task name here"), "Test Task");
		fireEvent.press(getByText("Add Task"));
		expect(store.getActions()).toEqual([{ type: "task/addTask", payload: "Test Task" }]);
	});

	it("shows error when trying to add task with empty input", () => {
		const { getByText, getByPlaceholderText } = render(component);
		fireEvent.press(getByText("Add New Task"));
		fireEvent.press(getByText("Add Task"));
		expect(getByText("Please fill this field")).toBeTruthy();
	});

	it("dismisses error after 2 seconds", async () => {
		jest.useFakeTimers();
		const { getByText, getByPlaceholderText, queryByText } = render(component);
		fireEvent.press(getByText("Add New Task"));
		fireEvent.press(getByText("Add Task"));
		expect(getByText("Please fill this field")).toBeTruthy();
		jest.advanceTimersByTime(2000);
		expect(queryByText("Please fill this field")).toBeNull();
	});
});
