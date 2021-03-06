import * as React from 'react';
import  { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { StyledEngineProvider } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import { useHistory } from "react-router-dom";
import { getGoogleAuthUrl, loginGoogleUser, getToken } from '../Services/HttpApiCall';
import ReactDOM from "react-dom";
import SideDrawer from './sideDrawer';
import LandingPage from './landingPage'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
  useLocation
} from "react-router-dom";
import { setBearerToken } from '../Services/config';
const qs = require('qs');


const selectUser = state => state.user;



export default function Menu() {
    let history = useHistory();
    const goToLanding = ()=>{
        history.push('/landing');
    }
    
    return (
        <div>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid item xs={3}>
                        <SideDrawer/>
                    </Grid>
                    <Grid item xs={9}>
                        <LandingPage />
                    </Grid>
                </Grid>
            </Box>
        </div>
    );
}
