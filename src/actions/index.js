import * as api from '../api'
import { normalize } from 'normalizr';
import * as schema from './schema' 
import  {getIsFetching}  from '../reducers'


export const toggleSideBar = () => (dispatch) => 
      dispatch({
          type: 'TOGGLE_SIDEBAR'
      })
 export const toggleAddTodo = () => (dispatch) => 
      dispatch({
          type: 'TOGGLE_ADD_TODO'
      })

export const fetchTodos = (filter) => (dispatch,getState) => {
    if (getIsFetching(getState(),filter)){
        return Promise.resolve();
    }
    dispatch({
        type: 'FETCH_TODOS_REQUEST',
        filter
    })
    return api.fetchTodos(filter).then(
      response => {
        const receivedTodo = response.map(todo => {
        return {
          ...todo.attributes,
          id: todo.id
        }
      })
        return dispatch({
            type: 'FETCH_TODOS_SUCESS',
            filter,
            response:normalize(receivedTodo,schema.arrayOfTodos)
        });
    },
      error => {
        dispatch({
            type: 'FETCH_TODOS_FAILURE',
            filter,
            message: error.message || 'something went wrong!'
        });
     }
    )    
}

export const addTodo = (text,due) => (dispatch) => {
   api.addTodo(text,due).then(
            response => {
                const receivedTodo = {
                  ...response.attributes,
                   id: response.id
            }
                 dispatch({
                    type: 'ADD_TODO_SUCCESS',
                    response:normalize(receivedTodo,schema.todo)
                });
        })
}



export const deleteTodo = (id) => (dispatch) => 
  api.deleteTodo(id).then(function (res) {
       if (res.results.length) {
        dispatch({
          type: 'DELETE_TODO_SUCCESS',
          id: id
        })
      }
     
        dispatch({
          type: 'DELETE_TODO_SUCCESS',
          id: id
        })
      
    })  
export const toogleTodo = (id) => (dispatch) => 
  api.toogleTodo(id).then(response => {
      const receivedTodo = {
      ...response.attributes,
      id: response.id
    }
      dispatch({
          type: 'TOOGLE_TODO_SUCCESS',
          response: normalize(receivedTodo, schema.todo)
      })
  })

export const login = (username, password) => (dispatch) => {
  if ( !username || !password ) {
    dispatch({
      type: 'USER_LOGIN_FAILURE',
      error: { clientErr: '请确保已经输入账号密码.' }
    })
    return
  }

  dispatch({
    type: 'USER_LOGIN_REQUEST'
  })

  api.login(username, password)
    .then(loginedUser => {
      dispatch({
        type: 'USER_LOGIN_SUCCESS',
        loginedUser
      })
    })
    .catch(res => {
      if (res.code === 211) {
        console.log('无法找到用户，我们将为您注册，请注意您将会使用输入的用户名登录。')
      }
      dispatch({
        type: 'USER_LOGIN_FAILURE',
        error: res
      })
    })
}

export const sign = (username, password,email) => (dispatch) => {
  dispatch({
    type: 'USER_SIGN_REQUEST'
  })
  api.sign(username, password,email)
    .then(signedUser => {
      dispatch({
        type: 'USER_SIGN_SUCCESS',
        loginedUser:signedUser
      })
    })
    .catch(res => {
      if (res.code === 211) {
        console.log('无法找到用户，我们将为您注册，请注意您将会使用输入的用户名登录。')
      }
      dispatch({
        type: 'USER_SIGN_FAILURE',
        error: res
      })
    })

}  
   
export const logOut = () => (dispatch) => {
  api.logOut().then(() => {
    dispatch({
      type: 'USER_LOGOUT_SUCCESS'
    })
  }).catch(res => {
    dispatch({
      type: 'USER_LOGOUT_FAILURE',
      error: res
    })
  })
}  
      
