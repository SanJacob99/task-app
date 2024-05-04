import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableHighlight, Modal, TextInput, ScrollView } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import Task, { RootState } from "../types/SlicesTypes";
import { addTask } from "../slices/TaskSlice";

const styles = require("../style");

export default function TaskScreen() {
	const [modalVisible, setModalVisible] = useState(false);
	const [newTask, setNewTask] = useState("");
	const [error, setError] = useState(false);

	const tasks = useSelector((state: RootState) => state.task);
	const dispatch = useDispatch();

	const handleAddTask = () => {
		if (newTask.length < 1) {
			setError(true);
			setTimeout(() => {
				setError(false);
			}, 2000);
		} else {
			dispatch(addTask(newTask));
			setNewTask("");
			setModalVisible(false);
		}
	};

	const closeModal = () => {
		setModalVisible(false);
		setError(false);
	};

	return (
		<View style={{ ...styles.container, paddingTop: "10%" }}>
			<TouchableHighlight
				style={[styles.buttonContainer]}
				onPress={() => setModalVisible(true)}
				underlayColor="#C5C5C5"
			>
				<Text style={styles.buttonText}>Add New Task</Text>
			</TouchableHighlight>

			<View>
				<ScrollView style={{ maxHeight: "auto" }}>
					{tasks.map((task, index) => (
						<View key={task.id} style={localStyles.listItem}>
							<Text>{`${task.id + 1}. ${task.text}`}</Text>
						</View>
					))}
				</ScrollView>
			</View>
			<Modal animationType="slide" transparent={true} visible={modalVisible} onRequestClose={closeModal}>
				<View style={localStyles.modalContainer}>
					<View style={localStyles.modalContent}>
						<TextInput
							style={error ? localStyles.inputError : localStyles.input}
							onChangeText={setNewTask}
							value={newTask}
							placeholder={error ? "Please fill this field" : "Enter task name here"}
							placeholderTextColor={error ? "#FF0000" : "#A9A9A9"}
						/>
						<TouchableHighlight style={[styles.buttonContainer]} onPress={handleAddTask} underlayColor="#C5C5C5">
							<Text style={styles.buttonText}>Add Task</Text>
						</TouchableHighlight>
						<TouchableHighlight style={[styles.buttonContainer]} onPress={closeModal} underlayColor="#C5C5C5">
							<Text style={styles.buttonText}>Close</Text>
						</TouchableHighlight>
					</View>
				</View>
			</Modal>
		</View>
	);
}

const localStyles = StyleSheet.create({
	modalContainer: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "rgba(0, 0, 0, 0.5)"
	},
	modalContent: {
		backgroundColor: "#fff",
		padding: 20,
		borderRadius: 10,
		alignItems: "center",
		width: "90%"
	},
	input: {
		borderWidth: 1,
		borderColor: "#ccc",
		borderRadius: 5,
		padding: 10,
		marginBottom: 10,
		width: "100%"
	},
	inputError: { borderWidth: 1, borderColor: "#FF0000", borderRadius: 5, padding: 10, marginBottom: 10, width: "100%" },
	listItem: { borderWidth: 1, borderColor: "#ccc", borderRadius: 5, padding: 10, marginBottom: 10 }
});
