import React from "react";
import { View, Text, StyleSheet } from "react-native";

const UserListItemPlaceholder = () => {
	return (
		<View style={styles.container}>
			<View style={styles.imageContainer} />
			<View style={styles.textContainer}>
				<View style={styles.namePlaceholder} />
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		alignItems: "center",
		padding: 10,
		backgroundColor: "#f0f0f0", // Placeholder background color
		borderRadius: 8,
		marginBottom: 10 // Adjust as needed
	},
	imageContainer: {
		marginRight: 10,
		height: 60,
		width: 60,
		backgroundColor: "#d3d3d3", // Placeholder image background color
		borderRadius: 30
	},
	textContainer: {
		flex: 1
	},
	namePlaceholder: {
		width: "50%", // Adjust width as needed
		height: 16, // Adjust height as needed
		backgroundColor: "#d3d3d3", // Placeholder text background color
		borderRadius: 4
	}
});

export default UserListItemPlaceholder;
