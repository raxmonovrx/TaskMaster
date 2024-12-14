import TodoItem from './todoitem'

const TodoList = ({ todos, toggleComplete, deleteTodo, editTodo }) => {
	return (
		<div className='todo-list-container'>
			{todos.length === 0 && (
				<div className='no-tasks'>
					<p>Let&apos;s get started! Your first task is waiting to be added</p>
				</div>
			)}
			<ul className='todo-list'>
				{todos.map(todo => (
					<TodoItem
						key={todo.id}
						todo={todo}
						toggleComplete={toggleComplete}
						deleteTodo={deleteTodo}
						editTodo={editTodo}
					/>
				))}
			</ul>
		</div>
	)
}

export default TodoList
