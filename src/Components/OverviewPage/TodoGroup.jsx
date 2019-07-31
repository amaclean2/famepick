import React from 'react'
import PropTypes from 'prop-types'

import { addStore } from '../../StoreWrappers'

const TodoGroup = ({ group, store }) => {

	const toggleStore = () => {
		store.set({
			"working_group": group.name,
			"selector": "details",
			"todos_by_group": []
		})
	}

	return (
		<div className="todo-group flex-container" onClick={toggleStore}>
			<img src={'/group.svg'} alt="group" />
			<div className="group-meta flex-container">
				<span className="title">{group.name}</span>
				<span>{store.getGroupStatement(group.name)}</span>
			</div>
			<div className="flex-spacer" />
		</div>
	)
}

TodoGroup.propTypes = {
	store: PropTypes.object,
	group: PropTypes.shape({
		name: PropTypes.string,
		completed: PropTypes.string
	})
}

export default addStore(TodoGroup)