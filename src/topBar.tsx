import React from 'react'
import { SiWelcometothejungle } from "react-icons/si";
import { NavLink } from "react-router-dom";
import Button from './button';


const mainbar = [
    {
        component:<Button title='Sign up'/>,
        id:1,
        path:'/'
    },
    {
        component:<Button title='Sign in'/>,
        id:2,
        path:'/logIn'
    },
    
]



function TopBar() {
  return (
    <div className="flex items-center justify-between w-[80%] mx-auto mt-3">
        <div className="text-4xl">
            <SiWelcometothejungle />
        </div>

        <div className="flex items-center gap-2.5">
            {
                mainbar.map(item =>(
                    <div key={item.id} >
                        <div>
                            <NavLink to={item.path} >{item.component}</NavLink>
                        </div>
                    </div>
                ))
            }
        </div>
    
    </div>
  )
}

export default TopBar
