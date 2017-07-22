import React from 'react'
import { NavLink } from 'react-router-dom'
import { BottomNavigationItem } from 'material-ui/BottomNavigation'
import IconLocationOn from 'material-ui/svg-icons/notification/event-available';
import EventBusy from 'material-ui/svg-icons/notification/event-busy'
import EventNote from 'material-ui/svg-icons/notification/event-note'
import BottomNavLink from '../styles/BottomNavLink'

const FilterLink = ({ filter }) => {
  const mapFilterToItemConfig = () => {
    switch (filter) {
      case 'all':
        return {
          icon: (<IconLocationOn />),
          label: 'Everything',
        }
      case 'active':
        return {
          icon: (<EventBusy />),
          label: 'Processing',
        }
      case 'completed':
        return {
          icon: (<EventNote />),
          label: 'Completed',
        }
    }
  }

  const { label, icon } = mapFilterToItemConfig()

  return (
    <BottomNavLink
      to={!filter ? '/all' : `/${filter}`}
      exact
      activeClassName={'btn-active'}
    >
      <BottomNavigationItem
        label={label}
        icon={icon}
      />
    </BottomNavLink>
  )
}

export default FilterLink
