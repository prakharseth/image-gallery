import { BiSearch } from 'react-icons/bi';

export default function Search() {
  return (
    <div className='flex items-center justify-center mt-12 w-[520px] bg-white py-2 px-4 rounded-lg'>
        <input
          className='outline-none w-full text-black text-lg font-medium  font-ubuntu placeholder:font-ubuntu '
          type='text'
          placeholder='Search here for Everything'
        />
        <BiSearch className='text-gray-500 text-2xl cursor-pointer' />
      </div>
  )
}
