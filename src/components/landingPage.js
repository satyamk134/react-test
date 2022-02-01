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
import BasicForm from './BasicForm'
import AddProject from './AddProject';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
  useLocation
} from "react-router-dom";
import { setBearerToken } from '../Services/config';
const qs = require('qs');





export default function LandingPage() {

  let history = useHistory();
  return (
    <div>
        <h1>Add a project will come </h1>    
        <AddProject/>
    </div>
  );
}

const selectUser = state => state.user;
