import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

import { addStore } from '../../StoreWrappers'

import './Details.css'

const Todo = ({ todoId, store }) => {
    const
        [todo, setTodo] = useState(null)

    useEffect(() => {
        setTodo(store.get("todos").find( todo => todo.id === todoId ))
    }, [])

    const toggleCompleted = () => {
        if (!store.checkLocked(todo)) {
            store.toggleCompleted(todo)
        }
    }

    const renderTodo = () => (!!todo)
        ? (
            <div className={`todo flex-container ${(store.checkLocked(todo)) ? "locked-todo" : ""}`} onClick={toggleCompleted} >
                <img src={(todo.completedAt) ? '/completed.svg' : (store.checkLocked(todo)) ? 'locked.svg' : '/incomplete.svg'} alt="incomplete" />
                <span className="title">{todo.task}</span>
                <div className="flex-spacer" />
            </div>
        ) : ""

	return (
		<>{renderTodo()}</>
	)
}

Todo.propTypes = {
    todoId: PropTypes.number,
    store: PropTypes.object
}

export default addStore(Todo)