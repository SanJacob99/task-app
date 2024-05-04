// In App.js in a new project

import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParamList } from "./types/NavigationTypes";
import TaskScreen from "./screens/TaskScreen";
import ListScreen from "./screens/ListScreen";
import HomeScreen from "./screens/HomeScreen";

const Stack = createNativeStackNavigator<RootStackParamList>();

function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator
				screenOptions={{
					headerStyle: {
						backgroundColor: "#800080"
					},
					headerTintColor: "#fff",
					headerTitleStyle: {
						fontWeight: "bold"
					},
					headerTitleAlign: "center"
				}}
			>
				<Stack.Screen name="HomeScreen" component={HomeScreen} />
				<Stack.Screen name="Tasks" component={TaskScreen} />
				<Stack.Screen name="List" component={ListScreen} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}

export default App;
