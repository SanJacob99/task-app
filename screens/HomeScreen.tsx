import React from "react";
import { StyleSheet, View, TouchableHighlight, Text, Alert } from "react-native";
import { RootStackParamList } from "../types/NavigationTypes";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

type Props = NativeStackScreenProps<RootStackParamList, "HomeScreen">;

export default function App({ navigation }: Props) {
	const handleTasksPress = () => {
		navigation.navigate("Tasks");
	};

	const handleListPress = () => {
		navigation.navigate("List");
	};

	return (
		<View style={styles.container}>
			<TouchableHighlight style={[styles.buttonContainer]} onPress={handleTasksPress} underlayColor="#C5C5C5">
				<Text style={styles.buttonText}>Tasks</Text>
			</TouchableHighlight>
			<TouchableHighlight style={[styles.buttonContainer]} onPress={handleListPress} underlayColor="#C5C5C5">
				<Text style={styles.buttonText}>List</Text>
			</TouchableHighlight>
		</View>
	);
}

const styles = StyleSheet.create({
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
