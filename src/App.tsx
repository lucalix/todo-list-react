import './global.css';

import { v4 as uuidv4 } from 'uuid';

import { Header } from './components/Header'
import { NewTask } from './components/NewTask'
import { TaskList } from './components/TaskList';
import { useState } from 'react';

import { ITask } from './interfaces/Task';

function App() {
	const [createTaskText, setCreateTaskText] = useState<string>('')
	const [taskList, setTaskList] = useState<ITask[]>([])

	function changeCreateTask(task: string) {
		setCreateTaskText(task)
	}

	function createTask(taskName: string) {
		const task = {
			id: uuidv4(),
			name: taskName,
			isCompleted: false
		}

		setTaskList([...taskList, task])
	}

	function checkOrUncheckTask(taskId: string) {
		const updatedTaskList = taskList.map(task => {
			if (task.id === taskId) {
				return {
					...task,
					isCompleted: !task.isCompleted
				}
			}

			return task
		})

		setTaskList(updatedTaskList)
	}

	function deleteTask(taskId: string) {
		const taskListWithoutDeletedOne = taskList.filter(task => {
			return task.id !== taskId
		})

		setTaskList(taskListWithoutDeletedOne)
	}

	return (
		<div>
			<Header />
			<NewTask
				createTaskText={createTaskText}
				onChangeCreateTaskText={changeCreateTask}
				onCreateTask={createTask}
			/>
			<TaskList
				taskList={taskList}
				onCheckOrUncheckTask={checkOrUncheckTask}
				onDeleteTask={deleteTask}
			/>
		</div>
	)
}

export default App
