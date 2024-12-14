import { useEffect, useState } from 'react'
import TodoForm from './components/todoform'
import TodoList from './components/todolist'
import './styles/App.css'

const App = () => {
	const [todos, setNewTodos] = useState(() => {
		const localValue = localStorage.getItem('ITEMS')
		if (localValue == null) return []
		return JSON.parse(localValue)
	})
	const [editTodoData, setEditTodoData] = useState(null)

	useEffect(() => {
		localStorage.setItem('ITEMS', JSON.stringify(todos))
	}, [todos])

	function addOrUpdateTodo(title, id) {
		const currentDate = new Date()

		if (id) {
			setNewTodos(currentTodos =>
				currentTodos.map(todo =>
					todo.id === id ? { ...todo, title, date: currentDate } : todo
				)
			)
			setEditTodoData(null)
		} else {
			setNewTodos(currentTodos => [
				...currentTodos,
				{ id: crypto.randomUUID(), title, completed: false, date: currentDate },
			])
		}
	}

	function toggleComplete(id) {
		setNewTodos(currentTodos =>
			currentTodos.map(todo =>
				todo.id === id ? { ...todo, completed: !todo.completed } : todo
			)
		)
	}

	function deleteTodo(id) {
		setNewTodos(currentTodos => currentTodos.filter(todo => todo.id !== id))
	}

	function editTodo(id) {
		const todoToEdit = todos.find(todo => todo.id === id)
		setEditTodoData(todoToEdit)
	}

	function clearEdit() {
		setEditTodoData(null)
	}

	return (
		<div className='todo-container'>
			<h2 className='title'>TaskMaster</h2>
			<TodoForm
				onSubmit={addOrUpdateTodo}
				editTodoData={editTodoData}
				clearEdit={clearEdit}
			/>
			<TodoList
				todos={todos}
				toggleComplete={toggleComplete}
				deleteTodo={deleteTodo}
				editTodo={editTodo}
			/>
		</div>
	)
}

export default App
