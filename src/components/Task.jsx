import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton, ListItem, ListItemText } from '@mui/material';
import TaskLifeTime from './TaskLifetime';

const Task = ({ task, removeTask }) => {
  const onRemoveTask = () => {
    removeTask(task.description);
  };
  
  return (
    <ListItem
      secondaryAction={
        <IconButton edge="end" aria-label="Borrar" onClick={onRemoveTask} color="primary">
          <DeleteIcon />
        </IconButton>
      }
    >
      <ListItemText primary={task.description} secondary={<TaskLifeTime creationDate={task.creationDate}/>}/>
    </ListItem>
  );
};

export default Task;
