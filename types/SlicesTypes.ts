export default interface Task {
	id: number;
	text: string;
}

export type RootState = {
	task: Task[];
};
