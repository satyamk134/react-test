import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import ProjectsList from './ProjectsList';
import { useFormik } from 'formik';
import Box from '@material-ui/core/Box';
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




export default function AddProject() {

    let dispatch = useDispatch();
    const [open, setOpen] = React.useState(false);


    const validationSchema = yup.object({
        projectName: yup
          .string('Enter your project name')
          .required('project name is required')
      });
    
      
      const formik = useFormik({
        initialValues: {
          projectName: ''
    
        },
        validationSchema: validationSchema,
        onSubmit: values => {
            console.log(values);
            dispatch({type:'Add_PROJECT',payload:values});
            handleClose();
        }
      });

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    
    return (
        <div>
            <div>
                <Button variant="outlined" onClick={handleClickOpen}>
                    Add Project
                </Button>
                <Dialog open={open} onClose={handleClose}>
                    <DialogTitle>Subscribe</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Enter project name
                        </DialogContentText>
                        <form onSubmit={formik.handleSubmit} className="login-form">
                            <TextField label="projectName" variant="standard" className="myform-element" id="projectName"
                                name="projectName"
                                type="text"
                                onChange={formik.handleChange}
                                value={formik.values.projectName}
                                error={formik.touched.projectName && Boolean(formik.errors.projectName)}
                                helperText={formik.touched.projectName && formik.errors.projectName}
                            />

                            <Box className='login-button'>
                            <Button type="submit">Add</Button>
                            </Box>
                        </form>
                    </DialogContent>
                    <DialogActions>
                        
                    </DialogActions>
                </Dialog>
            </div>
            <ProjectsList />


        </div>
    );
}
const selectUser = state => state.user;
