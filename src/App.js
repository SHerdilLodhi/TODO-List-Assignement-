import React, { useState } from 'react'
import "./App.css" 
import TextField from '@mui/material/TextField'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import { Typography } from '@mui/material'
import List from './List'
export default function App() {
 

  const [input , setInput] = useState("")
  const [select ,setSelect ]= useState("")  
  const [data , setData ] = useState([])

 

  function HandleList (e)
{
  
  
  setSelect(e.target.value)

  
}  

function inputValue (e){
      if( e.key == "Enter"){
       if(e.target.value == ""){
        return alert("Empty Todo not allowed")
       }
       let check=data.filter((elm)=>{
        return elm.todo == e.target.value
       })

       console.log(check);
       
       
       if (check.length>0){
        alert("Todo already Entered!")
       }else{
        setInput("")
        setData( [...data, {todo: input, status : "incomplete"}] ) 
   
       }
    
         }
   }

  return (
    <div>
      <div className='headdiv'><h1 className='heading' ><Typography variant='h3' color={"#8FE3CF"}>Todo</Typography></h1></div>
      <div className="div1">

<div className="input2">


<TextField

 className='input'
  id="demo-helper-text-misaligned"
  label="Todo"
  value={input} onChange={(e)=> setInput(e.target.value)} onKeyDown={(e)=> inputValue(e)} type={"text"}
/>




<FormControl  className='select'>
  <InputLabel id="demo-simple-select-label">Select</InputLabel>
  <Select 
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={select}
    label="Select"
    onChange={(e)=> HandleList(e)} 
  >
    <MenuItem value="All">All</MenuItem>
    <MenuItem value="Complete">Complete</MenuItem>
    <MenuItem value="incomplete">Incomplete</MenuItem>
  </Select>
</FormControl>


</div>

      <List select={select} data={data} setData={setData} />
      </div>
      

    </div>
  )
}
