"use strict";
import { StyleSheet } from "react-native";

module.exports = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
		flexDirection: "column"
	},
	buttonContainer: {
		marginVertical: 10,
		width: "50%",
		borderRadius: 20,
		overflow: "hidden",
		backgroundColor: "#800080",
		alignItems: "center",
		justifyContent: "center",
		height: 40
	},
	buttonText: {
		color: "#FFF",
		fontSize: 16
	}
});
