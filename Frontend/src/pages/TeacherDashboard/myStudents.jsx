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
      <div className='w-full flex items-center'>
      <div className='w-full h-auto grid grid-cols-2 gap-4 p-28 py-10 pb-20'>
        <StudentCard key={1} studentname={"Student 1"} attempted={5} avgscore={80}/>
        <StudentCard key={2} studentname={"Student 2"} attempted={5} avgscore={80}/>  
        <StudentCard key={3} studentname={"Student 3"} attempted={5} avgscore={80}/>
        <StudentCard key={4} studentname={"Student 4"} attempted={5} avgscore={80}/>  
        <StudentCard key={5} studentname={"Student 5"} attempted={5} avgscore={80}/>
        <StudentCard key={6} studentname={"Student 6"} attempted={5} avgscore={80}/>  
        <StudentCard key={7} studentname={"Student 7"} attempted={5} avgscore={80}/>
        <StudentCard key={8} studentname={"Student 8"} attempted={5} avgscore={80}/>  
      </div>
      {/* <div className='w-9/12 h-auto flex flex-col space-y-4 py-8'>
        
      </div> */}
      </div>
      <Footer/>
    </div>
  )
}

export default MyStudents
