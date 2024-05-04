import {useEffect} from 'react'
import { Get_Movie_Info_Url1, Get_Movie_Videos_Url, TMDB_API_OPTIONS } from '../utils/constants'
import { useDispatch } from 'react-redux'
import { addTrailer } from '../utils/moviesReduxSlice';

const useTrailer = (movieId) => {
    // const dispatch=useDispatch();

    // const getMovieVideos=async ()=>{
    //     const data=await fetch(Get_Movie_Info_Url1+movieId+Get_Movie_Videos_Url,TMDB_API_OPTIONS);
    //     const json=await data.json();
        
    //     const data1 = json.results.filter((data)=>{
    //         return data.type=="Trailer"
    //     });

    //     console.log(data1);
    //     // const filterData=json.results.filter((data)=>{
    //     //     return data.type="Trailer"
    //     // })

    //     // const trailer=filterData.length?filterData[0]:json.results[0];
    //     // dispatch(addTrailer(trailer));
    // }

    // useEffect(()=>{
    //     getMovieVideos();
    // },[])  
}

export default useTrailer;