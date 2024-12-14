const TodoItem = ({ todo, toggleComplete, deleteTodo, editTodo }) => {
	const date = new Date(todo.date)
	const formattedDate = `${date.getDate().toString().padStart(2, '0')}.${(
		date.getMonth() + 1
	)
		.toString()
		.padStart(2, '0')}.${date.getFullYear()}`

	return (
		<li
			className={`task ${todo.completed ? 'completed' : ''}`}
			onDoubleClick={() => toggleComplete(todo.id)}
		>
			<span className='todo-task'>{todo.title}</span>
			<div className='dataAddData'>
				<span className='task-date'>{formattedDate}</span>{' '}
				<div className='btnTodo'>
					<button className='edit-btn' onClick={() => editTodo(todo.id)}>
						Edit
					</button>
					<button className='delete-btn' onClick={() => deleteTodo(todo.id)}>
						Delete
					</button>
				</div>
			</div>
		</li>
	)
}

export default TodoItem
