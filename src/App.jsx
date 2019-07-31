import React from 'react'
import './App.css'

import { createStore } from './StoreWrappers'
import RouterContainer from './Router.Container';

const App = () => {
	return (<RouterContainer />)
}

export default createStore(App)