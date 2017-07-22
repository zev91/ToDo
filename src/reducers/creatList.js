import { combineReducers } from 'redux'

const creatList = (filter) => {
  const handleToggle = (state, action) => {
     const { result: toggledId, entities } = action.response;
     const { completed } = entities.todos[toggledId];
     const shouldRemove = (
       (completed && filter === 'active') ||
       (!completed && filter === 'completed') 
     );
     return shouldRemove ? state.filter(id => id !== toggledId) : state;
  }

  const ids =  (state = [], action) => {
    switch (action.type) {
      case 'FETCH_TODOS_SUCESS':
        return filter === action.filter ?
          action.response.result : state;
      case 'ADD_TODO_SUCCESS':
        return filter !== 'completed' ?
          [...state, action.response.result] : state;
      case 'TOOGLE_TODO_SUCCESS':
        return handleToggle(state, action)
      case 'DELETE_TODO_SUCCESS':
        return state.filter(id => id !== action.id)    
      default:
        return state;  
      }
    
  }
  const errorMessage = (state = null, action) => {
    if (filter !== action.filter) {
      return state;
    }
    switch (action.type) {
      case 'FETCH_TODOS_FAILURE':
        return action.message;
      case 'FETCH_TODOS_REQUEST':
      case 'FETCH_TODOS_SUCESS':
        return null;
      default:
        return state;    
    } 
  
  };
  const isFetching = (state = false, action) => {
    if (action.filter !== filter){
    return state;
  }
    switch (action.type) {
      case 'FETCH_TODOS_REQUEST':
       return true
      case 'FETCH_TODOS_SUCESS':
      case 'FETCH_TODOS_FAILURE':
       return false;
      default:
        return state;  
    }
  }
  return combineReducers({
    ids,
    isFetching,
    errorMessage
  })
}
export default creatList;

export const getIds = (state) => state.ids;
export const getIsFetching = (state) => state.isFetching;
export const getErrorMessage = (state) => state.errorMessage;