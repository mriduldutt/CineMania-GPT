import React from 'react'

const MainVideoTitle = (props) => {
    const {original_title,overview} = props;
    return (
    <div className='lg:w-3/12 md:w-6/12 p-2 mx-6 text-black absolute lg:my-[20%] sm:my-[20%] md:my-[25%]'>
      <div className='text-lg sm:text-xl md:text-3xl p-2 m-2 font-bold'>
        {original_title}
      </div>
      <div className=' text-black-300 lg:block p-2 m-2'>
        {overview}
     </div>
      <div className='flex '>
      <button className='bg-black text-lg text-white lg:px-[12%]  lg:py-[4%]  md:px-[6%] md:py-[2%] rounded-lg  m-2 bg-opacity-70 flex justify-center items-center'>
        <div> ▶  </div>  &nbsp; 
        <div> Play </div>
      </button>
      <button className='bg-gray-400 text-lg text-black lg:py-[4%] lg:px-[10%]   md:px-[8%] md:py-[2%] rounded-lg  m-2 flex items-center justify-center opacity-70' >
        <div>
             ℹ️ 
        </div>&nbsp;
        <div>
            More info
        </div>
        </button>
      </div>

    </div>
  )
}

export default MainVideoTitle;
