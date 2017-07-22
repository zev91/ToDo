import React, { Component } from 'react'

import classNames from 'classnames'
import TodoItem from '../styles/TodoItem'
import TodoCheckBox from '../styles/TodoCheckBox'
import TodoText from '../styles/TodoText'
import DeleteBtn from '../styles/DeleteBtn'

class Todo extends Component {
  constructor (props) {
    super(props)
    this.handleOnChange = this.props.handleOnChange;
  }

  render () {
    const { isToday, handleOnCheck, completed, handleDelete, text, name } = this.props

    return (
      <TodoItem>
        <TodoCheckBox
          defaultChecked={completed}
          onCheck={handleOnCheck}
        />
        <TodoText
          className={classNames({
            completed: completed,
            today: isToday
          })}
          name={name}
          defaultValue={text}
          fullWidth
          multiLine
          disabled={completed}
          lineThrough={completed}
          redText={isToday}
          underlineStyle={{borderColor: 'transparent'}}
          underlineDisabledStyle={{border: 'none'}}
          innerRef={node => this.input = node}
        />
        <DeleteBtn
          onClick={handleDelete}
        />
      </TodoItem>
    )
  }
}

export default Todo
