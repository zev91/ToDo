import React from 'react';
import classnames from 'classnames'

 const TodoItem = ( {todo, toogleTodo, deleteTodo}) => {
   console.log(todo)
  return (
    <li className={classnames({ completed: todo.completed, })}>
          <div className="view">
            <input className="toggle"
              type="checkbox"
              checked={todo.completed}
              onChange={() => toogleTodo(todo.id)} />
            <label>
              {todo.text}
            </label>
            <button className="destroy"
              onClick={() => deleteTodo(todo.id)} />
          </div>
        </li>
  )
}
export default TodoItem;
        
