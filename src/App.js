 import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from'./components/pages/Home';
import Services from'./components/pages/Services';
import Products from'./components/pages/Products';
import SignUp from'./components/pages/SignUp';
import Daftar from './components/Daftar';
import LogIn from './components/LogIn';
import LoginForm from './components/LoginForm';
import SignIn from './components/pages/SignIn';
// IMPORT DESKRIPSI
import Deskripsi1 from './components/Deskripsi1';
import Deskripsi2 from './components/Deskripsi2';
import Deskripsi3 from './components/Deskripsi3';
import Deskripsi4 from './components/Deskripsi4';
import Deskripsi5 from './components/Deskripsi5';
import Deskripsi6 from './components/Deskripsi6';
import Deskripsi7 from './components/Deskripsi7';
import Deskripsi8 from './components/Deskripsi8';
import Deskripsi9 from './components/Deskripsi9';
import Deskripsi10 from './components/Deskripsi10';
import Deskripsi11 from './components/Deskripsi11';
import Deskripsi12 from './components/Deskripsi12';
import Deskripsi13 from './components/Deskripsi13';
import Deskripsi14 from './components/Deskripsi14';
import Deskripsi15 from './components/Deskripsi15';
import Deskripsi16 from './components/Deskripsi16';
import Deskripsi17 from './components/Deskripsi17';
import Deskripsi18 from './components/Deskripsi18';

import Coba from './components/pages/Coba';

 function App(){
   return(
     <>
     <Router>
       <Switch>
         <Route path='/' exact component={Home}/>
         <Route path='/services' component={Services}/>
         <Route path='/products' component={Products}/>
         <Route path="/navbar" component={Navbar}/>
         <Route path='/sign-up' component={SignUp}/>
         <Route exact path="/login" component={LogIn}/>
        <Route path="/daftar" component={Daftar}/>
        <Route path="/loginform" component={LoginForm}/>
        <Route path="/signin" component={SignIn}/>

        {/* DESKRIPSI */}
        <Route path="/deskripsi1" component={Deskripsi1}/>
        <Route path="/deskripsi2" component={Deskripsi2}/>
        <Route path="/deskripsi3" component={Deskripsi3}/>
        <Route path="/deskripsi4" component={Deskripsi4}/>
        <Route path="/deskripsi5" component={Deskripsi5}/>
        <Route path="/deskripsi6" component={Deskripsi6}/>
        <Route path="/deskripsi7" component={Deskripsi7}/>
        <Route path="/deskripsi8" component={Deskripsi8}/>
        <Route path="/deskripsi9" component={Deskripsi9}/>
        <Route path="/deskripsi10" component={Deskripsi10}/>
        <Route path="/deskripsi11" component={Deskripsi11}/>
        <Route path="/deskripsi12" component={Deskripsi12}/>
        <Route path="/deskripsi13" component={Deskripsi13}/>
        <Route path="/deskripsi14" component={Deskripsi14}/>
        <Route path="/deskripsi15" component={Deskripsi15}/>
        <Route path="/deskripsi16" component={Deskripsi16}/>
        <Route path="/deskripsi17" component={Deskripsi17}/>
        <Route path="/deskripsi18" component={Deskripsi18}/>

        <Route path="/coba" component={Coba}/>
       </Switch>
       </Router>
     </>
   );
 }

 export default App;