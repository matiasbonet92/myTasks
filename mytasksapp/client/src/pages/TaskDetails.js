import react from 'react'
import Navbar from '../components/NavBar/Navbar.js'
import TaskDetail from '../components/TaskDetail/TaskDetail.js'
import { Grid } from '@mui/material';

const TaskDetails = () => {
  return (
    <>
        <Navbar/>
        <Grid container spacing={3} marginTop={2} padding={3}>
            <Grid item xs={12} sm={12} md={12} lg={12}>
                <TaskDetail/>
            </Grid>
        </Grid>
    </>
  )
}

export default TaskDetails