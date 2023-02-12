import { ITask } from '../interfaces/Task'
import { Task } from './Task'
import styles from './TaskList.module.css'
import { TaskListInfo } from './TaskListInfo'

interface TaskListProps {
	taskList: ITask[]
	onCheckOrUncheckTask(taskId: string): void
	onDeleteTask(taskId: string): void
}

export function TaskList({ taskList, onCheckOrUncheckTask, onDeleteTask }: TaskListProps) {
	return (
		<div className={styles.taskList}>
			<TaskListInfo taskList={taskList} />
			<div className={styles.listWrapper}>
				{taskList.map(task => {
					return <Task
						key={task.id}
						task={task}
						onCheckOrUncheckTask={onCheckOrUncheckTask}
						onDeleteTask={onDeleteTask}
					/>
				})}
			</div>
		</div>
	)
}