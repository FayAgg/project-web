import React,{ useEffect, useState } from "react";
import validation from "./validation";
import axios, { Axios } from 'axios';

const SignupForm = ({submitForm}) => {

   
    const [values, setValues] = useState({
        fullname: "",
        email: "",
        password: "",
    });

    const [errors,setErrors] = useState({});
    const [dataIsCorrect,setDataIsCorrect] = useState(false);

    const handleChange = (event) => {
        setValues({
            ...values,
            [event.target.name] : event.target.value,
        });
    };

    const Demo=()=>
    {
        console.log('password is ',values.password)
        console.log('username is again ',values.fullname)
        console.log('email is again ',values.email)
        
        
        axios.post('http://localhost:5000/api/insert',{newUsername: values.fullname, newEmail: values.email, newPassword: values.password })
        .then(response => {
            console.log(response)
        })
        .catch(error => {
            console.log(error)
        })
        
    }

    const handleFormSubmit = (event) => {
        
        event.preventDefault();
        setErrors(validation(values));
        setDataIsCorrect(true);
    };


    useEffect(()=>{
        if(Object.keys(errors).length === 0 && dataIsCorrect){
         submitForm(true);
        }
    }, [errors]);

    return (
     <div className="container">
        <div className="app-wrapper">
        <div>
        <h2 className="title sign up">Create Account</h2>
        </div>
        <h3 className="title log in">Log In</h3>

    <form className="form-wrapper">

    

        <div className="fullname">
            <label className="label">Full Name</label>
            <input 
                id = "fullname"
                className="input" 
                type="text"
                name="fullname"
                value={values.fullname} 
                onChange={handleChange}
               
                 />
                {errors.fullname && <p className="error">{errors.fullname}</p>}

            </div>
            <div className="email">
            <label className="label">Email</label>
            <input 
                id = "email"
                className="input" 
                type="email"
                name="email"
                value={values.email} 
                onChange={handleChange}
                
                />
               {errors.email && <p className="error">{errors.email}</p>}

            </div>
            <div className="password">
            <label className="label">Password</label>
            <input 
                id = "password"
                className="input" 
                type="password"
                name="password"
                value={values.password} 
                onChange={handleChange}
                
                />
               {errors.password && <p className="error">{errors.password}</p>}

            </div>
            <div>
                <button className="submit" onClick={Demo }>
                Sign Up
                </button>
             </div> 
  
        
                </form>
                </div>
     </div>
    
     
    );

};

export default SignupForm;


