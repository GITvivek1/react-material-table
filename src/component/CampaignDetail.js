import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";


function CampaignDetail({handleClickBtn}) {
  return (
    <div className='m-4 bg-white p-4 rounded-xl'>
      <div className='flex items-center justify-between '>
        <h1 className='font-bold text-xl'>Enter Campaign Details</h1>
        <button className='bg-blue-600 py-2 px-4 rounded-md text-white flex gap-x-2 items-center justify-center' onClick={()=>handleClickBtn(1)}>PROCEED <FaArrowRightLong /></button>
      </div>
      <div className='p-10 flex flex-wrap items-center justify-start'>
        <input type='text' placeholder='Product Name' className='border-2 rounded border-gray-500 w-56 py-1 px-2 m-4'></input>
        <input type='text' placeholder='Product Name' className='border-2 rounded border-gray-500 w-56 py-1 px-2 m-4'></input>
        <input type='text' placeholder='Product Name' className='border-2 rounded border-gray-500 w-56 py-1 px-2 m-4'></input>
        <input type='text' placeholder='Product Name' className='border-2 rounded border-gray-500 w-56 py-1 px-2 m-4'></input>
        <input type='text' placeholder='Product Name' className='border-2 rounded border-gray-500 w-56 py-1 px-2 m-4'></input>
      </div>
    </div>
  )
}

export default CampaignDetail