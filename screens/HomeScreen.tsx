import React from "react";
import { StyleSheet, View, TouchableHighlight, Text, Alert } from "react-native";
import { RootStackParamList } from "../types/NavigationTypes";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
const styles = require("../style");

type Props = NativeStackScreenProps<RootStackParamList, "HomeScreen">;

export default function HomeScreen({ navigation }: Props) {
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
