import React, { Component, useState } from 'react'
import { AppBar } from '@mui/material';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Swal from "sweetalert2"; 
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import { useHistory } from 'react-router';
 
function NavigationBar() {
  let history=useHistory();

 const Logout=()=>{
   
    sessionStorage.clear()
    Swal.fire({
      icon: 'warning',
    
      text: 'Are you Sure, You would like to Logout?',
    
    })
  
    history.push('/')
  
   
  }
    return (
    
        <>
        
          <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
         
          </IconButton>
          
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
           
      <Button  component={Link} to='/dashboard' style={{textDecoration:'none',color:'white',margin:'10px',fontSize:'15px'}} exact activeClassName="active">Home</Button>&nbsp;
    
      <Button  component={Link} to='/cpassword' style={{textDecoration:'none',color:'white',margin:'10px',fontSize:'15px'}} exact activeClassName="active">Change Password </Button>&nbsp;
      <Button  style={{lineBreak:'none',color:'white',margin:'5px' ,fontSize:'15px', color:'black'}} >  <b>{` WELCOME :${JSON.parse(sessionStorage.getItem("userdata")).username}`}</b></Button>
      <Button  style={{textDecoration:'none',color:'white',margin:'10px',fontSize:'15px'}} exact activeClassName="active" onClick={Logout}>Logout</Button>&nbsp;
    
          </Typography>
       
        </Toolbar>
      </AppBar>
        </>
    )
}

export default NavigationBar
