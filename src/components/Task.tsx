import { Trash, Circle, CheckCircle } from 'phosphor-react'
import checked from '../assets/checked.svg'

import styles from './Task.module.css'
import { ITask } from '../interfaces/Task';

interface ITaskProps {
	task: ITask
	onCheckOrUncheckTask(taskId: string): void
	onDeleteTask(taskId: string): void
}

export function Task({ task, onCheckOrUncheckTask, onDeleteTask }: ITaskProps) {

	function handleCheckOrUncheckTask() {
		onCheckOrUncheckTask(task.id)
	}

	function handleDeleteTask() {
		onDeleteTask(task.id)
	}

	return (
		<div className={styles.task}>
			<div className={styles.checkData}>
				<button
					onClick={handleCheckOrUncheckTask}
					type='button'
					className={task.isCompleted ? styles.checked : styles.unchecked}
					name='CheckOrUncheck'
				>
					{task.isCompleted ? <CheckCircle size={20} weight="fill" /> : <Circle size={20} />}
				</button>
				<span className={task.isCompleted ? styles.checkedSpan : styles.uncheckedSpan}>{task?.name}</span>
			</div>
			<button
				onClick={handleDeleteTask}
				type='button'
				className={styles.delete}
				name='Delete'
			>
				<Trash size={20} />
			</button>
		</div >
	)
}