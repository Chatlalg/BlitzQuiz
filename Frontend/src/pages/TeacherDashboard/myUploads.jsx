import React from 'react'
import Navbar from '../../components/navbar'
import Footer from '../../components/footer'
import Topbar from './topbar'
import QuizCard from './quizItem'
import DragAndDrop from './dragAndDrop'
import DocDisplay from './docDisplay'
const MyUploads = () => {
  return (
    <div>
      <Navbar/>
      <Topbar/>
      <DragAndDrop/>
      <DocDisplay/>
      <Footer/>
    </div>
  )
}

export default MyUploads
