import React, {useState} from 'react'
import { Grid, Typography, Paper, TextField, Button } from '@mui/material'
import Navbar from '../components/NavBar/Navbar.js'
import { useNavigate } from 'react-router-dom'
import * as api from '../api/index.js'

const AddTask = () => {

    const navigate = useNavigate();
    const isAdding = true;
    const [addTask, setAddTask] = useState({
        title: "",
        description: "",
        status: false,
        comments: [{
            comment: "Task created succesfully",
            commentCreatedAt: Date()
        }],
        createdAt: Date()
    });

    const handleCreate = async () => {
        const taskCreated = await api.createTask(addTask);
        console.log(taskCreated);
        handleClear();
        navigate("/");
    }

    const handleBackHome = () => {
        navigate("/");
    }

    const handleClear = () => {
        setAddTask({
            title: "",
            description: "",
            status: false,
            comments: [{
                comment: "Task created succesfully at",
                commentCreatedAt: Date()
            }],
            createdAt: Date()
        });
    }

    return (
        <>
            <Navbar isAdding={isAdding}/>
            <Grid container spacing={3} marginTop={2} padding={2}>
                <Grid item xs={0} sm={0} md={3} lg={3}  justifyContent="center" align="center"></Grid>
                <Grid item xs={12} sm={12} md={6} lg={6}  justifyContent="center" align="center">
                <Paper variant="outlined" style={{padding: 20}}> 
                    <Typography variant="h4" marginBottom={3}>Add Task:</Typography> 
                    <form>
                        <div style={{marginBottom: 10}}>
                            <TextField fullWidth label="Title" variant="outlined" value={addTask.title} onChange={(e)=>setAddTask({...addTask, title: e.target.value})}/>
                        </div>
                        <div style={{marginBottom: 10}}>
                            <TextField fullWidth label="Description" variant="outlined" multiline minRows="3" value={addTask.description} onChange={(e)=>setAddTask({...addTask, description: e.target.value})}/>
                        </div>
                        <Grid container spacing={1}>
                            <Grid item xs={12} sm={12} md={12} lg={12} justifyContent="center" align="center">
                                <Button onClick={handleClear} variant="outlined" color="warning" fullWidth>Clear</Button>
                            </Grid>
                            <Grid item xs={12} sm={12} md={12} lg={12} justifyContent="center" align="center">
                                <Button onClick={handleCreate} variant="outlined" color="success" fullWidth>Create</Button>
                            </Grid>
                            <Grid item xs={12} sm={12} md={12} lg={12} justifyContent="center" align="center">
                                <Button onClick={handleBackHome} variant="outlined" color="error" fullWidth>Go Back</Button>
                            </Grid>
                        </Grid>
                    </form>
                </Paper>
                </Grid>
                <Grid item xs={0} sm={0} md={3} lg={3}  justifyContent="center" align="center"></Grid>
            </Grid>
        </>
    )
}

export default AddTask