import React, { useState } from 'react'

const StoreContext = React.createContext()

const createStore = ChildComponent => {
    return () => {
		const [store, setStore] = useState({
			todos: [],
			groups: [],
			selector: "overview"
		})
		
		const getFromStore = key => {
			return store[key]
		}

		const setToStore = (pair) => {
			const newStore = {...store}
			for (let key in pair) {
				newStore[key] = pair[key]
			}

			setStore(newStore)
		}

		const toggleCompleted = todo => {
			const 
				newStore = {...store},
				workingTodo = newStore.todos.find(wTodo => wTodo.id === todo.id )

			workingTodo.completedAt = (!!workingTodo.completedAt) ? null : Date.now()

			setStore(newStore)
		}

		const checkLocked = todo => {
			const
				dependencyIds = todo.dependencyIds,
				todos = store.todos.filter( todo => dependencyIds.includes(todo.id) )

			return !!todos.length && todos.some( todo => !todo.completedAt )
		}

		const getGroupStatement = (groupName) => {
			const
				todos = store.todos,
				totalInGroup = todos.filter( todo => todo.group === groupName).length,
				completedInGroup = todos.filter( todo => todo.group === groupName && !!todo.completedAt).length,
				completedString = `${completedInGroup} of ${totalInGroup} tasks complete`

			return completedString
		}

		const clearTodos = () => {
			setStore({
				todos: [],
				groups: [],
				selector: "overview"
			})
		}

        return (
            <StoreContext.Provider value={{
				store,
				get: getFromStore,
				set: setToStore,
				checkLocked,
				toggleCompleted,
				clearTodos,
				getGroupStatement
			}} >
                <ChildComponent />
            </StoreContext.Provider>
        )
    }
}

const addStore = ChildComponent => {
    return (props) => {
        return (
            <StoreContext.Consumer>
                {context => <ChildComponent store={context} {...props} />}
            </StoreContext.Consumer>
        )
    }
}

export { createStore, addStore }
export default StoreContext