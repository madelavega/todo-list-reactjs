import { useEffect, useState } from 'react';
import { Grid, Box } from '@mui/material';
import Header from './components/Header';
import TasksList from './components/TasksList';

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = description => {
    setTasks(tasks.concat([{ description, creationDate: new Date() }]));
  };

  const removeTask = taskDescription => {
    setTasks(tasks.filter(({description}) => description !== taskDescription));
  };

  return (
    <Box sx={{ flexGrow: 1, margin: 2 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Header addTask={addTask} />
        </Grid>
        <Grid item xs={12}>
          <TasksList tasks={tasks} removeTask={removeTask} />
        </Grid>
      </Grid>
    </Box>
  );
}

export default App;
