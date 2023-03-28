import React,{useState,useRef} from 'react'

import {Box,Paper,TextField,Button} from '@mui/material';
import NavigationBar from './NavigationBar';
import Swal from 'sweetalert2';
import { useHistory } from 'react-router';
const btnstyle={margin:'8px 0'}
const bcrypt = require('bcryptjs')
function ChangePass() {
    const [id, setid] = useState('')
    const [password, setpassword] = useState('')
    const [confpassword, setconfpassword] = useState('')
    const history=useHistory();
    const passRef = useRef(null)
    const cpassRef = useRef(null)

   

    const submitPass = (event)=>{
        event.preventDefault();
        let pass=document.getElementById("password").value
        const hashPass = bcrypt.hashSync(passRef.current.value, bcrypt.genSaltSync());

        let id = JSON.parse(sessionStorage.getItem('userdata')).id; 
        let _fname = JSON.parse(sessionStorage.getItem('userdata')).fname; 
        let _lname = JSON.parse(sessionStorage.getItem('userdata')).lname; 
        let _email = JSON.parse(sessionStorage.getItem('userdata')).email; 
        let _cpassword = JSON.parse(sessionStorage.getItem('userdata')).cpassword; 
  
        let _username = JSON.parse(sessionStorage.getItem('userdata')).username; 
        console.log(id);
        if(passRef.current.value===cpassRef.current.value){
                const URL="http://localhost:3001/users";
                    var newURl = `${URL}/${id}`
                    let formData={password:hashPass,email:_email,fname:_fname,lname:_lname,username:_username,cpassword:cpassRef.current.value };
                    fetch(newURl,{
                        method: 'PUT',
                        body: JSON.stringify(formData),
                        headers: {
                            "content-type": "application/json",
                            'Accept': 'application/json'
                        }
                    })
                    .then(res=> res.json())
                    .then(data=>{
                       alert("password updated")
                       history.push('/')
                        fetch(URL)
                        .then(res=>res.json())
                        .then(data=>{
                            console.log(data)
                        })
                        .catch(err =>
                            console.log(err)
                        )
                    })
                    
                        
        }
        else{
            alert('Password and confirm password are not same')
        }
    }
    const handler = (event)=>{
        const name = event.target.name;
        const value = event.target.value;

        console.log(name, value);

        setpassword({name:value})
        setconfpassword({name:value})
        
    
      
    }

    return (
        <div>
           <NavigationBar/>
            <div style={
                {content:"",
                position:'absolute',
               
                height: '100%',
                width: '100%',
                top: '65px',
                zIndex:'-1',
                left: '0px',
               }}>
                
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent:'center',
                        alignItems: 'center',
                        textAlign:'center',
                        flexWrap: 'wrap',
                        '& > :not(style)': {
                        m: 1,
                        mt:6,
                        width: 500,
                        height: 500,
                        },
                        '& .MuiTextField-root': 
                        { m: 1, width: '38ch',mt:5},
                    }}
                    >
                    <Paper elevation={3}>
                        <h2>Change Password</h2>
                        <TextField id="password" name="oldpassword" label=" Old Password" type="password"variant="outlined" value={JSON.parse(sessionStorage.getItem('userdata')).password} disabled >
                        </TextField>
                        <TextField id="password" name="password" 
                        label=" New Password" type="password"variant="outlined" className='label' id="password" onChange={handler} inputRef={passRef}>
                        </TextField >
                        <TextField id="confpassword" name="confpassword" 
                        label=" Confirm Password" type="password"variant="outlined" className='label'
                        onChange={handler} inputRef={cpassRef}>
                        </TextField>
                        <br></br>
                       
                     <Button variant="contained" onClick={submitPass}>Submit</Button>
                        
                    </Paper>
                    
                </Box>
                 
            </div>
        </div>
    )
}

export default ChangePass

    
                   


