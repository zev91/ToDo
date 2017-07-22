
import { combineReducers } from 'redux'
const isAdding = (state = false, action) => {
  switch (action.type) {
    case 'TOGGLE_ADD_TODO':
    case 'ADD_TODO_SUCCESS':
      return !state
    default:
      return state
  }
}

const isSidebarOpen = (state = false, action) => {
  switch (action.type) {
    case 'TOGGLE_SIDEBAR':
      return !state
    default:
      return state
  }
}
const isLogging = (state = false, action) => {
  switch (action.type) {
    case 'USER_LOGIN_REQUEST':
      state = true
      return state
    case 'USER_LOGIN_SUCCESS':
    case 'USER_LOGIN_FAILURE':
      state = false
      return state
    default:
      return state
  }
}
const selectedNav = (state = 0, action) => {
  const filter = action.filter;
  switch (filter) {
    case 'all':
      return 0
    case 'active':
      return 1
    case 'completed':
      return 2  
    default:
      return state
  }
}

const control = combineReducers({
  isAdding,
  isSidebarOpen,
  isLogging,
  selectedNav
})

export default control

export const getIsAdding = (state) => state.isAdding
export const getIsLogging = (state) => state.isLogging
export const getIsSidebarOpen = (state) => state.isSidebarOpen
export const getselectedNav = (state) => state.selectedNav

