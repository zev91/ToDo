import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup'
import AddTodoButton from '../styles/AddTodoButton'
import TodoTextInput from '../components/TodoTextInput'
import { getIsAdding } from '../reducers'
import * as actions from '../actions'

class AddTodo extends Component {
  render () {
    const { isAdding, toggleAddTodo, addTodo, fetchTodos } = this.props
    return (
      <div className='todo-add'>
        <AddTodoButton
          isAdding={isAdding}
          toggleAddToDo={toggleAddTodo}
        />
        <CSSTransitionGroup
          transitionName='addTodo-panel'
          transitionEnterTimeout={250}
          transitionLeaveTimeout={300}
        >
          { isAdding &&
            <TodoTextInput
              fetchTodos={fetchTodos}
              addTodo={addTodo}
            /> }
        </CSSTransitionGroup>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    isAdding: getIsAdding(state)
  }
}

export default withRouter(connect(
  mapStateToProps,
  actions
)(AddTodo))