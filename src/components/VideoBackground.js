// import React from 'react'
// import { useSelector } from 'react-redux';
// import useTrailer from '../customHooks/useTrailer';

// const VideoBackground = ({movieId}) => {
//   // const trailerVideo = useSelector((store) => store.movies?.trailerVideo);
  
//   // useTrailer(movieId);

// //   return (
// //     <div className='w-screen '>
// //       {/* <h1 className='text-3xl text-center'>Video Background</h1> */}
// //        <embed className='w-screen aspect-video' opacity="0.5"
// //        src={"https://www.youtube.com/embed/"+trailerVideo?.key
// //       //  + "?controls=0&loop=1&autoplay=1&mute=1"
// // }
// //        frameBorder="0" 
// //        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
// //        title="Youtube Video player" >
// //        </embed>
// //           {/* <embed src="https://media.geeksforgeeks.org/wp-content/uploads/20240108102825/mern.mp4" 
// //         type="video/mp4" width="600" height="400"></embed> */}

// //     </div>
// //   )
// }

// export default VideoBackground

import React from 'react'

const VideoBackground = () => {
  return (

    <div className='w-screen'>
      {/* <h1 className='text-3xl text-center'>Video Background</h1> */}
       <embed className='w-screen aspect-video' opacity="0.5"
       src={"https://www.youtube.com/embed/ITHqeoh5_b0?si=tmaK8YrtknABKEhu"
        // +?.key
      //  + "?controls=0&loop=1&autoplay=1&mute=1"
}
       frameBorder="0" 
       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
       title="Youtube Video player" >
       </embed>
          {/* <embed src="https://media.geeksforgeeks.org/wp-content/uploads/20240108102825/mern.mp4" 
        type="video/mp4" width="600" height="400"></embed> */}

    </div>
  )
}

export default VideoBackground

