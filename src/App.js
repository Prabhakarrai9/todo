import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Header from './Component/Header';
import Todo from './Component/Todo/Todo';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import {useState} from 'react';
import './App.css';

function App() {
const [name, setName] =  useState("");
const [email,setEmail] = useState("");
  return(
    <div className="App">
    <Header/>
    <div className='form'>
    <Stack spacing={2} direction="row">
    <TextField id="outlined-basic" label="Outlined" label ='name' variant="outlined" placeholder='name'/>
    <TextField id="outlined-basic" label="Outlined" label ='email' variant="outlined" placeholder='email'/>
    <Button variant="contained" color ="success">Add</Button>
    </Stack>
    </div>
    <Todo/>
    </div>
  );
}
export default App;