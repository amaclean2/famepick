import React from 'react'
import PropTypes from 'prop-types'

import './Overview.css'

import GroupContainer from './Group.Container'
import { addStore } from '../../StoreWrappers'

const OverviewScreen = ({ store }) => {

	return (
		<div className="overview">
			<header className="flex-container" >
				<h1>Things To Do</h1>
				<button onClick={() => store.clearTodos()}>Reset</button>
			</header>
			<GroupContainer />
		</div>
	)
}

OverviewScreen.propTypes = {
	store: PropTypes.object
}

export default addStore(OverviewScreen)