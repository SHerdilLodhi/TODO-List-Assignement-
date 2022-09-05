import React from "react";

function useEdit(data,input,Edited) {
  
  let s = [];
  console.log(input);
  if (input =="")
  {
   return alert("Null Value not allowed!")
  }


  s = data.map((elm) => {
   
     
      if (elm.todo==input){
        
        alert ("Already Entered! ")
        return null
       
      }
     
    if (elm.todo == Edited) {
      return { ...elm, todo: input };
    } else return elm;
  });

  

  return s
}

export default useEdit;
