import React from 'react';
import TodoListItem from '../todo_list/todo_list_item';
import TodoForm from '../todo_list/todo_form';

const TodoList = (props) => {
  return (
    <div>
    <TodoForm receiveTodo={props.receiveTodo}/>
    <ul>
      {props.todos.map( (todo, idx) => <TodoListItem key={idx} title={todo.title} /> )}
    </ul>
  </div>
  );
};

export default TodoList;
