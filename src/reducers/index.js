
import { combineReducers } from 'redux';
import byId, * as fromById from './byId';
import creatList, * as fromList from './creatList'
import control, * as fromControl from './control'
import userInfo, * as fromUser from './userInfo'
import * as api from '../api'
api.initLeanCloud()

const listByFilter = combineReducers({
  all: creatList('all'),
  active: creatList('active'),
  completed: creatList('completed')
})

const todos = combineReducers({
  byId,
  listByFilter,
  control,
  userInfo
});

export default todos;

export const getVisibleTodos = (state, filter) => {
  const ids = fromList.getIds(state.listByFilter[filter])
  const sortedTodos = {}
 ids.map(id => fromById.getTodo(state.byId, id)).sort((a, b) => (+a.due - b.due))
    .forEach(id => {
      const due = new Date(id.due).toJSON()
      if (!sortedTodos[due]) {
        sortedTodos[due] = []
      }
      sortedTodos[due].push(id)
    })
  console.log(sortedTodos)  
  return sortedTodos
}

export const getIsAdding = (state) =>
  fromControl.getIsAdding(state.control)

export const getIsLogging = (state) =>
  fromControl.getIsLogging(state.control)
export const getselectedNav = (state) =>
  fromControl.getselectedNav(state.control)

export const getLogError = (state) =>
  fromUser.getLogError(state.userInfo)

export const getCurrentUser = (state) =>
  fromUser.getCurrentUser(state.userInfo)

export const getIsSidebarOpen = (state) =>
  fromControl.getIsSidebarOpen(state.control)

export const getIsFetching = (state, filter) =>
  fromList.getIsFetching(state.listByFilter[filter])

export const getErrorMessage = (state, filter) =>
  fromList.getErrorMessage(state.listByFilter[filter])




