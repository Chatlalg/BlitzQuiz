import React from 'react'
import Navbar from '../../components/navbar'
import Footer from '../../components/footer'
import Topbar from './topbar'
import StudentCard from './studentCard'
import "../../index.css"

const MyStudents = () => {
  return (
    <div>
      <Navbar/>
      <Topbar/>
      <div className='w-full flex'>
      <div className='w-full h-auto flex flex-col space-y-4 pl-28 py-8'>
        <StudentCard key={1} studentname={"Soham Joshi"} attempted={5} avgscore={80}/>
        <StudentCard key={2} studentname={"Soham Joshi"} attempted={5} avgscore={80}/>  
        <StudentCard key={1} studentname={"Soham Joshi"} attempted={5} avgscore={80}/>
        <StudentCard key={2} studentname={"Soham Joshi"} attempted={5} avgscore={80}/>  
        <StudentCard key={1} studentname={"Soham Joshi"} attempted={5} avgscore={80}/>
        <StudentCard key={2} studentname={"Soham Joshi"} attempted={5} avgscore={80}/>  
        <StudentCard key={1} studentname={"Soham Joshi"} attempted={5} avgscore={80}/>
        <StudentCard key={2} studentname={"Soham Joshi"} attempted={5} avgscore={80}/>  
      </div>
      <div className='w-9/12 h-auto flex flex-col space-y-4 py-8'>
        
      </div>
      </div>
    </div>
  )
}

export default MyStudents
