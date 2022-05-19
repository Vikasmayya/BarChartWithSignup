import { Button, FormControlLabel, FormHelperText } from '@mui/material';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import React, { useState } from 'react';
import { useNavigate  } from 'react-router-dom';

const Form = () => {
  let history = useNavigate();
    function RedBar() {
        return (
          <Box
            sx={{ height: 20, backgroundColor: 'transparent' }}
          />
        );
    }

    const [data,setData] = useState({
      email:"",
      name:"",
      password:'',
      cpass:"",
      phone:"",})

    const [error,setError] = useState("");
       
    const handleChange = (event)=>{
      const {name,value} = event.target;
      setData((preVal) =>{
          return{...preVal, [name] : value,}
      });
    };

    const handleSubmit = (event) => {
      event.preventDefault();
      if ( data.password !==  data.cpass ) {
          setError("Password and Confirm Passwords don't match.")
      } 
      else {
        setData({
            name :"",
            email :"",
            password :"",
            cpass :"",
            phone:""
        });
        history("./dashboard");
      }
    }
    
  return (
    <div className="form">
    <div className="form__details">
        <h2>Create an account</h2>
      <form onSubmit={handleSubmit}>
        <RedBar/>
        <div className="form--text">
        <label htmlFor="email">Your email Address</label>
        <input type="text" id="email" name="email" placeholder="Enter your Email Address" value={data.email} title="eg: abc@xyz.com" onChange={handleChange} pattern="[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-zA-Z]{2,4}" required/>
        </div>
        <RedBar/>
        <div className="form--text">
        <label htmlFor="password">Your password</label>
        <input type="password" id="password" name="password" value={data.password} onChange={handleChange} placeholder="Enter your password" required/>
        <FormHelperText error>{error}</FormHelperText>
        </div>    
        <RedBar/><div className="form--text">
        <label htmlFor="cpass">Confirm your password</label>
        <input type="password" id="cpass" name="cpass" value={data.cpass} onChange={handleChange} placeholder="Enter your password" required/>
        </div>
        <RedBar/>    
        <div className="form--text">
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" name="name" value={data.name} onChange={handleChange} placeholder="Enter your Name" required/>
        </div>
        <RedBar/>
        <div className="form--text">
        <label  htmlFor="phone">Your phone number</label><br/>
        <input type="text" id="phone" name="phone" value={data.phone} onChange={handleChange} placeholder="Enter your Phone Number" pattern="[6-9]{1}[0-9]{9}" required/>
        </div>
        <RedBar/>
        <FormControlLabel
          value="end" labelPlacement="end"
          control={<Checkbox defaultChecked />} label="I read and agree Terms and Conditions" size="small" 
          sx={{ '& .MuiTypography-root': { fontWeight: "bold",color: 'black'},}}
        />
        <RedBar/>
        <Button type='submit' variant='contained' color='primary'>Create Account</Button>
      </form>
    </div>
    </div>
  )
}

export default Form;