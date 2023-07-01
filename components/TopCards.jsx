import React from 'react'
import { FaRegListAlt, FaShoppingBag, FaStoreAlt , FaUser} from 'react-icons/fa';


const TopCards = () => {
  return (
    <div className='grid lg:grid-cols-4 gap-4 p-4'>
      <div className='bg-white flex w-100 col-span-1 rounded-lg border p-4'>
        <span className='text-orange-600 p-3'>
            <FaShoppingBag size={40} />
        </span>
        <div className='flex flex-col pb-4 w-100'>
            <p className='text-gray-600'>Total Sales</p>
            <p className='text-2xl font-bold'>$2456</p>
        </div>
      </div>
      <div className='bg-white flex w-100 col-span-1 rounded-lg border p-4'>
        <span className='text-violet-600 p-3'>
            <FaStoreAlt size={40} />
        </span>
        <div className='flex flex-col pb-4 w-100'>
            <p className='text-gray-600'>Total Expenses</p>
            <p className='text-2xl font-bold'>$3326</p>
        </div>
      </div>
      <div className='bg-white flex w-100 col-span-1 rounded-lg border p-4'>
        <span className='text-emerald-600 p-3'>
            <FaUser size={40} />
        </span>
        <div className='flex flex-col pb-4 w-100'>
            <p className='text-gray-600'>Total Visitors</p>
            <p className='text-2xl font-bold'>5325</p>
        </div>
      </div>
      <div className='bg-white flex w-100 col-span-1 rounded-lg border p-4'>
        <span className='text-purple-600 p-3'>
            <FaRegListAlt size={40} />
        </span>
        <div className='flex flex-col pb-4 w-100'>
            <p className='text-gray-600'>Total Orders</p>
            <p className='text-2xl font-bold'>1326</p>
        </div>
      </div>
    </div>
  )
}

export default TopCards
