import * as React from 'react';
import Menu from '../components/MenuComponent';
import LandingPage from '../components/landingPage';
import TimeTrack from '../components/TimeTrack';
import { Redirect, Route, Switch } from "react-router";
export default function HomeLayout (){
    React.useEffect(()=>{
        console.log("It will be called insode homelayout");
    })
    return (
        <div> 
            <Route exact path="/">
                <Menu />
            </Route>
            <Route exact path="/time-track">
                <TimeTrack />
            </Route>
            <Route exact path="/landing">
                <LandingPage />
            </Route>
        </div>
    )
}