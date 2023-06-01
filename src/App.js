import { useState } from 'react';
import Form from './components/Form';
import ListItem from './components/ListItem';
import { ReactComponent as TrashIcon } from './assets/icons/trash.svg';

const showTodosStrings = {
	ALL: 'all',
	ACTIVE: 'active',
	COMPLETED: 'completed',
};

function App() {
	const [todos, setTodos] = useState([]);
	const [showTodos, setShowTodos] = useState(showTodosStrings.ALL);

	const addTodoHandler = (todo) => {
		setTodos((prevState) => [...prevState, todo]);
	};

	const deleteTodoHandler = (todo) => {
		setTodos((prevState) => prevState.filter((item) => item.id !== todo.id));
	};

	const toggleTodoHandler = (todo) => {
		const currentTodos = [...todos];
		const myTodo = currentTodos.find((item) => item.id === todo.id);
		myTodo.completed = !myTodo.completed;
		setTodos(currentTodos);
	};

	return (
		<div>
			<h1 className='text-center m-5'>Simple TO-DO App</h1>
			<div className='text-center p-3'>
				<button
					className={`${
						showTodos === 'all'
							? 'activeFilteringButton filteringButton'
							: 'filteringButton'
					}`}
					onClick={() => setShowTodos(showTodosStrings.ALL)}
				>
					ALL
				</button>
				<button
					className={`${
						showTodos === 'active'
							? 'activeFilteringButton filteringButton'
							: 'filteringButton'
					}`}
					onClick={() => setShowTodos(showTodosStrings.ACTIVE)}
				>
					ACTIVE
				</button>
				<button
					className={`${
						showTodos === 'completed'
							? 'activeFilteringButton filteringButton'
							: 'filteringButton'
					}`}
					onClick={() => setShowTodos(showTodosStrings.COMPLETED)}
				>
					COMPLETED
				</button>
			</div>
			<Form addTodo={addTodoHandler} />
			{todos.length > 0 && showTodos === 'all' ? (
				<ul className='todoList'>
					{todos.map((todo) => (
						<ListItem
							key={todo.id}
							todo={todo}
							toggleTodoHandler={toggleTodoHandler}
							deleteTodoHandler={deleteTodoHandler}
						/>
					))}
				</ul>
			) : todos.length > 0 && showTodos === 'completed' ? (
				<ul className='todoList'>
					{todos
						.filter((item) => item.completed === true)
						.map((todo) => (
							<ListItem
								key={todo.id}
								todo={todo}
								toggleTodoHandler={toggleTodoHandler}
								deleteTodoHandler={deleteTodoHandler}
							/>
						))}
				</ul>
			) : todos.length > 0 && showTodos === 'active' ? (
				<ul className='todoList'>
					{todos
						.filter((item) => item.completed === false)
						.map((todo) => (
							<ListItem
								key={todo.id}
								todo={todo}
								toggleTodoHandler={toggleTodoHandler}
								deleteTodoHandler={deleteTodoHandler}
							/>
						))}
				</ul>
			) : null}
			<div className='d-flex justify-content-end'>
				<button className='deleteAll-btn' onClick={() => setTodos([])}>
					DELETE ALL <TrashIcon color='#c0392b' />
				</button>
			</div>
		</div>
	);
}

export default App;
