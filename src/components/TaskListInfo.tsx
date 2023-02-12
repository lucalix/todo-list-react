import { ITask } from '../interfaces/Task'
import styles from './TaskListInfo.module.css'

interface TaskListProps {
	taskList: ITask[]
}

export function TaskListInfo({ taskList }: TaskListProps) {
	const createdTasksAmount = taskList.length

	const completedTasksAmount = taskList.filter(task => {
		return task.isCompleted === true
	}).length

	return (
		<div className={styles.taskListInfo}>
			<div className={styles.createdTasks}>
				<strong>Tarefas criadas:</strong>
				<span>{createdTasksAmount}</span>
			</div>
			<div className={styles.completedTasks}>
				<strong>Concluídas:</strong>
				<span>{completedTasksAmount} de {createdTasksAmount}</span>
			</div>
		</div>
	)
}