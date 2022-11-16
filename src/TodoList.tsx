import { useState } from 'react';
import { Card, Typography } from '@mui/material';
import AddTodo from './AddTodo';
import TodoListItem from './TodoListItem';
import Todos, {Todo}  from './todos';

const TodoList = () => {
  const [todos, setTodos] = useState<Todo[]>(Todos);

  const sortedTodos = todos.sort((a, b) => {
    if (a.priority === b.priority) {
      return a.title.localeCompare(b.title);
    }
    return a.priority ? -1 : 1;
  });

  const handleAddTodo = (title: string) => {
    if (title.trim().length === 0) {
      return;
    }
    const newTodo: Todo = {
      id: todos.length + 1,
      title: title,
      completed: false,
      priority: false,
    }
    setTodos([...todos, newTodo]);
  };

  const handleToggle = (id: number) => {
    const markTodo = todos.map((todo: Todo) => {
      if (todo.id === id) {
        return ({ ...todo, completed: !todo.completed })
      }
      return todo;
    });
    setTodos(markTodo);
  };

  const handleDeleteTodo = (id: number) => {
    const newTodos = todos.filter((todo: Todo) => todo.id !== id);
    setTodos(newTodos);
  };

  const handlePriorityTodo = (id: number) => {
    const priorityTodo = todos.map((todo: Todo) => {
      if (todo.id === id) {
        return ({ ...todo, priority: !todo.priority })
      }
      return todo;
    });
    setTodos(priorityTodo);
  };

  return (
    <>
      <Typography variant="h1" component="h2" gutterBottom> Todo List </Typography>
      <AddTodo addTodo={handleAddTodo}/>
      {sortedTodos.length > 0 ? (
        <Card sx={{minHeight: 500}}>
          {todos.map((todo: Todo) => {
            return (
              <TodoListItem
                key={todo.id}
                todo={todo}
                handleToggle={handleToggle}
                handleDeleteTodo={handleDeleteTodo}
                handlePriorityTodo={handlePriorityTodo}
              />
            )
          })}
        </Card>
      )
        : (
          <Typography variant="h3" component="h2" gutterBottom> No todos yet, please add one above. </Typography>
        )}
    </>
  )
}

export default TodoList;
