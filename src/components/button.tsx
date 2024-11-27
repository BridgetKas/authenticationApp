import React from 'react'

type ButtonProps ={
    title:string
}

function Button(props:ButtonProps) {
  return (
    <div>
        <button className="text-black border-2 border-blue-700 p-2.5 rounded-xl">{props.title}</button>
    </div>
  )
}

export default Button