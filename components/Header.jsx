import React from 'react';
import { RxHome, RxGear, RxListBullet } from 'react-icons/rx';
import Image from 'next/image';

const Header = () => {
  return (
    <div className='bg-zinc-950 sticky top-0 right-0 left-0 p-4'>
      <ul className='flex items-center'>
        <div className='flex items-center gap-4'>
          <li>
            <div className='text-white flex gap-2'>
              <RxHome size={20} />
              Home
            </div>
          </li>
          <li>
            <div className='text-white flex gap-2'>
              <RxListBullet size={20} />
              Contents
            </div>
          </li>
          <li>
            <div className='text-white flex gap-2'>
              <RxListBullet size={20} />
              Categories
            </div>
          </li>
          <li>
            <div className='text-white flex gap-2'>
              <RxGear size={20} />
              Settings
            </div>
          </li>
        </div>
        <li className='ml-auto'>
          <div className='text-black bg-white p-1 rounded-full flex items-center gap-1'>
            <div className='rounded-full md: p-2'>
              <Image
                src="/avatar.png"
                alt="Description of the image"
                width={20}
                height={20}
              />
            </div>
            <span className='hidden md:inline'>ismail ihsan Bulbul</span>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Header;
