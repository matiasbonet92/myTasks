import React from 'react'
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';

const Navbar = () => {
  return (
    <Container>
      <Grid container >
        <Grid item xs={12} sm={4} md={4} lg={4}>
          item 1
        </Grid>
        <Grid item xs={12} sm={4} md={4} lg={4}>
          item 2
        </Grid>
        <Grid item xs={12} sm={4} md={4} lg={4}>
          item 3
        </Grid>
      </Grid>
    </Container>
  )
}

export default Navbar