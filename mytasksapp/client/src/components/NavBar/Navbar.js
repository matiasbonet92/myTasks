import React from 'react'
import { Avatar, Container, Grid, Typography, Button, Box } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import logo from '../../media/completed-task.png'
import { Link, useNavigate } from 'react-router-dom'

const Navbar = ({isAdding}) => {

  const navigate = useNavigate();

  const handleAdd = () => {
    navigate("/addtask");
  }

  return (
    <Container>
      <Grid container marginTop={2}>
        <Grid item xs={12} sm={4} md={4} lg={4} style={{display: 'flex', flexDirection: 'row'}}>
          <Link to="/" style={{textDecoration: 'none', color: 'inherit'}}>
            <Box style={{display: 'flex', flexDirection: 'row'}}>
              <Avatar src={logo} lg={{width: 50, height: 50}}/>
              <Typography variant="h4" alignItems="center" justifyContent="center" style={{marginLeft: 10}}>MyTasks</Typography>
            </Box>
          </Link>
        </Grid>
        <Grid item xs={12} sm={4} md={4} lg={4} style={{display: 'flex', flexDirection: 'row'}}>
          <Typography variant="body2" style={{marginLeft: 10, display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>Tareas Pendientes: 0</Typography>
        </Grid>
        {
          !isAdding ? <Grid item xs={12} sm={4} md={4} lg={4}>
            <Button onClick={handleAdd} endIcon={<AddCircleIcon/>}>Add Task</Button>
          </Grid> : <Grid item xs={12} sm={4} md={4} lg={4}></Grid>
        }
        
      </Grid>
    </Container>
  )
}

export default Navbar