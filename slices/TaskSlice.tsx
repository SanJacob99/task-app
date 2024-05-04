import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Task from "../types/SlicesTypes";

let nextTaskId = 0;

const taskSlice = createSlice({
	name: "tasks",
	initialState: [] as Task[],
	reducers: {
		addTask(state, action: PayloadAction<string>) {
			state.push({ id: nextTaskId++, text: action.payload });
		}
	}
});

export const { addTask } = taskSlice.actions;
export default taskSlice.reducer;
