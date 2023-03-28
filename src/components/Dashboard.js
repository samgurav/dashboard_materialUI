import React,{useState,useRef} from 'react'
import NavigationBar from './NavigationBar'
import { styled } from '@mui/material/styles';
import {Grid,Paper,Box, TextField ,Button} from '@mui/material';
import Swal from 'sweetalert2';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { height } from '@mui/system';

function Dashboard() {
    const [state, setState] = useState({ category: [{id:1, tit: "Food" ,desc:'Veg'}] });
    let titleRef = useRef(null);
    let descRef = useRef(null);
  const [title,setTitle]=useState('')
  const [desc,setDescription]=useState('')
  const[toggleSubmit,setToggleSubmit]=useState(true);
  const [iseditid,setiseditid] = useState(false)
    const add = (events) => {
       
        events.preventDefault();
        let t1=document.getElementById("title").value
        console.log(t1)
        if(!t1=="" ){
        let title = { title: titleRef.current.value }
        let desc = { desc: descRef.current.value }
       
        setState({ category: [...state.category, { tit: title.title,desc:desc.desc }] });
        console.log(state.category)
        document.getElementById('title').value = "";
        Swal.fire(
            'Good job!',
            'Data is Added Successfully',
            'success'
          )
        }else{
            alert("fields are empty")
        }
  
}
    const del = (id) => {

        const old = [...state.category];
        const category = old.filter((element, i) => {
            return i !== id
        })
        setState({ category: category })
      // alert("Are you sure, you want to delete data?")

    }


  //   const update = (id, tit,desc) => {
  //     document.getElementById('title').value = tit;
  //     document.getElementById('desc').value = desc;
    
    
  // }
  const handler = (event)=>{
    const { name, value } = event.target;
    setState({
        [name]: value
    })
}
  const edit = () =>{
    console.log('edit')
    const title = titleRef.current.value
    const desc = descRef.current.value

    const variable = state.category
    variable[iseditid] = {tit:title,desc:desc }
    console.log(variable)
    setState({ category: [...variable] });
    setToggleSubmit(true)
    alert("data updated successfully")
}
  const update = (id,task) => {
    setToggleSubmit(false)
    setiseditid(id)
    
    console.log(task.tit)
    console.log(task.desc)
    titleRef.current.value = task.tit
    descRef.current.value = task.desc

}


  


    const Item = styled(Paper)(({ theme }) => ({
        ...theme.typography.body2,
        padding: theme.spacing(1),
        color: theme.palette.text.secondary,
      }));


    return (
        <div>
            <div>

<NavigationBar/>
<Grid container>
    <Grid item xs={3}
     sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
      
       
        height:600,
     
        borderRadius:'10px',
        },
    }}
    >
        <Item>
           
            {/* <TextField type="text" className="form-control" placeholder="Enter Task" id="title" inputRef={titleRef} /> */}
            <Grid container spacing={2}>
              <Grid item xs={12} sm={12} style={{marginTop:'100px'}}>
                <TextField
                  autoComplete="given-name"
                 
                  required
                  type="text"
                  fullWidth
                  id="title"
                //  onChange={onchange}
                 onChange={handler}
                  inputRef={titleRef}
                  label="Category"
               
                  autoFocus
                ></TextField>
                    </Grid>
                    <Grid item xs={12} sm={12}>
                  <TextField
                  autoComplete="given-name"
                  className="head"
                  required
                  type="text"
                  onChange={handler}
                  fullWidth
                  id="desc"
                inputRef={descRef}
                  label="Description"
               
                  autoFocus
                ></TextField>
                </Grid>
        
          
      
          </Grid>
            {/* <label>Description</label>
            <input className="head"/> */}
            <br/>
            {/* <Button
              type="submit"
              fullWidth
              value="Add"
              variant="contained"
              onClick={add}
              sx={{ mt: 3, mb: 2 }}
            >
                
             Add
            </Button> */}
            {
              toggleSubmit? 
              <Button
              type="submit"
              fullWidth
              value="Add"
              variant="contained"
              onClick={add}
              sx={{ mt: 3, mb: 2 }}
            >
                
             Add
            </Button>
            :
            <Button
            type="submit"
            fullWidth
            value="Edit"
            variant="contained"
            onClick={edit}
            sx={{ mt: 3, mb: 2 }}
          >
              
           Edit
          </Button>
           
            }
            {/* <input type="submit" value="Add" className="btn btn-success" onClick={add} /> */}
            {/* {state.category.map((task, id) =>
                                <tr key={id}>
                                    <td>{id + 1}</td>
                                    <td sidebars>{task.tit}</td>

                                    <td>
                                        <button className="btn btn-danger" onClick={() => { del(id) }}>Delete</button> &nbsp;
                                        <button className="btn btn-warning text-white" onClick={() => { update(id, task.tit) }}>Update</button>

                                    </td>
                                </tr>
                            )} */}
           
        </Item>
    </Grid>
    <Grid item xs={9}>
        <Item>
       
    
            <h4 className='head'>
Welcome {JSON.parse(sessionStorage.getItem('userdata')).fname}  {JSON.parse(sessionStorage.getItem('userdata')).lname} </h4>
            <Box
            sx={{
                display: 'flex',
                flexWrap: 'wrap',
                '& > :not(style)': {
                m: 1,
                width: 1000,
             
                borderRadius:'10px',
                },
            }}
            >
            {/* <Paper elevation={0} />
            <Paper /> */}
            <Paper elevation={10} style={{backgroundColor:'white'}}>
                <h4>Category Details</h4>
            {state.category.map((task, id) =>
                              
                         
     <TableContainer component={Paper} className="container" style={{marginTop:'20px',padding:'10px'}}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow style={{background:'#007acc'}}>
            <TableCell>ID</TableCell>
            <TableCell align="right">Category</TableCell>
            <TableCell align="right">Description</TableCell>
            <TableCell align="right"> Action </TableCell>
           
          </TableRow>
        </TableHead>
        <TableBody>
         
            <TableRow
              key={id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              style={{background:'#ccebff'}}
            >
              <TableCell component="th" scope="row">
                {id+1}
              </TableCell>
              <TableCell align="right">{task.tit}</TableCell>
              <TableCell align="right">{task.desc}</TableCell>
              <TableCell align="right">
              <button className="btn btn-danger" onClick={() => { del(id) }}>Delete</button> &nbsp;
             <button className="btn btn-warning text-white" onClick={() => { update(id, task) }}>Update</button>

          
                  </TableCell>
           
            </TableRow>
         
        </TableBody>
      </Table>
    </TableContainer>
       )} 
                          
            </Paper>
           
            </Box>    
        </Item>
        <Item>
     
        </Item>
    </Grid>
</Grid>
</div>
        </div>
    )
}



export default Dashboard
