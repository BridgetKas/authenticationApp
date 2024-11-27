import React, { ReactNode } from 'react'

type Props = {
    title:string,
    icon:ReactNode
}

function Social(props:Props) {
  return (
    <div className="socialIcon">
        <div className='text-xl'>
         {props.icon}
        </div>
        <div>
            {props.title}
        </div>
    </div>
  )
}

export default Social