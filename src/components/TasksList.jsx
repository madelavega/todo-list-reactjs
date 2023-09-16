import { Fragment } from 'react';
import { List, Box, Typography, Divider } from '@mui/material';
import Task from './Task';

const TasksList = ({ tasks = [], removeTask }) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Typography variant="h4">Tareas</Typography>
      <Divider />
      <List>
        {tasks.map((task, index) => (
          <Fragment key={`task_${index}`}>
            <Task task={task} removeTask={removeTask} />
            <Divider />
          </Fragment>
        ))}
      </List>
    </Box>
  );
};

export default TasksList;
