import React, { useState } from 'react';
import Image from 'next/image.js';
import { tableData } from '../data/data.js';
import { RxDoubleArrowLeft, RxDoubleArrowRight, RxInfoCircled } from 'react-icons/rx';
import { CiFloppyDisk } from 'react-icons/ci';
import ReactPaginate from 'react-paginate';

const Forms = () => {
  const itemsPerPage = 8;
  const [currentPage, setCurrentPage] = useState(0);

  const pageCount = Math.ceil(tableData.length / itemsPerPage);

  const handlePageChange = (selectedPage) => {
    setCurrentPage(selectedPage.selected);
  };

  const displayedData = tableData.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  const [selectedLanguage, setSelectedLanguage] = useState('English');
  const [selectedOption, setSelectedOption] = useState('');

  const handleLanguageChange = (event) => {
    setSelectedLanguage(event.target.value);
  };

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className='grid grid-cols-3 grid-rows-3 gap-4 p-4'>
      <div className='bg-white p-4 col-span-3 lg:col-span-3 rounded-lg border'>
        <p className='text-xl font-bold'>Form title</p>
        <p className='text-gray-600'>
          Sed tortor, sed velit ridiculus ipsum pharetra lacus odio gravida
          augue enim.
        </p>
        <div className='my-4 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded flex flex-wrap gap-4' role='alert'>
          <b className='font-bold'>
            <RxInfoCircled size={20} />
          </b>
          <span className=''>
            Senectus malesuada suspendisse bibendum elit amet vitae.
          </span>
        </div>
        <div className='shadow overflow-hidden rounded border-b border-gray-200'>
          <table className='w-full bg-[#FFFFFF] text-black'>
            <thead className='bg-[#D4D4D4]'>
              <tr>
                <th className='w-1/4 text-left py-3 px-4 font-bold text-sm'>
                  Table Title
                </th>
                <th className='w-1/4 text-left py-3 px-4 font-bold text-sm'>
                  Table Title
                </th>
                <th className='w-1/4 text-left py-3 px-4 font-bold text-sm'>
                  Table Title
                </th>
                <th className='w-1/4 text-left py-3 px-4 font-bold text-sm'>
                  Table Title
                </th>
              </tr>
            </thead>
            <tbody className=''>
              {displayedData.map((value, index) => {
                const rowClassName = index % 2 === 1 ? 'bg-[#F5F5F5]' : '';
                return (
                  <tr key={index} className={rowClassName}>
                    <td className='w-1/4 text-left py-3 px-4'>{value.Title1}</td>
                    <td className='w-1/4 text-left py-3 px-4'>{value.Title2}</td>
                    <td className='w-1/4 text-left py-3 px-4'>{value.Title3}</td>
                    <td className='w-1/4 text-left py-3 px-4 w-100 flex flex-row gap-8'>
                      <button className='bg-blue-700 px-4 py-1 rounded-md text-white flex items-center gap-2'>
                        <CiFloppyDisk size={20}/> Edit
                      </button>
                      <button className='bg-amber-600 px-4 py-1 rounded-md text-white flex items-center gap-2'>
                        <CiFloppyDisk size={20}/> Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className='flex justify-center mt-4'>
          <ReactPaginate
            previousLabel={<RxDoubleArrowLeft size={15}/>}
            nextLabel={<RxDoubleArrowRight size={15}/>}
            breakLabel={'...'}
            breakClassName={'break-me'}
            pageCount={pageCount}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={handlePageChange}
            containerClassName={'pagination flex justify-center gap-1'}
            activeClassName={'active bg-blue-600 border-blue-600 text-white'}
            pageClassName={'border border-gray-300 rounded-[0.2rem]'}
            pageLinkClassName={'px-2 py-3'}
            previousClassName={'flex items-center pr-1'}
            nextClassName={'flex items-center pl-1'}
          />
        </div>
      </div>
      <div className='bg-white p-4 col-span-3 lg:col-span-3 rounded-lg border'>
        <p className='text-xl font-bold'>Form title</p>
        <p className='text-gray-600'>
          Sed tortor, sed velit ridiculus ipsum pharetra lacus odio gravida
          augue enim.
        </p>
        
        <div className='flex flex-row gap-4 my-4'>
            <div className={`flex item-center w-25 gap-1 p-1 border ${selectedLanguage === 'English' ? 'bg-yellow-200 border-yellow-400' : 'border-gray-200'} rounded`}>
                <input id='English' checked={selectedLanguage === 'English'} type='radio' name='languageRadio' value='English' onChange={handleLanguageChange} className='hidden'/>
                <label htmlFor='English' className='flex flex-row gap-2'>
                    <Image
                        src="/English.png"
                        alt="Description of the image"
                        width={20}
                        height={20}
                    />
                    English
                </label>
            </div>
            <div className={`flex item-center w-25 gap-1 p-1 border ${selectedLanguage === 'Turkey' ? 'bg-yellow-200 border-yellow-400' : 'border-gray-200'} rounded`}>
                <input id='Turkey' checked={selectedLanguage === 'Turkey'} type='radio' name='languageRadio' value='Turkey' onChange={handleLanguageChange} className='hidden'/>
                <label htmlFor='Turkey' className='flex flex-row gap-2'>
                    <Image
                        src="/Turkey.png"
                        alt="Description of the image"
                        width={20}
                        height={20}
                    />
                    Turkey
                </label>
            </div>
        </div>

        <div className='flex flex-row gap-4 my-4'>
          <div className='w-screen'>
            <label htmlFor='input1'>Label title</label>
            <input id='input1' type='text' className='border border-gray-200 rounded mt-2 p-2 w-full placeholder-black' placeholder='Placeholder content' />
          </div>
        </div>

        <div className='flex flex-row gap-4 my-4'>
          <div className='w-1/3'>
            <label htmlFor='input4'>Label title</label>
            <select id='input4' className='border border-gray-200 rounded mt-2 p-2 w-full' onChange={handleOptionChange}>
              <option value=''>Choose</option>
              <option value='option1'>Option 1</option>
              <option value='option2'>Option 2</option>
            </select>
          </div>
          <div className='w-1/3'>
            <label htmlFor='input1'>Label title</label>
            <input id='input1' type='text' className='border border-gray-200 rounded mt-2 p-2 w-full placeholder-black' placeholder='Placeholder content'/>
          </div>
          <div className='w-1/3'>
            <label htmlFor='input2'>Label title</label>
            <input id='input2' type='text' className='border border-gray-200 rounded mt-2 p-2 w-full placeholder-black' placeholder='Placeholder content'/>
          </div>
        </div>

        <div className='flex flex-row gap-4 my-4'>
          <div className='w-1/2'>
            <label htmlFor='input1'>Label title</label>
            <input id='input1' type='text' className='border border-gray-200 rounded mt-2 p-2 w-full placeholder-black' placeholder='Placeholder content'/>
          </div>
          <div className='w-1/2'>
            <label htmlFor='input2'>Label title</label>
            <input id='input2' type='text' className='border border-gray-200 rounded mt-2 p-2 w-full placeholder-black' placeholder='Placeholder content'/>
          </div>
        </div>
        <div className='flex flex-row gap-4 my-4'>
            <div className='w-full'>
            <label htmlFor='textarea1'>Label title</label>
            <textarea id='textarea1' className='border border-gray-200 rounded mt-2 p-2 w-full h-44 placeholder-black' placeholder='Placeholder content'></textarea>
            </div>
        </div>
      </div>
      <div className='bg-white p-4 col-span-3 lg:col-span-2 rounded-lg border'>
        <p className='text-xl font-bold'>Form title</p>
        <p className='text-gray-600'>
          Sed tortor, sed velit ridiculus ipsum pharetra lacus odio gravida
          augue enim.
        </p>
        <div className='flex flex-row gap-4 my-4'>
          <div className='w-screen'>
            <label htmlFor='input1'>Label title</label>
            <input id='input1' type='text' className='border border-gray-200 rounded mt-2 p-2 w-full placeholder-black' placeholder='Placeholder content' />
          </div>
        </div>
        <div className='flex flex-row gap-4 my-4'>
          <div className='w-screen'>
            <label htmlFor='input4'>Label title</label>
            <select id='input4' className='border border-gray-200 rounded mt-2 p-2 w-full' onChange={handleOptionChange}>
              <option value=''>Choose</option>
              <option value='option1'>Option 1</option>
              <option value='option2'>Option 2</option>
            </select>
          </div>
        </div>
        <div className='flex flex-row gap-4 my-4'>
          <div className='w-1/2'>
            <label htmlFor='input1'>Label title</label>
            <input id='input1' type='text' className='border border-gray-200 rounded mt-2 p-2 w-full placeholder-black' placeholder='Placeholder content'/>
          </div>
          <div className='w-1/2'>
            <label htmlFor='input2'>Label title</label>
            <input id='input2' type='text' className='border border-gray-200 rounded mt-2 p-2 w-full placeholder-black' placeholder='Placeholder content'/>
          </div>
        </div>
        <div className='flex flex-row gap-4 my-4'>
            <div className='w-full'>
            <label htmlFor='textarea1'>Label title</label>
            <textarea id='textarea1' className='border border-gray-200 rounded mt-2 p-2 w-full h-44 placeholder-black' placeholder='Placeholder content'></textarea>
            </div>
        </div>
      </div>
      <div className='bg-white p-4 col-span-3 lg:col-span-1 rounded-lg border'>
        <p className='text-xl font-bold'>Form title</p>
        <div className='flex flex-row gap-4 my-4'>
          <div className='w-screen'>
            <label htmlFor='input1'>Label title</label>
            <input id='input1' type='text' className='border border-gray-200 rounded mt-2 p-2 w-full placeholder-black' placeholder='Placeholder content' />
          </div>
        </div>
        <div className='flex flex-row gap-4 my-4'>
          <div className='w-screen'>
            <label htmlFor='input4'>Label title</label>
            <select id='input4' className='border border-gray-200 rounded mt-2 p-2 w-full' onChange={handleOptionChange}>
              <option value=''>Choose</option>
              <option value='option1'>Option 1</option>
              <option value='option2'>Option 2</option>
            </select>
          </div>
        </div>
        <div className='flex flex-row gap-4 my-4'>
            <div className='w-full'>
            <label htmlFor='textarea1'>Label title</label>
            <textarea id='textarea1' className='border border-gray-200 rounded mt-2 p-2 w-full h-44 placeholder-black' placeholder='Placeholder content'></textarea>
            </div>
        </div>
        <div className='flex flex-row gap-4 my-4'>
            <div className='w-full bg-blue-600 text-white font-semibold rounded-md p-4 flex justify-center items-center'>
                <input type='button' value='Button title' />
            </div>
        </div>


      </div>
    </div>
  );
};

export default Forms;
