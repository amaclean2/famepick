import React, { useEffect } from 'react'
import TodoComponent from './Todos.Component'
import PropTypes from 'prop-types'

import { addStore } from '../../StoreWrappers'

const TodoContainer = ({ groupName, store }) => {

    useEffect(() => {
        const
            unfilteredTodos = store.get("todos"),
            groupTodos = unfilteredTodos && unfilteredTodos
                .filter( item => item.group === groupName )
                .map( item => item.id )

        store.set({
            "todos_by_group": groupTodos
        })
    }, [])

    const renderGroups = () => {
        const groups = store.get("todos_by_group")
        return (!!groups) ? <TodoComponent todos={groups} /> : ""
    }

    return (
    <>{renderGroups()}</>
    )
}

TodoContainer.propTypes = {
    store: PropTypes.object,
    groupName: PropTypes.string
}

export default addStore(TodoContainer)