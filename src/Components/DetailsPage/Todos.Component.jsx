import React from 'react'
import PropTypes from 'prop-types'

import './Details.css'

import Todo from './Todo'

const TodoCollection = ({ todos }) => {
    const renderTodos = todos.map( (todo, key) => <Todo key={`todo_${key}`} todoId={todo}/>)

	return (
		<div>{renderTodos}</div>
	)
}

TodoCollection.propTypes = {
	todos: PropTypes.arrayOf(PropTypes.number)
}

export default TodoCollection