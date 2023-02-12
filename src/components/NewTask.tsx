import styles from './NewTask.module.css'

import { PlusCircle } from 'phosphor-react'
import { ChangeEvent, FormEvent, InvalidEvent } from 'react'

interface NewTaskProps {
	createTaskText: string
	onChangeCreateTaskText(taskName: string): void
	onCreateTask(taskName: string): void
}

export function NewTask({ createTaskText, onChangeCreateTaskText, onCreateTask }: NewTaskProps) {

	function handleChangeCreateTaskText(event: ChangeEvent<HTMLInputElement>) {
		event.target.setCustomValidity('')

		onChangeCreateTaskText(event.target.value)
	}

	function handleCreateTask(event: FormEvent) {
		event.preventDefault()

		onCreateTask(createTaskText)
		onChangeCreateTaskText('')
	}

	function handleCreateTaskInvalid(event: InvalidEvent<HTMLInputElement>) {
		event.target.setCustomValidity('Esse campo é obrigatório!')
	}

	return (
		<form
			className={styles.newTask}
			onSubmit={handleCreateTask}
		>
			<input
				type="text"
				placeholder='Adicione uma nova tarefa'
				value={createTaskText}
				onChange={handleChangeCreateTaskText}
				required
				onInvalid={handleCreateTaskInvalid}
			/>
			<button type='submit' disabled={createTaskText.length === 0}>
				Criar
				{<PlusCircle size={16} />}
			</button>
		</form>
	)
}