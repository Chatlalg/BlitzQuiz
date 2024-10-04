//will display the documents uploaded by the teacher
import React from 'react'
import "../../index.css"
import DocRow from './docRow'
const DocDisplay = () => {
  return (
    <div className="w-full h-auto flex flex-col px-28 my-10 ">
      {/* Namebar */}
      <div className='w-full rounded-t-lg h-auto bg-[#D9D9D9] p-3 px-12 drop-shadow-md'>
        <p className='font-sourceSans text-lg'>Name</p>
      </div>
      {/* Document table */}
      <div className='w-full h-auto py-2 shadow-md rounded-b-lg'>
        <DocRow key={1} no={1} filename={"Document 1"}/>
        <DocRow key={2} no={2} filename={"Document 2"}/>
        <DocRow key={3} no={3} filename={"Document 3"}/>
        <DocRow key={4} no={4} filename={"Document 4"}/>
        <DocRow key={5} no={5} filename={"Document 5"}/>
        <DocRow key={6} no={6} filename={"Document 6"}/>
        <DocRow key={7} no={7} filename={"Document 7"}/>
        <DocRow key={8} no={8} filename={"Document 8"}/>
        <DocRow key={9} no={9} filename={"Document 9"}/>
      </div>
    </div>
  )
}

export default DocDisplay
