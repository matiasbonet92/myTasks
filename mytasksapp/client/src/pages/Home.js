import React from 'react'
import Tasks from '../components/Tasks/Tasks.js'
import Navbar from '../components/NavBar/Navbar.js'
import Search from '../components/Search/Search.js'
import { Grid } from '@mui/material';

const Home = () => {
  return (
    <>
        <Navbar/>
        <Grid container spacing={3} marginTop={3} padding={2}>
            <Grid item xs={12} sm={4} md={3} lg={3}>
              <Search/>
            </Grid>
            <Grid item xs={12} sm={8} md={9} lg={9}>
              <Tasks/>
            </Grid>
        </Grid>
    </>
  )
}

export default Home