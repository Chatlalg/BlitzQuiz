import React from 'react'
import uploadIcon from "../../assets/Logo/uploadIcon.png"

const DragAndDrop = () => {
  return (
    <div className="w-full h-auto flex justify-center px-28 ">
      <div className="w-full h-auto flex flex-col items-center border-dashed border-2 rounded-lg border-gray-300">
        <img src={uploadIcon} alt="upload icon" className='h-8 m-1 mt-4'></img>
        <p className='font-inter '>Drag and Drop or <span className='underline-offset-4 underline'>Upload a file</span></p>
        <p className='font-inter text-gray-600 pb-4 pt-1'>PDF, DOCX, DOC</p>
      </div>
    </div>
  )
}

export default DragAndDrop
