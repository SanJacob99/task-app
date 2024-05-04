import { configureStore } from "@reduxjs/toolkit";
import taskSlice from "./slices/TaskSlice";

const reducer = {
	task: taskSlice
};

export const store = configureStore({
	reducer: reducer,
	devTools: true
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
