import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import HomeScreen from "./screens/HomeScreen";

// Mocking navigation props
const mockNavigate = jest.fn();
const navigation = {
	navigate: mockNavigate
};

describe("HomeScreen Component", () => {
	it('navigates to "Tasks" screen when "Tasks" button is pressed', () => {
		const { getByText } = render(<HomeScreen navigation={navigation} />);
		fireEvent.press(getByText("Tasks"));
		expect(mockNavigate).toHaveBeenCalledWith("Tasks");
	});

	it('navigates to "List" screen when "List" button is pressed', () => {
		const { getByText } = render(<HomeScreen navigation={navigation} />);
		fireEvent.press(getByText("List"));
		expect(mockNavigate).toHaveBeenCalledWith("List");
	});
});
