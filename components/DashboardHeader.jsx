import React from 'react'
import { RxPlus, RxGear, RxMagnifyingGlass } from 'react-icons/rx'

const DashboardHeader = () => {
  return (
    <div className='bg-white sticky top-[4.7rem] right-0 left-0 p-4'>
      <ul className='flex items-center gap-8 flex-wrap'>
        <div className='flex items-center gap-4'>
          <li>
            <div className='text-black flex gap-2 font-bold'>
              Add New Post
            </div>
          </li>
        </div>
        <div className='flex items-center gap-4'>
          <li>
            <div className='text-black flex gap-2 items-center'>
              <RxPlus size={20}/>
              Add Content
            </div>
          </li>
        </div>
        <div className='flex items-center gap-4'>
          <li>
            <div className='text-black flex gap-2 items-center'>
              <RxGear size={20}/>
              Settings
            </div>
          </li>
        </div>
        <li className='ml-auto'>
          <div className='flex items-center gap-2 text-black border-2 border-gray-700 rounded-lg p-1'>
            <input
              type='text'
              placeholder='Search Content...'
              className=' px-2 py-1 focus:outline-none'
            />
            <RxMagnifyingGlass size={20}/>
          </div>
        </li>
      </ul>
    </div>
  )
}

export default DashboardHeader
