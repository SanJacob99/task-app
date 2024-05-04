import React from "react";
import { render, waitFor } from "@testing-library/react-native";
import ListScreen from "./screens/ListScreen";

global.fetch = jest.fn(() =>
	Promise.resolve({
		ok: true,
		json: () =>
			Promise.resolve([
				{ id: 1, name: "User 1" },
				{ id: 2, name: "User 2" }
			])
	})
);

describe("ListScreen Component", () => {
	it("renders loading indicator when data is being fetched", async () => {
		const { getByTestId } = render(<ListScreen />);
		expect(getByTestId("loading-indicator")).toBeTruthy();
	});

	it("renders error message when data fetch fails", async () => {
		global.fetch.mockImplementationOnce(() => Promise.reject(new Error("fetch failed")));
		const { getByText } = render(<ListScreen />);
		await waitFor(() => expect(getByText("Failed to fetch data. Please try again later.")).toBeTruthy());
	});

	it("renders user list when data is fetched successfully", async () => {
		const { findByText } = render(<ListScreen />);
		await waitFor(() => expect(findByText("User 1")).toBeTruthy());
		expect(findByText("User 2")).toBeTruthy();
	});
});
