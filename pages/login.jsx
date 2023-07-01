import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Login = () => {
  return (
    <div className='flex items-center justify-center bg-gray-100 min-h-screen'>
      <div className='bg-white flex flex-col sm:flex-row rounded-xl'>
        <div className='w-full md:w-1/2'>
          <img
            src="/login.png"
            alt="Description of the image"
            width={500}
            height={500}
            className="rounded-l-xl"
          />
        </div>
        <div className='w-full md:w-1/2 px-8 py-4'>
          <p className='text-xl font-bold'>Login</p>
          <p className='text-gray-600'>
            Donac tortor quam at duis totor
          </p>
          <div className='flex flex-row gap-4 my-4'>
            <div className='w-full'>
              <label htmlFor='input1'>Email</label>
              <input
                id='input1'
                type='text'
                className='border border-gray-200 rounded mt-2 p-2 w-full placeholder-black'
                placeholder='Placeholder content'
              />
            </div>
          </div>
          <div className='flex flex-row gap-4 my-4'>
            <div className='w-full'>
              <label htmlFor='input2'>Password</label>
              <input
                id='input2'
                type='password'
                className='border border-gray-200 rounded mt-2 p-2 w-full placeholder-black'
                placeholder='Placeholder content'
              />
              <div className="text-right text-gray-600 mt-2">
                <Link href="/">Forgot Password?</Link>
              </div>
            </div>
          </div>
          <div className='flex flex-row gap-4 my-4'>
            <div className='w-full bg-blue-600 text-white font-semibold rounded-md p-4 flex justify-center items-center'>
              <input type='button' value='Login' />
            </div>
          </div>
          <div className='flex flex-row gap-4 mt-8 mb-4 items-center'>
            <hr className='flex-grow border-gray-400' />
            <p className='text-gray-400'>or</p>
            <hr className='flex-grow border-gray-400' />
          </div>
          <div className='flex flex-row gap-4 my-4'>
            <div className='w-full bg-white text-gray-400 border border-gray-400 font-semibold rounded-md p-4 flex justify-center items-center'>
              <input type='button' value='Register Now' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
