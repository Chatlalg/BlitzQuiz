import React,{ useState } from 'react'
import Navbar from '../../components/navbar'
import Footer from '../../components/footer'
import Topbar from './topbar'
import QuizCard from './quizItem'
import DragAndDrop from './dragAndDrop'
import DocDisplay from './docDisplay'
const MyUploads = () => {
  

  const handleDrop = (e) => {
    e.preventDefault();
    const files = e.dataTransfer.files;
  };

  const handleDragOver = (e) => {
    e.preventDefault(); 
  };

  const handleClose = () => {
    setIsOpen(false); 
  };

  return (
    <div onDrop={handleDrop} onDragOver={handleDragOver}>
      <Navbar/>
      <Topbar/>
      <DragAndDrop/>
      <DocDisplay/>
      <Footer/>
    </div>
  )
}

export default MyUploads
