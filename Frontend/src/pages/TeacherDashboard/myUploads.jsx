import React,{ useState } from 'react'
import Navbar from '../../components/navbar'
import Footer from '../../components/footer'
import Topbar from './topbar'
import QuizCard from './quizItem'
import DragAndDrop from './dragAndDrop'
import DocDisplay from './docDisplay'
const MyUploads = () => {
  
  const [isOpen, setIsOpen] = useState(false); 

  const handleDrop = (e) => {
    e.preventDefault();
    const files = e.dataTransfer.files;
    if (files.length > 0) {
      setIsOpen(true); 
    }
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
      {isOpen && (
        <div className="absolute z-50 inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-5 rounded-lg">
            <h2>Document Uploaded!</h2>
            <p>Your document has been successfully uploaded.</p>
            <button onClick={handleClose} className="mt-3 bg-blue-500 text-white p-2 rounded">
              Close
            </button>
          </div>
        </div>
      )}
      <DocDisplay/>
      <Footer/>
    </div>
  )
}

export default MyUploads
