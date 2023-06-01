import React from 'react';
import { ReactComponent as TrashIcon } from '../assets/icons/trash.svg';
import { ReactComponent as CheckIcon } from '../assets/icons/check-circle.svg';

const ListItem = ({ todo, toggleTodoHandler, deleteTodoHandler }) => {
	return (
		<li
			onDoubleClick={() => toggleTodoHandler(todo)}
			className={`list-item ${todo.completed && 'done'}`}
		>
			<div className='d-flex align-items-center'>
				{todo.completed && <CheckIcon color='green' />}
				<p className='item-text px-4'>{todo.text}</p>
			</div>
			<button onClick={() => deleteTodoHandler(todo)} className='delete-btn'>
				<TrashIcon color='red' />
			</button>
		</li>
	);
};

export default ListItem;
