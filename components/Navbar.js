export default function Navbar() {
  return (
    <header className=' fixed w-screen flex justify-between p-4 px-12 font-ubuntu text-white bg-gradient-to-r from-slate-500 to-gray-600 drop-shadow-md'>
        <div className='text-xl flex font-medium'>
          Image Gallery
        </div>
        <div className='flex gap-16 text-md items-center'>
          <div className='hover:text-gray-700 cursor-pointer'>Photos</div>
          <div className='hover:text-gray-700 cursor-pointer'>Illustration</div>
          <div className='hover:text-gray-700 cursor-pointer'>Vectors</div>
          <div className='hover:text-gray-700 cursor-pointer'>Video</div>
          <div className='hover:text-gray-700 cursor-pointer'>Music</div>
          <div className='hover:text-gray-700 cursor-pointer'>Sound Effects</div>
        </div>
      </header>
  )
}
