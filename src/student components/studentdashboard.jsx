import { useState } from 'react'
import Sidebar from './sidebar'
import Nav from './navbar'
import Content from './Dashboard-content'
function Studentdashboard() {


  return (
    <>
    <div className="container">
      
      <Sidebar/>
      <div className="content-nested">
 <Nav/>
     <Content/>
      </div>
    
</div>

    </>
  )
}

export default Studentdashboard
