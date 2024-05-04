import React, { useState, useEffect } from "react";
import { View, Text, ActivityIndicator, ScrollView, StyleSheet } from "react-native";
import { User } from "../types/CommonTypes";
import UserListItem from "../components/User";
import UserListItemPlaceholder from "../components/UserPlaceholder";

export default function ListScreen() {
	const [loading, setLoading] = useState(true);
	const [data, setData] = useState<User[]>();
	const [error, setError] = useState<string | null>(null);

	const renderPlaceholders = () => {
		const placeholders = [];
		for (let i = 0; i < 10; i++) {
			placeholders.push(<UserListItemPlaceholder key={i} />);
		}
		return placeholders;
	};

	useEffect(() => {
		fetchData();
	}, []);

	const fetchData = async () => {
		try {
			const response = await fetch("https://6172cfe5110a740017222e2b.mockapi.io/elements");
			if (!response.ok) {
				throw new Error("Failed to fetch data");
			}
			const jsonData: User[] = await response.json();
			setData(jsonData);
			setLoading(false);
			setError(null);
		} catch (error) {
			console.error("Error fetching data:", error);
			setLoading(false);
			setError("Failed to fetch data. Please try again later.");
		}
	};

	return (
		<ScrollView style={{ flex: 1 }}>
			{loading ? (
				<View style={styles.loadingContainer}>{renderPlaceholders()}</View>
			) : error ? (
				<Text>{error}</Text>
			) : (
				<View>
					{data?.map((data, index) => (
						<UserListItem user={data} key={index} />
					))}
				</View>
			)}
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	loadingContainer: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center"
	}
});
