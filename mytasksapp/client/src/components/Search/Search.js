import React from 'react'
import {FormGroup, FormControlLabel, Checkbox, TextField, InputAdornment } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';

const Search = () => {
  return (
    <>  
        <TextField label="Search" placeholder="Enter search.." InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
            )}}
        />
        <FormGroup style={{marginTop: 20}}>
            <FormControlLabel control={<Checkbox defaultChecked />} label="All" />
            <FormControlLabel control={<Checkbox />} label="Pending" />
            <FormControlLabel control={<Checkbox />} label="Completed" />
        </FormGroup>
    </>
  )
}

export default Search