import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import {Todo}  from './todos';
import { Tooltip } from '@mui/material';

interface TodoListItemProps {
  todo: Todo;
  handleToggle: (id: number) => void;
  handleDeleteTodo: (id: number) => void;
  handlePriorityTodo: (id: number) => void;
}

const TodoListItem: React.FC<TodoListItemProps> = ({
  todo,
  handleToggle,
  handleDeleteTodo,
  handlePriorityTodo,
}) => {

  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem
        secondaryAction={
          <IconButton edge="end" aria-label="delete"  onClick={ () => handleDeleteTodo(todo.id) }>
            <DeleteIcon />
          </IconButton>
        }
        disablePadding >
        <ListItemIcon>
          <Checkbox
            edge="end"
            checked={todo.completed}
            onClick={() => handleToggle(todo.id)}
            tabIndex={-1}
            disableRipple
            inputProps={{ 'aria-labelledby': todo.title }}
          />
        </ListItemIcon>
        <ListItemText
          sx={{
              textDecoration: todo.completed ? 'line-through' : 'none',
          }}
          id={todo.id.toString()}
          primary={todo.title}
        />
        <Tooltip title="star to prioritize"  arrow>
          <IconButton onClick={() => handlePriorityTodo(todo.id)} sx={{mr: 5}} >
            <StarBorderIcon htmlColor={todo.priority ? "red" : undefined} />
          </IconButton>
        </Tooltip>
      </ListItem>
    </List>
  );
}

export default TodoListItem
