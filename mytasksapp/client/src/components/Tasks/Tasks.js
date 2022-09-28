import react, {useEffect, useState} from 'react';
import * as api from '../../api/index.js';
import { Grid, Card, CardContent, CardHeader, CardActions, Typography, Avatar, IconButton, Divider, Badge} from '@mui/material'
import todoLogo from '../../media/todoLogo.png'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import PendingActionsIcon from '@mui/icons-material/PendingActions';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from 'react-router-dom'

const Tasks = () => {

    const [tasks,setTasks] = useState([]);

    const getData = async () => {
        const {data} = await api.fetchTasks();
        setTasks(data);
        console.log(data);
    }

    const handleDelete = async (id) => {
        const deletedTask = await api.deleteTask(id);
        console.log(deletedTask);
        getData();
    }

    useEffect(()=>{
        getData();
    },[]);

    return (
        <>
            <Grid container spacing={2}>
                {tasks?.map((task)=>{
                    return(
                        <Grid item xs={12} sm={6} md={6} lg={4} key={task._id}>
                            <Card>
                                <CardHeader
                                    avatar={<Avatar src={todoLogo}/>}
                                    title={task.title}
                                    subheader={task.createdAt.slice(0,10)}
                                    action={
                                        <>
                                        <Link to={'/edittask/' + task._id}  style={{textDecoration: 'none', color: 'inherit'}}>
                                            <IconButton>
                                                <EditIcon color="primary"/>
                                            </IconButton>
                                        </Link>
                                        <IconButton onClick={()=>handleDelete(task._id)}>
                                            <DeleteIcon color="error"/>
                                        </IconButton>
                                        </>
                                    }
                                />
                                <CardContent>
                                    <Typography variant="body">{task.description}</Typography>
                                </CardContent>
                                <Divider/>
                                <CardActions>
                                    <Grid container>
                                        <Grid item xs={12} sm={12} md={4} lg={4}>
                                        {
                                            !task.status ? <IconButton>
                                                <PendingActionsIcon color="warning"/>
                                                <Typography marginLeft={1} variant="body2">Pending</Typography>
                                            </IconButton> : <IconButton>
                                                <CheckCircleIcon color="success"/>
                                                <Typography marginLeft={1} variant="body2">Completed</Typography>
                                            </IconButton>
                                        }
                                        </Grid>
                                        <Grid item xs={12} sm={0} md={4} lg={4}></Grid>
                                        <Grid item xs={12} sm={12} md={4} lg={4}>
                                            <Link to={'/taskdetails/' + task._id}  style={{textDecoration: 'none', color: 'inherit'}}>
                                                <IconButton>
                                                    <Typography marginRight={1} variant="body2">Notes</Typography>
                                                    <Badge badgeContent={task.comments.length} color="primary">
                                                        <QuestionAnswerIcon color="action" />
                                                    </Badge>
                                                </IconButton>
                                            </Link>
                                        </Grid>
                                    </Grid>
                                </CardActions>
                            </Card>
                        </Grid>
                    )
                })}
            </Grid>
        </>
    )
}

export default Tasks