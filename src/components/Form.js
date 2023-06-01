import React, { useState } from 'react';
import { Form as BForm, Button } from 'react-bootstrap';
import { Todo } from '../models/Todo';

const Form = ({ addTodo }) => {
	//const Form = (props) => {
	// const { addTodo } = props;
	const [inputValue, setInputValue] = useState('');

	const submitHandler = (e) => {
		e.preventDefault();
		const newTodo = new Todo(inputValue);
		addTodo(newTodo);
		setInputValue('');
	};

	return (
		<BForm
			onSubmit={submitHandler}
			className='w-75 bg-light p-4 d-flex justify-content-center border border-secondary mx-auto'
		>
			<BForm.Control
				className='w-50 border border-secondary'
				type='text'
				value={inputValue}
				onChange={(e) => setInputValue(e.target.value)}
			/>
			<Button type='submit' className='ms-3'>
				Add Todo
			</Button>
		</BForm>
	);
};

export default Form;
