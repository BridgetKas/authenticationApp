import React from 'react'
import {Outlet} from "react-router-dom"
import TopBar from './components/topBar'


function LayOut() {
  return (
    <div>
        <div>
            <TopBar/>
        </div>
        <div>
            <Outlet/>
        </div>
    </div>
  )
}

export default LayOut