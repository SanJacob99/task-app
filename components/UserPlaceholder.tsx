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
		backgroundColor: "#f0f0f0",
		borderRadius: 8,
		marginBottom: 10
	},
	imageContainer: {
		marginRight: 10,
		height: 60,
		width: 60,
		backgroundColor: "#d3d3d3",
		borderRadius: 30
	},
	textContainer: {
		flex: 1
	},
	namePlaceholder: {
		width: "50%",
		height: 16,
		backgroundColor: "#d3d3d3",
		borderRadius: 4
	}
});

export default UserListItemPlaceholder;
