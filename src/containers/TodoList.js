import React, { Component } from 'react'
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup'
import Todo from '../components/Todo'
import List from '../styles/List'
import TimeInfo from '../styles/TimeInfo'

class TodoList extends Component{
  render(){
    const {dateInfo, todosByDue, toogleTodo, editTodo, deleteTodo} = this.props;
    return (
    <CSSTransitionGroup
      component={List}
      className='todo-list'
      transitionName='add-remove-item'
      transitionEnterTimeout={250}
      transitionLeaveTimeout={250}
    >
       <TimeInfo today={dateInfo.offsetDay === '今天'} >
        <em>{dateInfo.offsetDay}</em>
        <span>{dateInfo.date} {dateInfo.day}</span>
      </TimeInfo>
      {todosByDue.map(todo =>
        <Todo
          isToday={dateInfo.offsetDay === '今天'}
          key={todo.id}
          name={todo.id}
          {...todo}
          handleOnCheck={() => toogleTodo(todo.id)}
          handleDelete={() => deleteTodo(todo.id)}
        />
      )}

      </CSSTransitionGroup> 
    )
  }
}  
export default TodoList;


    
  

