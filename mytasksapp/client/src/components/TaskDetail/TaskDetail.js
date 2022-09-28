import React, {useEffect, useState} from 'react'
import * as api from '../../api/index.js'
import { Grid, Typography, Card, CardContent } from '@mui/material'
import { useParams } from 'react-router-dom'

const TaskDetail = () => {

  const [task, setTask] = useState([]);
  const {id} = useParams();

  const getComments = async() => {
      const {data} = await api.fetchTaskById(id);
      setTask(data);
      console.log(data);
  }

  useEffect(()=>{
    getComments();
  },[]);

  return (
    <>
      <Grid container>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Typography variant="h4">{task.title}</Typography>
          <Typography variant="body2">{task.description}</Typography>
        </Grid> 
        <Grid item xs={12} sm={12} md={12} lg={12} marginTop={2}>
          <Typography variant="subtitle">Notas:</Typography>
        </Grid> 
        {task?.comments?.map((item) => {
          return(
            <Grid item xs={12} sm={12} md={12} lg={12} marginTop={2} key={item._id}>
              <Card>
                <CardContent>
                  {item.commentCreatedAt.slice(0,10) + ": " +item.comment}
                </CardContent>
              </Card>
            </Grid> 
          )
        })}
      </Grid>
    </>
  )
}

export default TaskDetail