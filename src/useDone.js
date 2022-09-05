import React from 'react'

function useDone(data,todo) {
 

    
    let Aud1 = new Audio("./select.mp3")
    Aud1.play()

    let s = []
    s = data.map((elm)=>{
        if (todo == elm.todo){

           return {...elm, status: "Complete"}
        } 
        return elm


    })
 
 
 
    return s
}

export default useDone