import React, { useState } from 'react';
import './Daftar.css';
import {Link} from 'react-router-dom';
import Navbar from './Navbar';

const Daftar = () => {

    const[username,setUsername] = useState('');
    const[email,setEmail] = useState('');
    const[password,setPassword] = useState('');

    const changeUsername = (e) => {
        const value= e.target.value
        setUsername (value)
    }
    const changeEmail = (e) => {
        const value= e.target.value
        setEmail (value)
    }
    const changePassword = (e) => {
        const value= e.target.value
        setPassword (value)
    }

    return (
        <div>
            <Navbar/>
            <div className="container" style={{marginTop:'100px',backgroundColor:'white', borderRadius:'0px', padding:'0px', boxShadow:'none'}}>
                <div className="row" style={{justifyContent:'center'}}>
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-body">
                                <div className="from-group">
                                <label>Username</label>
                                <input type="text" placeholder="Username" className="form-control" value={username} onChange={changeUsername}/>
                                </div>

                                <div className="from-group">
                                <label>Email</label>
                                <input type="text" placeholder="Email" className="form-control" value={email} onChange={changeEmail}/>
                                </div>

                                <div className="from-group">
                                <label>Password</label>
                                <input type="text" placeholder="Password" className="form-control" value={password} onChange={changePassword}/>
                                </div>

                                <button className="btn btn-primary" style={{marginTop:'10px'}}>Daftar</button>{' '}

                                <Link to='/sign-up' style={{marginTop:'10px'}} className="btn btn-warning">Batal</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Daftar;