import React from 'react'
import PropTypes from 'prop-types'
import './Details.css'

import TodoContainer from './Todos.Container'
import { addStore } from '../../StoreWrappers'

const TodoScreen = ({ store }) => {
	const toggleScreens = () => {
		store.set({"selector": "overview"})
	}

	return (
		<div>
			<header className="flex-container">
				<h1>{store.get("working_group")}</h1>
				<button className="return-button" onClick={toggleScreens} >All Groups</button>
			</header>
			<TodoContainer groupName={store.get("working_group")} />
    	</div>
	)
}

TodoScreen.propTypes = {
	store: PropTypes.object
}

export default addStore(TodoScreen)