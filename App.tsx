import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParamList } from "./types/NavigationTypes";
import { Provider } from "react-redux";
import TaskScreen from "./screens/TaskScreen";
import ListScreen from "./screens/ListScreen";
import HomeScreen from "./screens/HomeScreen";
import store from "./store";

const Stack = createNativeStackNavigator<RootStackParamList>();

function App() {
	return (
		<Provider store={store}>
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
		</Provider>
	);
}

export default App;
