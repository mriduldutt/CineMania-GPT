import React from 'react';

const VideoTitle = (props) => {
  
  // eslint-disable-next-line react/prop-types
  const {title,overview} = props;
// console.log(overview);
  return (
    <div className='lg:w-3/12 sm:w-1/2 p-2 mx-6 text-white absolute my-[25%] sm:my-[21%] md:my-[17%]'>
     <div className='text-lg sm:text-xl md:text-3xl p-2 m-2 font-bold'>
        {title}
     </div>
     <div className=' text-gray-300 lg:block p-2 m-2 '>
        {overview}
     </div>

     <div className='flex md:mx-[10%]'>
       <button className='bg-white text-lg text-black mx-[10%] md:mx-0 lg:px-[12%]  lg:py-[4%] py-[2%] px-[2%]  md:px-[5%] md:py-[0%] rounded-lg   m-2  flex justify-center items-center hover:bg-opacity-80'> ▶ PLAY</button>
       <button className='bg-white text-lg text-black lg:py-[4%] lg:px-[10%]   md:px-[5%] sm:px-[5%] md:py-[2%] rounded-lg  m-2 flex items-center justify-center opacity-80 hover:bg-opacity-90'>More Info</button>
     </div>
    </div>
  )
}

export default VideoTitle