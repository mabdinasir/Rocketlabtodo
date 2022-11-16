import {FC, SetStateAction, useEffect, useState} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';

interface AddTodoProps {
  addTodo: (title: string) => void;
}

const AddTodo: FC<AddTodoProps> = ({
  addTodo,
}) => {
  const [newTodo, setNewTodo] = useState<string>('');

  return (
    <Box
      sx={{
        width: 500,
        maxWidth: '100%',
        display: 'flex',
        flexDirection: "row",
        marginBottom: 3,
      }}
    >
      <TextField fullWidth label="Add todo" id="fullWidth" onChange={(e) => setNewTodo(e.currentTarget.value)} />
      <Button
        variant="contained"
        type="submit"
        size="small"
        sx={{ marginLeft: 1, textTransform: 'initial' }}
        onClick={() => addTodo(newTodo)}
      >
        Add todo
      </Button>
      </Box>
  );
}

export default AddTodo;
