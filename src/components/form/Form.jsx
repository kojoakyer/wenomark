import React from 'react'
import './Form.css'
import TextField from '@mui/material/TextField';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

function Form() {
    const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div className='form'>
        <form action="form-wrapper">
            <h3>Enter Your Work Email to Start Your Free Trial</h3>
            <div className="">
                <DriveFileRenameOutlineIcon/>
            </div>
            <TextField sx={{marginTop:'20px'}} className='form-input' type="text" label="First name" variant="standard" />
            <TextField sx={{marginTop:'20px'}} className='form-input'  type="text" label="Last name" variant="standard"/>
            <TextField sx={{marginTop:'20px'}} className='form-input'  type="text" label="Email" variant="standard"/>
            <TextField sx={{marginTop:'20px'}} className='form-input'  type="text" label="Standard" variant="standard"/>
            <FormControl variant="standard" sx={{ width:'100%',marginTop:'20px'}}>
                <InputLabel id="demo-simple-select-standard-label">Title</InputLabel>
                <Select
                  labelId="demo-simple-select-standard-label"
                  id="demo-simple-select-standard"
                  value={age}
                  onChange={handleChange}
                  label="Age"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
            </FormControl>
            <TextField sx={{marginTop:'20px'}} className='form-input'  type="text" label="Company" variant="standard"/>
            <TextField sx={{marginTop:'20px'}} className='form-input'  type="text" label="Standard" variant="standard"/>
            <TextField sx={{marginTop:'20px'}} className='form-input'  type="text" label="Standard" variant="standard" />
            <FormControl variant="standard" sx={{ width:'100%', marginTop:'20px'}}>
            <InputLabel id="demo-simple-select-standard-label">Ghana</InputLabel>
                 <Select
                   labelId="demo-simple-select-standard-label"
                   id="demo-simple-select-standard"
                   value={age}
                   onChange={handleChange}
                   label="Title"
                 >
                   <MenuItem value="">
                     <em>None</em>
                   </MenuItem>
                   <MenuItem value={10}>Ten</MenuItem>
                   <MenuItem value={20}>Twenty</MenuItem>
                   <MenuItem value={30}>Thirty</MenuItem>
                 </Select>
            </FormControl>
            <div className="form-btn">
                <button>Get Started</button>
            </div>
            
        </form>
    </div>
  )
}

export default Form