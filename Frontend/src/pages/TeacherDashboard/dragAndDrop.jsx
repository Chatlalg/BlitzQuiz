import React, { useRef } from 'react';
import uploadIcon from "../../assets/Logo/uploadIcon.png";

const DragAndDrop = () => {
  const fileInputRef = useRef(null); 

  const handleFileUpload = (event) => {
    const files = event.target.files; 
    if (files.length > 0) {
      console.log('Uploaded file:', files[0]); 
    }
  };

  const handleClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div className="w-full h-auto flex justify-center px-28">
      <div className="w-full h-auto flex flex-col items-center border-dashed border-2 rounded-lg border-gray-300" onClick={handleClick}>
        <img src={uploadIcon} alt="upload icon" className='h-8 m-1 mt-4'></img>
        <p className='font-inter'>Drag and Drop or <span className='underline-offset-4 underline'>Upload a file</span></p>
        <p className='font-inter text-gray-600 pb-4 pt-1'>PDF, DOCX, DOC</p>
        <input
          type="file"
          accept=".pdf,.doc,.docx" 
          onChange={handleFileUpload} 
          ref={fileInputRef} 
          className="hidden" 
        />
      </div>
    </div>
  );
};

export default DragAndDrop;

