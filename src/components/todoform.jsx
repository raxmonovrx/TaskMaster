import { useEffect, useState } from 'react'

const TodoForm = ({ onSubmit, editTodoData, clearEdit }) => {
	const [newItem, setNewItem] = useState('')

	useEffect(() => {
		if (editTodoData) {
			setNewItem(editTodoData.title)
		}
	}, [editTodoData])

	function handleSubmit(e) {
		e.preventDefault()
		if (newItem === '') return

		onSubmit(newItem, editTodoData ? editTodoData.id : null)
		setNewItem('')
	}

	return (
		<div>
			<form className='input-group' onSubmit={handleSubmit}>
				<input
					value={newItem}
					onChange={e => setNewItem(e.target.value)}
					type='text'
					placeholder='Add a new task...'
					className='todo-input'
					autoFocus
					required
				/>
				<button className='add-btn' type='submit'>
					{editTodoData ? 'Update' : 'Add'}
				</button>
				{editTodoData && (
					<button
						type='button'
						className='cancel-btn'
						onClick={() => {
							setNewItem('')
							clearEdit()
						}}
					>
						Cancel
					</button>
				)}
			</form>
		</div>
	)
}

export default TodoForm
