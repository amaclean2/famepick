import React from 'react'
import PropTypes from 'prop-types'

import TodoGroup from './TodoGroup'

const Groups = ({ groups }) => {
    const renderGroups = groups.map( (group, key) => <TodoGroup key={`todo_${key}`} group={group} />)

	return (
		<>{renderGroups}</>
	)
}

Groups.propTypes = {
    groups: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string,
        completed: PropTypes.string
    }))
}

export default Groups