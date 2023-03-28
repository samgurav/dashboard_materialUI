
import * as React from 'react';
import { Component } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
import { useRef } from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useState,useEffect } from 'react';
import axios from 'axios';
import { Paper } from '@mui/material';
import { Redirect,Link } from 'react-router-dom';
import { useHistory } from 'react-router';
 const paperStyle={padding:20,height:'80vh', width:350, margin:'60px auto'}
const URL = "http://localhost:3001/users";
const bcrypt = require('bcryptjs')
function Login() {
    const [userdata, setdata] = useState('')
    const [userdetails, setuserdetails] = useState([])
    const history=useHistory()
    const emailInput = useRef(null);
    const passInput = useRef(null);

    const handler = (event)=>{
        const name = event.target.name;
        const value = event.target.value;
    
        setdata({
          [name]: value
        })
        // console.log(this.state)
    }
    const submit=(event)=>{
        event.preventDefault();
     
        var data = false;
        
        userdetails.forEach(user => {
            const doesPasswordMatch = bcrypt.compareSync(passInput.current.value, user.password)
                if(user.email===emailInput.current.value&& doesPasswordMatch){
                        let arr=user
                        alert('login succesfully');
                      history.push('/dashboard');
                        if(sessionStorage.getItem('userdata')!==undefined){
                            sessionStorage.setItem('userdata', JSON.stringify(arr))
                        }
                        
                        data= true;
                        return
                }
         
        });
        if(data!==true){
            alert('Email id or password is incorrect');
          history.push('/');
        }
        
        
    }
    useEffect(() => {
        const URL = "  http://localhost:3001/users";
        fetch(URL)
        .then(res=>res.json())
        .then(data=>{
         
            setuserdetails(data)
        })
    }, [])
    return (
        <Paper elevation={10} style={paperStyle }>
        <Container component="main" maxWidth="xs">
            <Box
                sx={{
                    marginTop: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Avatar sx={{ m: 1, bgcolor: 'blue' }}>
                  
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign in
                </Typography>
                <Box component="form" onSubmit={submit}  sx={{ mt: 1 }}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        inputRef={emailInput}
                        onChange={handler}
                       
                        autoFocus
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        inputRef={passInput}
                        onChange={handler}
                        id="password"
                        autoComplete="current-password"
                      
                    />
                 
                    <Button
                     
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Sign In
                    </Button>
                   
                    <p>New User? Register Here</p>
                       <Button
                      component={Link} to='/register'
                      exact activeClassName="active"
                     type="submit"
                     fullWidth
                   
                     sx={{ mt: 1, mb: 2 }}
                 >
                     Sign Up
                 </Button>
                      
                </Box>
         
              
            </Box>
            </Container>
        </Paper>
    )
}

export default Login
