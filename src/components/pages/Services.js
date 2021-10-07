import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Menutab from '../Menutab';
import Navbar from '../Navbar';


export default function Services(){
    return(
        <>
        <Router>
        <Navbar/>
        <Menutab />
        </Router>
        </>
    )
}