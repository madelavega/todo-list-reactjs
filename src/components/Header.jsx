import {useState} from 'react';
import {Button, TextField, Grid} from '@mui/material';

const Header = ({setQuery, addTask}) => {
    const [newTaskDescription, setNewTaskDescription] = useState('');

    const onTareaInputChange = synthEvt => {
        setNewTaskDescription(synthEvt.target.value);
    };

    const onFilterChange = synthEvt => {
        setQuery(synthEvt.target.value);
    };
    const onAddTaskClicked = () => {
        addTask(newTaskDescription);
        setNewTaskDescription('');
    };

    return (
        <Grid container spacing={2}>
            <Grid item xs={10}>
                <TextField
                    fullWidth
                    placeholder="Tarea a realizar"
                    label="Tarea"
                    InputLabelProps={{
                        shrink: true
                    }}
                    value={newTaskDescription}
                    variant="standard"
                    onChange={onTareaInputChange}
                />
            </Grid>
            <Grid item xs={2}>
                <Button variant="contained" onClick={onAddTaskClicked} disabled={!newTaskDescription.length}>
                    Añadir
                </Button>
            </Grid>
            <Grid item xs={12}>
                <TextField
                    fullWidth
                    placeholder="Tarea a realizar"
                    label="Tarea"
                    InputLabelProps={{
                        shrink: true
                    }}
                    variant="standard"
                    onChange={onFilterChange}
                />
            </Grid>
        </Grid>
    );
};

export default Header;
