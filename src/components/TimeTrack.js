import React from 'react';
import { useFormik } from 'formik';
import Button from '@mui/material/Button';
import Box from '@material-ui/core/Box';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useSelector,useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import   './css/LoginForm.css';
import * as yup from 'yup';
import LoadingButton from '@mui/lab/LoadingButton';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import SideDrawer from './sideDrawer'
import TimeTrackList from './TimeTrackList';

export default function TimeTrack(loginMethods){
const validationSchema = yup.object({
    task: yup
      .string('Enter your task')
      .required('Email is required'),
    project: yup
      .string('select project')
      .required('project  is required')
  });

  let userInfo = useSelector(selectUser);
  let dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      task: '',
      project:'',
    },
    validationSchema: validationSchema,
    onSubmit: values => {
        console.log(values);
        dispatch({type:'ADD_TIME_TRACK',payload:values});
    
    },
  });
  const handleChange = ()=>{
      console.log("handle change called");
  }
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={4}>
            <SideDrawer/>
        </Grid>
        <Grid item xs={4}>
            <form onSubmit={formik.handleSubmit} className="login-form">    
                <TextField  label="task" variant="standard" className="myform-element"  id="task"
                name="task"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.task}
                error={formik.touched.task && Boolean(formik.errors.task)}
                helperText={formik.touched.task && formik.errors.task}
                />
                <div>  
                <FormControl fullWidth className="myform-element">             
                    <InputLabel id="demo-simple-select-label">project</InputLabel>
                    <Select
                    labelId="project"
                    id="project"
                    value={formik.values.project}
                    label="project"
                    name="project"
                    onChange={formik.handleChange}
                    >

                    {userInfo.projects.map((row,i) => (
                        <MenuItem value={row}>{row}</MenuItem>
                    ))} 
                    </Select>

                    <Button type="submit">Add</Button>
                </FormControl>
                </div>
                

               
            </form>
        </Grid>
      </Grid>

      <Grid container spacing={2}>
      <Grid item xs={4}>
            
        </Grid>
        <Grid item xs={8}>
            <TimeTrackList />
        </Grid>
        
      </Grid>
    </Box>

    
  );
};

const selectUser = state => state.user;

