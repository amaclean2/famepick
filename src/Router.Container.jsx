import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import './App.css'

import Router from './Router'

import { addStore } from './StoreWrappers'

const RouterContainer = ({ store }) => {

	useEffect(() => {
		const todos = store.get("todos")
		if (!todos.length) {
			fetch('/data.json')
				.then(resp => resp.json())
				.then(data => {
					const formatted = buildGroups(data)
					store.set({
						"todos": data,
						"groups": formatted
					})
				}).catch(console.error)
		}
	}, [store])

	const buildGroups = todos => {
		let
			groupsMap = {},
			groupsList = []

		todos.forEach(todo => {
			if (groupsMap[todo.group]) {
				groupsMap[todo.group].push(todo)
			} else {
				groupsMap[todo.group] = [todo]
			}
		})

		for (const group in groupsMap) {
			groupsList.push({
				name: group,
			})
		}

		return groupsList
	}

	return (<Router />)
}

RouterContainer.propTypes = {
	store: PropTypes.object
}

export default addStore(RouterContainer)