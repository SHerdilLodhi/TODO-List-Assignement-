import { IconButton } from "@mui/material";
import React, { useEffect } from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import { useState } from "react";
import useEdit from "./UseEdit";
import useDone from "./useDone";
import useRemove from "./useRemove";

export default function List({ data, setData, select }) {
 
    const [duplicate , setDuplicate]= useState(data)

    useEffect(()=> {

        setDuplicate(data)

        if(select == "incomplete" ){
            setDuplicate(data.filter((abc)=>{
                return abc.status == "incomplete"
            }))
        }
        if(select == "Complete" ){
            setDuplicate(data.filter((abc)=>{
                return abc.status == "Complete"
            }))
        }
        if(select == "All" ){
            setDuplicate(data)
        }

    },[data,select])

    
 function Edit(Edited){

  let input = prompt("Edit");

  let editedData  =  useEdit(data,input,Edited)


  if(editedData.includes(null)){

  }else{
    setData(editedData) 
  }

     
}





 function Done(todo) {
 
    let doneData =  useDone (data,todo)
    setData(doneData)


  }


    function Remove(tobeRemoved) {
       
      
    let removeData =  useRemove (data,tobeRemoved)
    setData(removeData)

  }

  return (
    <div className="listcontainer">
      {duplicate.map((abc) => (
        
        <div className="wrapper" style={abc.status =="Complete" ? {backgroundColor: "#8FE3CF"}:{} }>
          <div className="leftside">
            <h4>{abc.todo}</h4>
          </div>
          <div className="rightside">
            <ModeEditIcon 
             className="edit" onClick={()=>Edit(abc.todo)}>
           
            </ModeEditIcon>
          

            <IconButton  style={abc.status =="Complete" ? {display : "none" }:{} }
              onClick={() => Done(abc.todo)}
              size="large"
              color="success"
            >
              <CheckCircleIcon className="check" />{" "}
            </IconButton>
            <IconButton
              onClick={() => Remove(abc.todo)}
              size="large"
              color="error"
            >
              <DeleteOutlineIcon />{" "}
            </IconButton>
          </div>
        </div>
      ))}
    </div>
  );
}
