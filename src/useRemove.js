import React from 'react'

function useRemove(data,tobeRemoved) {

    let Aud2 = new Audio("./trash.mp3") 
    Aud2.play()

    let s = []
    s = data.filter((elm) => {
        return elm.todo !== tobeRemoved;
      })
    



  return s
}

export default useRemove