import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import './App.css'

import OverviewScreen from './Components/OverviewPage/OverviewScreen'
import TodoScreen from './Components/DetailsPage/TodoScreen'
import { addStore } from './StoreWrappers'

const Router = ({ store }) => {
    
    useEffect(() => {
        store.set({"selector": "overview"})
    }, [])

    const renderViews = (store.get("selector") === "overview")
        ? <OverviewScreen />
        : <TodoScreen />

	return (
		<>{renderViews}</>
	)
}

Router.propTypes = {
    store: PropTypes.object
}

export default addStore(Router)