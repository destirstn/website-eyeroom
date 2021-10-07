import React, { useState } from 'react';
import '../../App.css';
import LogIn from '../LogIn';

export default function SignIn(){

    const adminUser = {
        email: "miananurhlz@gmail.com",
        password: "miana123"
    }
    const [user, setUser] = useState({name:"", email:""});
    const [error, setError] = useState("");

    const Login = details => {
        console.log(details);

        if (details.email == adminUser.email && details.password == adminUser.password){
       
            console.log("Logged in");
            setUser({
                name: details.name,
                email: details.email
            });
        } else {
            console.log("Details do not match")
            setError("Details do not match");
        }
    }

    const Logout = () => {
        setUser({name:"", email:""});
    }

    return (
        <div>
            {(user.email !="") ? ( 
            <div className="container">
            <ul className="gallery">
            <li>
                <a href=" ">
                <img src="images/img-1.jpg" style={{}}/>
                <span>Suplemen Terapi Penunjang</span>
                 </a>
            </li>
            <div class="clear"></div>
            </ul>
                
            </div> 
            ) : (
                <LogIn Login={Login} error={error}/>
            )}
        </div>
    );
}