import React from 'react'
import './Admin.css'
import Sidebar from '../../Components/Sidebar/Sidebar'
import { Routes,Route } from 'react-router-dom'

export const Admin = () => {
  return (
    <div className='admin'>
     <Sidebar/>
     <Routes>
      <Route path=''/>
     </Routes>
    </div>
  )
}
export default Admin