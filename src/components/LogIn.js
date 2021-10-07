import React, { useState } from 'react';
import './LogIn.css'; 
import {Link} from 'react-router-dom';
import Navbar from './Navbar';

function LogIn({ Login, error }) {
    const [details, setDetails] = useState({name:"", email:"", password:""});

    const submitHandler = e => {
        e.preventDefault();

        Login(details);
    }


// const LogIn = () => {

//     const [username, setUsername] = useState ('');
//     const [password, setPassword] = useState ('');

//     const onChangeUsername = (e) => {
//         const value= e.target.value
//         setUsername (value)
//     }

//     const onChangePassword = (e) => {
//         const value= e.target.value
//         setPassword (value)
//     }

    return (
        <>
        <Navbar/>
        <form onSubmit={submitHandler}>
            <div className="container" style={{marginTop:'100px', backgroundColor:'white', borderRadius:'0px', padding:'0px', boxShadow:'none'}}>
            <div className="form-inner">
                {/* <h2>Login</h2>
                {(error !="") ? ( <div className="error">{error}</div>) : ""}  */}

                <div className="row" style={{justifyContent:'center', padding:'0px'}}>
                    <div className="col-md-6">
                        <div className="card p-4">
                        <div className="card-body">
                            <h2>Login</h2>
                            {(error !="") ? ( <div className="error" style={{color:'red'}}>{error}</div>) : ""}

                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input type="email" name="email" placeholder="Email" id="email" className="form-control" onChange={e => setDetails({...details, email: e.target.value})} value={details.email}/>
                            </div>

                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input type="password" name="password" placeholder="Password" id="password" className="form-control" onChange={e => setDetails({...details, password: e.target.value})} value={details.password}/>
                            </div>

                            <input className="btn btn-primary" style={{marginTop:'10px'}} type="submit" value="LOGIN"></input>
                           
                            <div className="col-md-6 text-right" style={{marginTop:'15px', textAlignh:'right'}}>
                            <Link to='/daftar' className="pull-right">Halaman Daftar
                            </Link>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>
        </>
    );
}

export default LogIn;
