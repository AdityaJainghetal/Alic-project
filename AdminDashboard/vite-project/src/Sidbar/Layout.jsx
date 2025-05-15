import React from 'react'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
    <div style={{display:"flex", justifyContent:"center"}}>
      <div style={{width:"20%"}}>
<Sidebar/>
      </div>
      
      <div style={{width:"80%"}}>
           <Outlet/>
       </div>
  
    </div>
    
    
    </>
  )
}

export default Layout