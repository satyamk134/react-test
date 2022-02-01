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
export default function BasicForm(loginMethods){
const validationSchema = yup.object({
    emailId: yup
      .string('Enter your email')
      .email('Enter a valid email')
      .required('Email is required'),
    password: yup
      .string('Enter your password')
      .min(8, 'Password should be of minimum 8 characters length')
      .required('Password is required'),
    age:yup
    .string('select your age')
    .required('Age is required'),
  });

  let userInfo = useSelector(selectUser);
  let dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      emailId: '',
      password:'',
      age:10

    },
    validationSchema: validationSchema,
    onSubmit: values => {
        console.log(values);
      
    //   loginMethods.setEmailId(values.emailId);
    //   loginMethods.setPassword(values.password);
    //   dispatch({type:'SET_LOGIN_STATUS',payload:{loginStatus:"submitted",isLoggedIn:false}});
      //loginMethods.handleLogin();
    },
  });
  const handleChange = ()=>{
      console.log("handle change called");
  }
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={4}>
            <form onSubmit={formik.handleSubmit} className="login-form">    
                <TextField  label="Email id" variant="standard" className="myform-element"  id="emailId"
                name="emailId"
                type="email"
                onChange={formik.handleChange}
                value={formik.values.emailId}
                error={formik.touched.emailId && Boolean(formik.errors.emailId)}
                helperText={formik.touched.emailId && formik.errors.emailId}
                />

                <TextField  label="password" variant="standard" className="myform-element"  id="password"
                    name="password"
                    type="password"
                    onChange={formik.handleChange}
                    error={formik.touched.password && Boolean(formik.errors.password)}
                    helperText={formik.touched.password && formik.errors.password}
                    value={formik.values.password}
                />

                <div>  
                <FormControl fullWidth className="myform-element">             
                    <InputLabel id="demo-simple-select-label">Age</InputLabel>
                    <Select
                    labelId="age"
                    id="age"
                    value={formik.values.age}
                    label="Age"
                    name="age"
                    onChange={formik.handleChange}
                    >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                </FormControl>
                </div>
                

                <Box className='login-button'>
                    <LoadingButton   type="submit" loading={userInfo.loginStatus == 'submitted'}  variant="outlined">
                        LOGIN
                    </LoadingButton>  
                </Box>    
            </form>
        </Grid>
      </Grid>
    </Box>

    
  );
};

const selectUser = state => state.user;

