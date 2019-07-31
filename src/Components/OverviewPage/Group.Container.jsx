import React from 'react'
import GroupComponent from './Group.Component'
import PropTypes from 'prop-types'

import { addStore } from '../../StoreWrappers'

const GroupContainer = ({ store }) => {

    const renderGroups = () => {
        const groups = store.get("groups")
        return (!!groups) ? <GroupComponent groups={groups} /> : ""
    }

    return (
        <>{renderGroups()}</>
    )
}

GroupContainer.propTypes = {
    store: PropTypes.object
}

export default addStore(GroupContainer)