import React, {useState, useEffect} from 'react'
import { Grid, Typography, Paper, TextField, Button } from '@mui/material'
import Navbar from '../components/NavBar/Navbar.js'
import { useNavigate, useParams } from 'react-router-dom'
import * as api from '../api/index.js'

const EditTask = () => {

    const navigate = useNavigate();
    const isAdding = true;
    const [taskToEdit, setTaskToEdit] = useState({
        title: "",
        description: "",
    });
    const {id} = useParams();

    const getTaskToEdit = async() => {
        const {data} = await api.fetchTaskById(id);
        setTaskToEdit({...taskToEdit,
            title: data.title,
            description: data.description
        });
        console.log(data);
    }

    useEffect(()=>{
        getTaskToEdit();
    },[]);

    const handleUpdate = async () => {
        const taskUpdated = await api.updateTask(id, taskToEdit);
        console.log(taskUpdated);
        handleClear();
        navigate("/");
    }

    const handleCancel = () => {
        navigate("/");
    }

    const handleClear = () => {
        setTaskToEdit({
            title: "",
            description: ""
        });
    }

    return (
        <>
            <Navbar isAdding={isAdding}/>
            <Grid container spacing={3} marginTop={2} padding={2}>
                <Grid item xs={0} sm={0} md={3} lg={3}  justifyContent="center" align="center"></Grid>
                <Grid item xs={12} sm={12} md={6} lg={6}  justifyContent="center" align="center">
                <Paper variant="outlined" style={{padding: 20}}> 
                    <Typography variant="h4" marginBottom={3}>Edit Task:</Typography> 
                    <form>
                        <div style={{marginBottom: 10}}>
                            <TextField fullWidth label="Title" variant="outlined" value={taskToEdit.title} onChange={(e)=>setTaskToEdit({...taskToEdit, title: e.target.value})}/>
                        </div>
                        <div style={{marginBottom: 10}}>
                            <TextField fullWidth label="Description" variant="outlined" multiline minRows="3" value={taskToEdit.description} onChange={(e)=>setTaskToEdit({...taskToEdit, description: e.target.value})}/>
                        </div>
                        <Grid container spacing={1}>
                            <Grid item xs={12} sm={12} md={12} lg={12} justifyContent="center" align="center">
                                <Button onClick={handleClear} variant="outlined" color="warning" fullWidth>Clear</Button>
                            </Grid>
                            <Grid item xs={12} sm={12} md={12} lg={12} justifyContent="center" align="center">
                                <Button onClick={handleUpdate} variant="outlined" color="success" fullWidth>Update</Button>
                            </Grid>
                            <Grid item xs={12} sm={12} md={12} lg={12} justifyContent="center" align="center">
                                <Button onClick={handleCancel} variant="outlined" color="error" fullWidth>Cancel</Button>
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

export default EditTask