import React from 'react'
import deleteIcon from "../../assets/Logo/delete.png"
const DocRow = (props) => {
    return (
        <div className='w-full h-auto py-1 px-6'>
            <div className='w-full h-auto font-sourceSans flex items-center justify-between '>
                <div className='flex gap-3'>
                    {/* serial number */}
                    <p className='text-lg'>{props.no}.</p>
                    {/* name of the file */}
                    <p className='text-lg '>{props.filename}</p>
                </div>
                {/* generate button */}
                <div className='flex gap-8'>
                    <div className='rounded-md border border-black px-2 py-0.5 text-sm font-medium'>
                        <p >Generate</p>
                    </div>
                    {/* delete button */}
                    <img src={deleteIcon} alt="delete button" className='h-6'></img>
                </div>
            </div>
        </div>
    )
}

export default DocRow
